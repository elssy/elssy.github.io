
describe("Complex-Number", function () {

    it("it should return an object with real and imaginary number as the properties", function () {
      var obj = new Complex(2, 3);
      expect(obj.re).toBe(2);
      expect(obj.im).toBe(3);
  });


  it("should find addition of two complex numbers", function() {
    var x = new Complex(8, 9);
    
    var y = new Complex(2, 1);
   
    var ans = x.sum(y);
    expect(ans.re).toEqual(10);
    expect(ans.im).toEqual(10);
  });

  it("should find difference of two complex numbers ", function() {
    var x = new Complex(8, 9);
    var y = new Complex(2, 1);

    ans = x.difference(y);
    expect(ans.re).toEqual(6);
    expect(ans.im).toEqual(8);
  });

  it("should multiply two complex numbers ", function() {
    var x = new Complex(8, 9);
    var y = new Complex(2, 1);

    ans = x.multiply(y);
    expect(ans.re).toEqual(7);
    expect(ans.im).toEqual(26);
  });  

  it("should perform division of two complex numbers ", function() {

    var x = new Complex(4, 2);
    var y = new Complex(3, -1);

    ans = x.division(y);
    expect(ans.re).toEqual(1);
    expect(ans.im).toEqual(1);
  }); 
});