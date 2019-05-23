const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/ajax', { 
      target: 'http://m.maoyan.com',
      changeOrigin:true  
  }));

};