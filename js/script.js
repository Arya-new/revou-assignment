function calculate() {
  let weightInput = document.getElementById("weight-input").value;
console.log(weightInput);

if (parseInt(weightInput) > 0 && parseInt(weightInput) < 10) {
  alert('harap isi berat badan anda')
} else {
  document.getElementById('Result-bmi').innerHTML = weightInput;
  console.log('Terisi')
}
}