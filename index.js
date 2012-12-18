var fs = require('fs');

module.exports = function(dir, o) {
  o.register('.html', function(err, file) {

    var contents = fs.readFileSync(file).toString().split('\n').join('\\n').replace(/'/g,'\\\'');

    return [
      '',
      'var frag = document.createDocumentFragment(),',
      '    div = document.createElement("div");',
      '',
      'div.innerHTML = \'' + contents + '\'',
      'for (var i=0,l=div.childNodes.length; i<l; i++) {  frag.appendChild(div.childNodes.item(i)); }',
      'module.exports = frag'
    ].join('\n');

  });
};