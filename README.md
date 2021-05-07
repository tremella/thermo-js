Thermostat should be a class with these attributes and methods.

ATTRIBUTES:
currTemp         >= 10 && <= (25 || 32)
minTemp          10            
maxTemp          25 || 32
isPowerSaveOn    bool
currEnergyUsage  [low || med || hi]

FUNCTIONS
raiseTemp        (+1)
lowerTemp        (-1)
togglePowerSave  (on or off)
resetTemp        (to 20)
checkEnergyUsage  (attr accessor?)
