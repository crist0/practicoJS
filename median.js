// const list = [100, 200, 500, 4000000];
function calculateAverage(list) {
  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const averageList = sumList / list.length;
  return averageList;
}
function isPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calculateMedian(list) {
  const mediumList = parseInt(list.length / 2);

  function sortList(a,b){
    return a-b;
  }
  list = list.sort( sortList ); 

  let median;
  if (isPar(list.length)) {
    const elem1 = list[mediumList - 1];
    const elem2 = list[mediumList];

    const average1and2 = calculateAverage([elem1, elem2]);
    median = average1and2;
  } else {
    median = list[mediumList];
  }
  return median;
}

function calculateMedianList(){
  const inputList = document.getElementById("inputList");
  const valueList = inputList.value;

  let list = valueList.split(',');

  list = list.map(
    function(a,b){
      return parseInt(a);
    }
  );

  const averageList = calculateMedian(list);

  const resultA = document.getElementById("resultA");
  resultA.innerHTML = "List: "+averageList;
}