'use strict';
var expect = chai.expect;
describe('Egret 引擎 API 测试', function () {
  require('./test/egret/main.js');
  require('./test/extension/eui/main.js');
  require('./test/extension/game/main.js');
  require('./test/extension/tween/main.js');
});
