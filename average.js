function calculateAverage(list){
  const sumList = list.reduce(
    function(accumulatedValue = 0, newElement){
      return accumulatedValue + newElement;
    }
  );

  const averageList = sumList / list.length;
  return averageList;
}

function calculateAverageList(){
  const inputList = document.getElementById("inputList");
  const valueList = inputList.value;

  let list = valueList.split(',');

  list = list.map(
    function(a,b){
      return parseInt(a);
    }
  );

  const averageList = calculateAverage(list);

  const resultA = document.getElementById("resultA");
  resultA.innerHTML = "List: "+averageList;
}