class Thermostat {
  constructor(){
    this.temp = 20
    this.min = 10
    this.isPowerSaveOn = 'on'
  }

  raise(temp = 1){
    if (this.isPowerSaveOn == 'on') {
      if (this.temp + temp > 25){
        throw Error('cannot exceed 25');
      } else {
        this.temp += temp
      }
    } else if (this.isPowerSaveOn == 'off') {
      if (this.temp + temp > 32){
        throw Error('cannot exceed 32');
      } else {
        this.temp += temp
      }
    }
  }

  lower(temp = 1){
    if (this.temp - temp < 10){
      throw Error('cannot be below 10');
    } else {
      this.temp -= temp
    }
  }

  reset(){
    this.temp = 20
  }

  togglePowerSave(){
    if (this.isPowerSaveOn == 'on') {
      this.isPowerSaveOn = 'off'
    } else if (this.isPowerSaveOn == 'off') {
      this.isPowerSaveOn = 'on'
    }
  }

  usageCheck(){
    if (this.temp >= 10 && this.temp <= 18) {
      return 'low'
    } else if (this.temp >= 19 && this.temp <= 25) {
      return 'medium'
    } else {
      return 'high'
    }
  }
}
