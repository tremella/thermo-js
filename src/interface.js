document.addEventListener("DOMContentLoaded", ()=> {
  const thermo = new Thermostat();

  var updateTemp = () => {
    document.querySelector('#temperature').innerText = thermo.temp;
    document.querySelector('#temperature').className = thermo.usageCheck();
  }

  updateTemp();

  document.querySelector('#temperature-up').addEventListener('click', () => {
  thermo.raise();
  updateTemp();
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
  thermo.lower()
  updateTemp();
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => {
  thermo.reset();
  updateTemp();
  })

  document.querySelector('#powersaving-toggle').addEventListener('click', () => {
  thermo.togglePowerSave();
  document.querySelector('#power-saving-status').innerText = thermo.isPowerSaveOn;
  updateTemp();

  })

  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed')
  .then((response) => {
    return response.json()
    // returns resolved promise object, parsed as JSON, which is a JS datatype object.
  })// this gets passed into the next .then statement.
  .then((data)=>{
    toC = Math.round(data.main.temp - 273.15)
    document.querySelector('#current-temperature').innerText = toC;
  })


// *****
})
