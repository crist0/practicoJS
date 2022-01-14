function calculateAverage(list){
  // let sumList = 0;
  // for (let i = 0; i < list.length; i++) {
  //   sumList = list[i] + sumList;
  // }
  const sumList = list.reduce(
    function(accumulatedValue = 0, newElement){
      return accumulatedValue + newElement;
    }
  );

  const averageList = sumList / list.length;
  return averageList;
}