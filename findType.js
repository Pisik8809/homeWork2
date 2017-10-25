function findString(arr) {
for (var i = 0; i < arr.length; i++) {
if(typeof arr[i] == 'string') {alert (arr[i]);}
else {console.log(arr[i]);}
}
console.log('findType is over');
}
findString([1, 2, 3, 'string1', 5, 6]);
