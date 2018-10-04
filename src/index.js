module.exports = function getZerosCount(number, base) {
  var j = 1;
var i = 2;
var a = new Array();
do {
  
 if (base % i == 0){
  a[j] = i;
  j++;
  base = base / i;
 }
 else
 {
  i++;
 }
}
while (i < base);
a[j] = i;
var res = {};
a.forEach(function(e){
    res[e] = 1 + ~~res[e];
})
 var count = 0;
  var k = 1;
  do {
    count += Math.floor(number / Math.pow(a[a.length-1], k));
    k++;
  }
  while (Math.pow(a[a.length-1], k) < number) 
  return count; // your implementation
}