let randomArray = [10,4,9,5,2,1,6,7,3,8];

let bubbleSort = function(array){
  let comparedNumber;
  let swapCount = 0;
  let pass = 0;
  let willLoop = true;
  while(willLoop){
    willLoop = false;
    let loopInterval = setInterval(function(){
      comparedNumber = array[0];
      for (var i = 1; i < array.length; i++) {
       if(comparedNumber - array[i] > 0) {
        array[i-1] = array[i];
        array[i] = comparedNumber;
        let documentDivs = document.querySelectorAll('.arrayDiv');
        for(let i = 0; i < 10; i++){
          documentDivs[i].style.height = (array[i] * 20) + 'px';
          documentDivs[i].innerHTML = array[i];
        }
        willLoop = true;
        swapCount++;
       } else {
        comparedNumber = array[i];
       }
        console.log(array);
        console.log(swapCount);

      pass++;
      }
      if(willLoop === false){
        clearInterval(loopInterval);
      }
    console.log('array after loop '+ pass + ' ' + array);
    }, 1000);

  }

  return array;
};

let quickSort = function(arr){
  let pivot = arr[0];
  let rightArray = [];
  let leftArray = [];

  if(arr.length <= 1 || arr === undefined){
    return arr;
  } else {

    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < pivot){
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }

    console.log('left: ' + leftArray);
    console.log('right: ' + rightArray);
  }
let newArr = quickSort(leftArray).concat(pivot, quickSort(rightArray));
let documentDivs = document.querySelectorAll('.arrayDiv');
  for(let i = 0; i < newArr.length; i++){
    documentDivs[i].style.height = (newArr[i] * 20) + 'px';
    documentDivs[i].innerHTML = newArr[i];
  }
  return newArr;
};

let generateDivs = function(){
  let container = document.getElementById('container');

  for(let i = 0; i < 10; i++){
    //let randomNumber = Math.floor(Math.random() * 10) ;
    let createdItem = document.createElement('div');
    createdItem.className = 'arrayDiv';
    createdItem.innerHTML = randomArray[i];
    createdItem.style.height = (randomArray[i] * 20) + 'px';
    createdItem.id = i.toString();
    container.appendChild(createdItem);
  }
};

let sort = function(){
  let divList = document.querySelectorAll('.arrayDiv');
  let newArray = quickSort(randomArray);
  console.log(newArray);
};

generateDivs();
