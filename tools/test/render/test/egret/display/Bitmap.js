describe('Display - Bitmap', function () {
  var bmp = new egret.Bitmap();
  it('texture', function () {
    expect(bmp.texture).to.be.equal(null);
    bmp.texture = RES.getRes("off_png");
    expect(bmp.width).to.be.equal(65);
    expect(bmp.height).to.be.equal(27);
  });
  it('scale9Grid', function () {
    expect(bmp.scale9Grid).to.be.equal(null);
    bmp.scale9Grid = new egret.Rectangle(1, 3, 116, 123);
    var s9 = bmp.scale9Grid;
    expect(s9.x).to.be.equal(1);
    expect(s9.y).to.be.equal(3);
    expect(s9.width).to.be.equal(116);
    expect(s9.height).to.be.equal(123);
  });
  it('fillMode', function () {
    expect(bmp.fillMode).to.be.equal('scale');
    bmp.fillMode = egret.BitmapFillMode.REPEAT;
    expect(bmp.fillMode).to.be.equal('repeat');   
  });
  it('smoothing', function () {
    expect(bmp.smoothing).to.be.true;  
    bmp.smoothing = false;
    expect(bmp.smoothing).to.be.false;  
  });
  console.log(bmp.smoothing)

});
