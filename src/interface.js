document.addEventListener("DOMContentLoaded", ()=> {
  const thermo = new Thermostat();

  var updateTemp = () => {
    document.querySelector('#temperature').innerText = thermo.temp;
    document.querySelector('#temperature').className = thermo.usageCheck();
  }

  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
    fetch(url)
    .then((response) => {
      return response.json()
      // returns resolved promise object, parsed as JSON, which is a JS datatype object.
    })// this gets passed into the next .then statement.
    .then((data)=>{
      document.querySelector('#current-temperature').innerText = Math.round(data.main.temp);
      })
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

  displayWeather('London');

  document.querySelector('#select-city').addEventListener('submit',(event) => {
    event.preventDefault();// what this do?
    const city = document.querySelector('#current-city').value;
    displayWeather(city)
  })




// *****
})
