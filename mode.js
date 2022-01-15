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

