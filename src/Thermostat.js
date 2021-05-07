class Thermostat {
  constructor(){
    this.temp = 20
    this.min = 10
    this.isPowerSaveOn = true

  }

  raise(temp = 1){
    if (this.isPowerSaveOn) {
      if (this.temp + temp > 25){
        throw Error('cannot exceed 25');
      } else {
        this.temp += temp
      }
    } else {
      if (this.temp + temp > 32){
        throw Error('cannot exceed 32');
      } else {
        this.temp += temp
      }
    }
  }

  lower(temp = 1){
    this.temp -= temp
  }

  togglePowerSave(){
    if (this.isPowerSaveOn == true) {
      this.isPowerSaveOn = false
    } else {
      this.isPowerSaveOn = true
    }
  }
}

//
// ATTRIBUTES:
// currTemp         >= 10 && <= (25 || 32)
// minTemp          10
// maxTemp          25 || 32
// isPowerSaveOn    bool
// currEnergyUsage  [low || med || hi]
//
// FUNCTIONS
// raiseTemp        (+1)
// lowerTemp        (-1)
// togglePowerSave  (on or off)
// resetTemp        (to 20)
// checkEnergyUsage  (attr accessor?)

// WHAT
