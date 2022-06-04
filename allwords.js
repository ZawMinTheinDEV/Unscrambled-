//getAllPossibleWordCombination("");
getAllPossibleWordCombinationWithFixLength("qwerrtyuiopl");
function getAllPossibleWordCombination(word) {
  var globalArray = [];

  //get words from all possible unique character length
  var allLength = combinations(word);
  //remove duplicate and filter words by length>1
  var filteredWords = getUniqueItemsOnly(
    allLength.filter((word) => word.length > 1)
  );

  count = 0;
  filteredWords.forEach((w) => {
    permute(w.split(""), function () {
      currentWord = this.join("");
      globalArray.includes(currentWord) ? "" : globalArray.push(this.join(""));
      count++;
    });
  });

  console.log(globalArray.length + "<" + count);
  return globalArray;
}
function getAllPossibleWordCombinationWithFixLength(word) {
  var globalArray = [];

  //get words from all possible unique character length

  //remove duplicate and filter words by length>1
  var filteredWords = [word];

  count = 0;
  filteredWords.forEach((w) => {
    permute(w.split(""), function () {
      currentWord = this.join("");
      globalArray.includes(currentWord) ? "" : globalArray.push(this.join(""));
      count++;
    });
  });

  console.log(globalArray.length + "<" + count);
  return globalArray;
}
function getUniqueItemsOnly(array) {
  var filteredArray = [];
  array.forEach((c) => {
    if (!filteredArray.includes(c)) {
      filteredArray.push(c);
    }
  });
  return filteredArray;
}
function permute(perm, func) {
  var total = factorial(perm.length);

  for (var j = 0, i = 0, inc = 1; j < total; j++, inc *= -1, i += inc) {
    for (; i < perm.length - 1 && i >= 0; i += inc) {
      func.call(perm);
      swap(perm, i, i + 1);
    }

    func.call(perm);

    if (inc === 1) {
      swap(perm, 0, 1);
    } else {
      swap(perm, perm.length - 1, perm.length - 2);
    }
  }
}
function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function factorial(n) {
  var val = 1;
  for (var i = 1; i < n; i++) {
    val *= i;
  }
  return val;
}
function combinations(str) {
  var fn = function (active, rest, a) {
    if (!active && !rest) return;
    if (!rest) {
      a.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  };
  return fn("", str, []);
}
