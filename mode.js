function calculateMode(list){
  const listCount = {};

  list.map(function (elem) {
    if (listCount[elem]) {
      listCount[elem] += 1;
    } else {
      listCount[elem] = 1;
    }
  });

  const listArray = Object.entries(listCount).sort(
    function (a, b) {
      return a[1] - b[1];
    }
  );
  
  const mode = listArray[listArray.length - 1];

  return mode;
}

function calculateModeList(){
  const inputList = document.getElementById("inputList");
  const valueList = inputList.value;

  let list = valueList.split(',');

  list = list.map(
    function(a,b){
      return parseInt(a);
    }
  );

  const averageList = calculateMode(list);

  const resultA = document.getElementById("resultA");
  resultA.innerHTML = averageList[0];
  resultA.innerHTML += " : ";
  resultA.innerHTML += averageList[1];
  resultA.innerHTML += " times.";
}
