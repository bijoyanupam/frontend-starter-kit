module.exports = function (grunt) {
  return {
    'all': {
      'options': {
        'urls': [
          'http://localhost:<%= connect.server.options.port %>/tests/js/example/example.html'
        ]
      }
    }
  }
};
