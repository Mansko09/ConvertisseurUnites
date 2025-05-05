document.getElementById('convertBtn').addEventListener('click', function () {
  const value = parseFloat(document.getElementById('inputValue').value);
  const conversionType = document.getElementById('conversionType').value;
  const resultBox = document.getElementById('resultBox');
  
  if (isNaN(value)) {
    resultBox.textContent = 'Veuillez entrer une valeur valide.';
    return;
  }
  
  let result;
  let unit;
  switch(conversionType){
    case 'milesToKm':
      result = value * 1.60934;
      unit = 'km';
      break;
    case 'lbsToKg':
      result = value * 0.453592;
      unit = 'kg';
      break;
    case 'inchesToCm':
      result = value * 2.54;
      unit = 'cm';
      break;
    default:
      resultBox.textContent = 'Conversion inconnue.';
      return;
  }

  resultBox.textContent = `Result : ${result.toFixed(2)} ${unit}`;
});
document.getElementById('inputValue').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('convertBtn').click();
  }
});
