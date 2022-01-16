function calculateAverageExtra(list){

  const listInvert = list.map(function(elem){
    return 1/elem;
  });
  const sumList = listInvert.reduce(
    function(accumulatedValue = 0, newElement){
      return accumulatedValue + newElement;
    }
  );
    
  const averageList = list.length/sumList;
  return averageList;
}

function calculateAverageExtraList(){
  const inputList = document.getElementById("inputList");
  const valueList = inputList.value;

  let list = valueList.split(',');

  list = list.map(
    function(a,b){
      return parseInt(a);
    }
  );

  const averageList = calculateAverageExtra(list);

  const resultA = document.getElementById("resultA");
  resultA.innerHTML = "List: "+averageList;
}