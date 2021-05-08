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
    // this ensures it works.
    event.preventDefault();
    // Why? the default behaviour of the form tag, when submitted by the user,
    // is to load the next page to which the form data is sent - or to reload the
    // same page, if no action attribute is present. But that's not what we want!
    // So we have to intercept the event passed to the event listener callback,
    //  and to call preventDefault() on it, to ask the browser not to perform its
    //  default action when submitting the form. Doing this, the page won't reload,
    //  and we can handle the form "submission" in our own way (in this case, by
    //  calling displayWeather).

    const city = document.querySelector('#current-city').value;
    displayWeather(city)
  })




// *****
})
