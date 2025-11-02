export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from /public
    if (url.pathname === '/') {
      return env.ASSETS.fetch(new Request(request.url.replace(url.pathname, '/index.html')));
    }
    
    return env.ASSETS.fetch(request);
  }
};
