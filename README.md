# c2e

> 这是一个工具，使用有道API，可以将中文翻译为英文。

## Usage

```
npm install c2e --save
```

```javascript

var C2e = require('c2e');
var c2e = new C2e('your keyfrom', 'your key');

//c2e.translate 方法返回promise
c2e.translate('这是一个工具，可以将中文翻译为英文').then(function(data) {
  //[ 'This','is','a','tool','that','can','translate','Chinese','into','English' ]
})


```

有道API申请地址：[http://fanyi.youdao.com/openapi](http://fanyi.youdao.com/openapi)