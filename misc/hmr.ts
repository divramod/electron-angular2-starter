System.import('systemjs-hot-reloader').then(function (HotReloader) {
  var pathTransform = function(filename){
      //transform hot reload filesystem event path to url path
      var out = filename.replace(/\.\.\/somePath\//, '');
      return out;
  };
  
  var hr = new HotReloader.default('http://localhost:5776', pathTransform);
  hr.on('change', (file) => {
      System.normalize(file)
      .then(function(url){
          if (url.substr(url.length - 7, 7) == '.css.js')
          {
              var cssUrl = url.substr(0, url.length - 3);
  
              System.import('app')
              .then(function(cssPlugin) {
                  cssPlugin.fetch({address:cssUrl});
              });
          }

          if (url.substr(url.length - 4, 4) == '.css')
          {
              var cssUrl = url.substr(0, url.length);
  
              System.import('css').then(function(cssPlugin) {
                  console.log("cssplugin", cssPlugin);
                  console.log("cssUrl", cssUrl);
                  cssPlugin.fetch({address:cssUrl});
              });
          }
      });
  });
});
