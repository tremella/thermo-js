Thermostat should be a class with these attributes and methods.
Currently, all of these are operational and passing tests.

**ATTRIBUTES**:
- **temp**:            between min and maxTemp
- **minTemp**:         10            
- **maxTemp**:         25 or 32 , depending on isPowerSaveOn
- **isPowerSaveOn**:   bool

**FUNCTIONS**
- **raiseTemp**:       (+1 default)
- **lowerTemp**:       (-1 default)
- **togglePowerSave**: (on or off)
- **reset**:           (to 20)
- **checkUsage**:      (low, med, high)
