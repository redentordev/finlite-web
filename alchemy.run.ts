import alchemy from "alchemy";
import { Assets, Worker } from "alchemy/cloudflare";

const app = await alchemy("finlite");

const staticAssets = await Assets({
	path: "./public/",
})

export const worker = await Worker("web", {
	entrypoint: "./src/index.ts",
	assets: {
		"html_handling": "drop-trailing-slash",
		"run_worker_first": true,
	},
	bindings: {
		ASSETS: staticAssets
	},
	domains: ["finlite.redentor.dev"],
});

console.log(`Worker deployed at: ${worker.url}`);
await app.finalize();
