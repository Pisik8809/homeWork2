function find (arr, number1) {
var workarr = arr,
target = number1;
for (var i = 0; i < workarr.length; i++) {
if(target == workarr[i]) {alert (target);}
else {console.log(workarr[i]);}
}
console.log('find is over');
}
find([5, 6, 8, 10, 12, 14], 10);
