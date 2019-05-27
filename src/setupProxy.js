const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/gateway', { 
      target: 'https://api.beibei.com',
      changeOrigin:true  
  }));
  
};