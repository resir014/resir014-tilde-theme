exports.paths = {
  public: 'static',
  watched: ['app','vendor'],
};

exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js' : /^app/,
      'js/vendor.js' : /(^bower_components|vendor)[\\/]/,
    }
  },
  stylesheets: {
    joinTo: 'css/app.css'
  }
};

exports.plugins = {
  babel: {
    presets: [
      ['env', {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      }],
    ],
  },
  postcss: {
    processors: [
      require('autoprefixer'),
      require('cssnano'),
    ],
  },
};
