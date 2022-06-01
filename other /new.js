var p = [2, 7, 11, 13, 18, 15];
var m = 9;

function summ(num, target) {
  var y = 0;
  var x = num.length;
  var k = 1;
  while (y < x) {
    while (k < x) {
      if (num[y] + num[k] === target) {
        return `[${y},${k}]`;
      }
      k = k + 1;
    }
    y = y + 1;
    k = y + 1;
    console.log(y);
  }

  return "no addintion available";
}

function summy(nums, taggy) {
  var x = nums.length;
  var y = 0;
  while (y < x) {
    for (var i = y + 1; i < x; i++) {
      if (nums[y] + nums[i] === taggy) {
        return `${nums[y]} and ${nums[i]}`;
      }
    }

    y = y + 1;
  }
  return "no addintion available";
}

/*

//reverse an araray
function sortARRAY(array) {
  var l = array.length;
  var y = 0;
  var x = [];

  while (y < l) {
    var k = array[y];
    x.unshift(k);
    y = y + 1;
  }
  return x;
}

//console.log(joinARR(p));

var s = [2, 4, 3];
var t = [5, 6, 4];
//console.log(sortARRAY(p));

var addTwoNumbers = function (l1, l2) {
  l1 = sortARRAY(l1);
  l1 = l1.join("");
  l2 = sortARRAY(l2);
  l2 = l2.join("");
  var l3 = Number(l1) + Number(l2);
  l3 = l3.toString();
  l3 = l3.split("");
  l3 = l3.map(Number);
  l3 = sortARRAY(l3);

  return l3;
};

console.log(addTwoNumbers(s, t));*/
/*
function sortARRAY(array) {
  var l = array.length;
  var y = 0;
  var x = [];

  while (y < l) {
    var k = array[y];
    x.unshift(k);
    y = y + 1;
  }
  return x;
}
var addTwoNumbers = function (l1, l2) {
  l1 = sortARRAY(l1);
  l1 = l1.join("");
  l2 = sortARRAY(l2);
  l2 = l2.join("");
  var l3 = Number(l1) + Number(l2);
  l3 = l3.toString();
  l3 = l3.split("");
  l3 = l3.map(Number);
  l3 = sortARRAY(l3);

  return l3;
};
var s = [2, 4, 3];
var t = [5, 6, 4];

//console.log(addTwoNumbers(s, t));*/

function fibo(n) {
  var x = 0;
  var y = 0;
  var z = 0;

  var aray = [];
  while (z < n) {
    aray.push(z);
    z = x + y;

    if (y === 0) {
      z = 1;
    }

    x = y;
    y = z;
  }

  return aray;
}

//console.log(fibo(1000));

function facto(n) {
  var i = 1;
  var cat = 1;
  while (i <= n) {
    cat = cat * i;
    i = i + 1;
  }

  return cat;
}

//console.log(facto(10));

function stay(n) {
  var car = [];
  for (var i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      car.push("fizzbuzz");
    } else if (i % 5 === 0) {
      car.push("fizz");
    } else if (i % 3 === 0) {
      car.push("buzz");
    } else {
      car.push(i);
    }
  }
  return car;
}

//console.log(stay(20));

//return the longest string
function longs(s) {
  var n = s.length;
  var y = 0;
  var z = y + 1;

  var h = 0;
  var num = 0;

  while (y < n) {
    for (var i = y; i < n; i++) {
      //console.log(num);
      if (s[i] === s[i + 1]) {
        //console.log(num);
        h = 1;
      } else if (s[y] !== s[i]) {
        num = num + 1;

        if (num > h) {
          h = num;
          num = 0;
          //console.log(num);
        }
      }
    }

    y = y + 1;
    z = y + 1;
  }

  return h;
}

//var s = "pwwkew";
//var s = "abcabcbb";
//var s = "bbbbb";

console.log(longs(s));
//longs(s);
