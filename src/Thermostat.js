class Thermostat {
  constructor(){
    this.temp = 20
    this.min = 10
  }

  raise(temp = 1){
    this.temp += temp
  }

  lower(temp = 1){
    this.temp -= temp
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
