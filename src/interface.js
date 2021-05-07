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

})
