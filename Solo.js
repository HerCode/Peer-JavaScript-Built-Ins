var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

1) Iterate through the stringList and produce the following output:

var months = ["March", "April", "May"];
var i = 2;
var stringList = months.length;
var text = "March, April, ";

for (; i < list; i++) {
    text += months[i] + "";
}
//output Months list March, April, May//



2) Console log the last element in numList using .length to find the last index

var numbers = [13, 78, 34];
numbers.length;
console.log(numbers['2']);
// output 34//

3) Iterate through numList, output all numbers as single String

var numbers = [13, 78, 34];

for (var i = 0; i < numbers.length; i++) {
  numbers[i]; console.log(numbers['0'],numbers['1'],numbers['2']);
}
//output all numbers as single string//

4) Iterate through numList and add all of the elements together and console log the total

var numbers = [13, 78, 34];

for (var i = 0; i < numbers.length; i++) {
  numbers[i]; console.log(numbers['0']+numbers['1']+numbers['2']);
}
//output total sum of elements//

5) If the second element in boolList is true, log the sum of the first and last elements in numList. Otherwise multiply the second element in numList by itself and log the result.

for (var i=0; i < boolarray.length; i++) {
    for (var j=0; j < boolarray[i].length; j++) {
        if (boolarray[i][j] == false) {
            return false;
        }
    };
};

return (true);
//output Still working this one out//
6) Iterate through boolList, if the value is true console log the equivelent index in numList.

var boolList= [false, true, false];

for (int i = 0; i < test.length; i++) {
    test[i] = !test[i];
}
var boolList= [false, true, false];
var numbers = [13, 78, 34];
var x = 0;
var y = 0;
breakBoolList: while (true) {
 console.log(numbers['1']);
 x += 0;
 y = 0;
 while (true) {
   console.log(numbers['1']);
   y += 0;
   if (y === 1 && x === 1) {
     break breakBoolList;
   } else if (y === 1) {
     break;
   }
 }
}

//output true console log number[2] 78//
7) Combine all three arrays into one array, and log the newly created are in reverse.
var a = ["March", "April", "May"];
var b = [13, 78, 34];
var c = ["false", "true", "false"];
var d = a.concat(b,c);
console.log(d);

var d = ["March", "April", "May", 13, 78, 34, "false", "true", "false"];
console.log(d.reverse(););

//output three combined arrays in reverse//
