function calculate(type) {
  const number = parseFloat(document.getElementById('numberInput').value);
  let result;

  if (isNaN(number)) {
    result = "Please enter a valid number.";
  } else {
    switch (type) {
      case 'square':
        result = `${number}² = ${Math.pow(number, 2)}`;
        break;
      case 'cube':
        result = `${number}³ = ${Math.pow(number, 3)}`;
        break;
      case 'squareRoot':
        result = `√${number} = ${Math.sqrt(number).toFixed(4)}`;
        break;
      case 'cubeRoot':
        result = `∛${number} = ${Math.cbrt(number).toFixed(4)}`;
        break;
      default:
        result = "Unknown operation.";
    }
  }

  document.getElementById('result').textContent = result;
}
function calculateDiscount() {
  const cost = parseFloat(document.getElementById('costPrice').value);
  const percent = parseFloat(document.getElementById('discountPercent').value);
  let result;

  if (isNaN(cost) || isNaN(percent)) {
    result = "Please enter both cost price and percentage.";
  } else {
    const discountAmount = (cost * percent) / 100;
    const finalPrice = cost - discountAmount;
    result = `Discount: ${discountAmount.toFixed(2)}  
              Final Price: ${finalPrice.toFixed(2)}`;
  }

  document.getElementById('result').textContent = result;
}
function clearAll() {
  document.getElementById('numberInput').value = '';
  document.getElementById('costPrice').value = '';
  document.getElementById('discountPercent').value = '';
  document.getElementById('result').textContent = '';
}
