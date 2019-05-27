const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/martgoods', { 
      target: 'https://dsapi.beibei.com',
      changeOrigin:true  
  }));

  app.use(proxy('/mroute', { 
    target: 'https://api.beibei.com',
    changeOrigin:true  
}));

};