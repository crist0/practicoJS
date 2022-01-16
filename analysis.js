//Helpers
function calculateAverage(list) {
  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const averageList = sumList / list.length;
  return averageList;
}

function isPar(num){
  return (num % 2 === 0);
}
//Calculadora de Medianas
function medianSalary(list){
  const mediumList = parseInt(list.length / 2);

  if(isPar(list.length)){
    const personMedium1 = list[mediumList -1];
    const personMedium2 = list[mediumList];
    return calculateAverage([personMedium1,personMedium2]);
  }else{
    return list[mediumList];
  }
}

//Mediana General
const salaryCol = colombia.map(
  function(person){
    return person.salary;
  }
);

const salaryColSorted = salaryCol.sort(
  function (a, b){
    return a - b;
  }
);

const medianGeneralCol = medianSalary(salaryColSorted);

//Mediana TOP 10%

const spliceStart = (salaryColSorted.length * 90)/100;
const spliceCount = salaryColSorted.length - spliceStart;
const salaryColTop10 = salaryColSorted.splice(spliceStart,spliceCount);

const medianTop10Col = medianSalary(salaryColTop10);

console.log({
  medianGeneralCol,
  medianTop10Col,
});
const analysisSalary = document.getElementById("analysisSalary");
analysisSalary.innerHTML += "Mediana general de la lista: "+medianGeneralCol+"<br>";
analysisSalary.innerHTML += "Mediana general de la lista Top 10: "+medianTop10Col+"<br>";
