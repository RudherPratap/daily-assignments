function addArray(arr) {
  arr = [1, 'royal', 3, 4, 'jhon', 5, 6];
  console.log(arr);
  let result = 0;
  let i;
  for (i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {

    } else {
      result = result + arr[i];
    }
  }
  console.log(result);


}

addArray();