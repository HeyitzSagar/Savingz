Number.prototype.common = function() {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var a = 10000;
var b = 100000;
var c = 1000000;
var d = 1234567890;

console.log(a.common());  
console.log(b.common()); 
console.log(c.common());  
console.log(d.common());  

output: -->

// 10,000
// 100,000
// 1,000,000
// 1,234,567,890