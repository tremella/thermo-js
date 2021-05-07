Thermostat should be a class with these attributes and methods.
Currently, all of these are operational.

ATTRIBUTES:
-temp             >= 10 && <= (25 || 32)
-minTemp          10            
-maxTemp          25 || 32
-isPowerSaveOn    bool

FUNCTIONS
-raiseTemp        (+1 default)
-lowerTemp        (-1 default)
-togglePowerSave  (on or off)
-reset            (to 20)
-checkUsage       (low, med, high)
