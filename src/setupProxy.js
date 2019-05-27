const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/rms', { 
    target: 'https://dsapi.beibei.com',
    changeOrigin:true  
}));

app.use(proxy('/ads', { 
  target: 'https://dsapi.beibei.com',
  changeOrigin:true  
}));

app.use(proxy('/martshow', { 
  target: 'https://dsapi.beibei.com',
  changeOrigin:true  
}));

};