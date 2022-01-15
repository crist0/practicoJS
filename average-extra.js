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