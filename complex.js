function Complex (x, y) {
	this.re = x;
	this.im = y;
};

Math.complex = Complex;

//addition function
Complex.prototype.sum = function(y) {
	var r = this.re + y.re;
	var i = this.im + y.im;

	var result =  new Complex(r, i);
	return result;
}
//subtraction function
Complex.prototype.difference = function(y) {
	var r = this.re - y.re;
	var i = this.im - y.im;

	var result =  new Complex(r, i);
	return result;

	
}
//multiplication function
Complex.prototype.multiply = function(y) {

	var r = (this.re * y.re) - (this.im * y.im);
	var i = (this.re * y.im) + (this.im * y.re);

	var result = new Complex(r, i);

	return result;
	
}
//division function
Complex.prototype.division = function(y) {

	var z = {re: y.re, im: - (y.im)};

	if (z !== 0){
		var a = y.multiply(z);
		var b = y.multiply(y,z);

		var r = (a.re) / (b.re);
		var i = (a.im) / (b.re);

		var result = new Complex(r, i);

		return result;

	} else {
		console.log("Cannot be divided by 0!");
	}
	
}