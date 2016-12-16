/*
* @Author: mochen
* @Date:   2016-12-16 10:59:34
* @Last Modified by:   mochen
* @Last Modified time: 2016-12-16 11:41:43
*/

'use strict';

var request = require('request');
var Promise = require('bluebird');
var request_url = 'http://fanyi.youdao.com/openapi.do';

var C2e = function(keyfrom, key) {
  this.options = {
    keyfrom: keyfrom,
    key: key,
    type: 'data',
    doctype: 'json',
    version: '1.1'
  };
}
C2e.prototype.translate = function(q) {
  var full_url = request_url + '?q=' + encodeURIComponent(q);
  for (var name in this.options) {
    full_url += ('&' + name + '=' + this.options[name]);
  }
  return new Promise(function(resolve, reject) {
    request.get(full_url, function(error, response, body) {
      if (error) {
        reject(error)
      }
      var res;
      try {
        res = JSON.parse(body);
      } catch (e) {
        reject('翻译失败，请检查配置');
      }
      resolve(res.translation[0].split(/\s+/g));
    })
  })

};

module.exports = C2e;