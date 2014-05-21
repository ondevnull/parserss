'use strict';

var request = require('request');
var FeedParser = require('feedparser');

function rss (url, max, callback) {
  var parser = new FeedParser();
  var c = 0;
  if (max == null)
    max = 10;

  var res = {
    meta: {},
    articles: []
  };

  var req = request({
    method: 'GET',
    uri: url
  });

  req.on('response', function (response) {
    var stream = this;

    if (response.statusCode != 200) 
      return this.emit('error', new Error('Bad status code'));

    stream.pipe(parser);
  });

  req.on('error', function (err) {
    return callback(err);
  });

  parser.on('error', function (err) {
    return callback(err);
  });

  parser.on('readable', function () {
    var stream = this;
    res.meta = this.meta;
    var item;

    while (item = stream.read()) {
      c++;
      if (c <= max || max === 0)
        res.articles.push(item);
    }

    if (c === max && max !== 0)
      return callback(null, res);

  });

  parser.on('end', function () {
    return callback(null, res);
  });

}

module.exports = rss;
