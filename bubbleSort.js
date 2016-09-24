let bubbleSort = function(array){
  let comparedNumber;
  let swapCount = 0;
  let pass = 0;
  let willLoop = true;
  while(willLoop){
    willLoop = false;
    comparedNumber = array[0];
    for (var i = 1; i < array.length; i++) {
       if(comparedNumber - array[i] > 0) {
        array[i-1] = array[i];
        array[i] = comparedNumber;
        willLoop = true;
        swapCount++;
       } else {
        comparedNumber = array[i];
       }
      console.log(array);
      console.log(swapCount);
      pass++;
    }
    console.log('array after loop '+ pass + ' ' + array);
  }
  return array;
};

let generateDivs = function(){
  let container = document.getElementById('container');
  for(let i = 0; i < 10; i++){
    let randomNumber = Math.floor(Math.random() * 10) ;
    let createdItem = document.createElement('div');
    createdItem.className = 'arrayDiv';
    createdItem.innerHTML = randomNumber;
    createdItem.id = randomNumber.toString();
    container.appendChild(createdItem);
  }
};

let sort = function(){
  let divList = document.querySelectorAll('.arrayDiv');
  console.log(divList);
};

generateDivs();