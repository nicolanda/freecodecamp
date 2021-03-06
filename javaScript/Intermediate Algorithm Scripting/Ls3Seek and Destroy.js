/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

destroyer([2, 3, 2, 3], 2, 3) should return [].

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].

*/

function destroyer(arr) {
  let newArr = Object.values(arguments).slice(1);
  console.log(newArr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        //delete arr[i]
        arr.splice(i, 1);
        i--;
      }
      console.log(arr[i]);
    }
  }

  console.log(arr);
  /*
  newArr = arr.filter(item => item !== null)
  console.log(newArr);
  */
  return arr;
}

//solución alterna
/*

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

*/

console.log(
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
  //destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3),
  //destroyer([3, 5, 1, 2, 2], 2, 3, 5)
);
