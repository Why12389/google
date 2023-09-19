const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://google-gules-six.vercel.app/url?sa=i&rct=j&q=&esrc=s&source=web&cd=&ved=0CAMQw7AJahcKEwjQ6o6qm7eBAxUAAAAAHQAAAAAQAg&url=https%3A%2F%2Fnow.gg%2F&psig=AOvVaw1enJXKHD_FZCRSOYWo5kyl&ust=1695231425859633&opi=89978449";//your website url
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = "http://106.15.2.32:6969";
  //   }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
