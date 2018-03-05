'use strict';
var expect = chai.expect;
// require('./test/lib/add.js');
// var fs = require('fs');
// var app = require('electron').remote; 
var add = require('./test/lib/add.js').add;
describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    // console.log('numChildren22:', container.numChildren)
    // console.log('egret',egret);
    // console.log('egret.Shappe',egret.Shape);
    var sp = new egret.Shape();
    sp.graphics.beginFill(0xffff00);
    sp.graphics.drawRect(0, 0, 123, 368);
    sp.graphics.endFill();
    sp.x = 100;
    sp.y = 100;
    container.addChild(sp)
    expect(container.numChildren).to.be.equal(1);
  });

  it('任何数加0等于自身', function () {
    expect(add(1, 0)).to.be.equal(1);
    expect(add(0, 0)).to.be.equal(0);
    // document.body.style.display = 'block'
  });
  require('./test/a/a1.js');
});
