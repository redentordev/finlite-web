import { Hono } from "hono"
import type { worker } from "../alchemy.run"

type Env = typeof worker.Env

const app = new Hono<{ Bindings: Env }>()

// API routes
app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "0.1.0",
  })
})

// Serve static files from ASSETS binding
app.get("*", async (c) => {
  const url = new URL(c.req.url)
  let path = url.pathname

  // Redirect .html URLs to clean URLs (except index.html)
  if (path.endsWith(".html") && path !== "/index.html") {
    const cleanPath = path.replace(/\.html$/, "")
    return c.redirect(cleanPath, 301)
  }

  // Handle root path - serve index.html
  if (path === "/" || path === "") {
    const indexUrl = new URL("/index.html", url.origin)
    return await c.env.ASSETS.fetch(indexUrl.toString())
  }

  // Try to fetch the exact path first
  const asset = await c.env.ASSETS.fetch(c.req.url)
  if (asset.status === 200) {
    return asset
  }

  // If no extension, try adding .html for clean URLs
  if (!path.includes(".")) {
    const htmlUrl = new URL(path + ".html", url.origin)
    const htmlAsset = await c.env.ASSETS.fetch(htmlUrl.toString())
    if (htmlAsset.status === 200) {
      return htmlAsset
    }
  }

  // Return 404
  return c.text("Not Found", 404)
})

export default app
