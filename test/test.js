var t = require('assert');
var jsdom = require('jsdom');
var exec = require('child_process').exec;

// perform browserify bundling
exec(__dirname + '/../node_modules/browserify/bin/cmd.js ' +
     __dirname + '/fixture/entry.js -p ../ -o ' +
     __dirname + '/fixture/out.js', function() {

  jsdom.env('<html><head></head><body></body></html>', ['file://' + __dirname + '/fixture/out.js'], function(e, window) {
    t.ok(!e);

    var frags = window.frags;

    t.equal(frags.singleQuotes.childNodes.length, 1);
    t.equal(frags.empty.childNodes.length, 0);
    t.equal(frags.multipleChildren.childNodes.length, 2);
  });
});
