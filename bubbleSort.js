let bubbleSort = function(array){
  let comparedNumber;
  for (var i = 0; i < array.length; i++) {
    if(i === 0){
      comparedNumber = array[0];
    } else {
     if(comparedNumber - array[i] > 0) {
      array[i-1] = array[i];
      array[i] = comparedNumber;
      i = 0;
      comparedNumber = array [0];
     } else {
      comparedNumber = array[i];
     }
    }
    console.log(array);
  }
  console.log('array after loop' + array);
  return array;
};


module.exports = bubbleSort;