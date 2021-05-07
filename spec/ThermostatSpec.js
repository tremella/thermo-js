describe('Thermostat', () => {

  var thermo;

  beforeEach(()=> {
    thermo = new Thermostat();
  })

  it('should have a starting temp of 20', () => {
    expect(thermo.temp).toEqual(20);
  })
  it('should have a min temp of 10', () => {
    expect(thermo.min).toEqual(10);
  })
  it('should have power save on', () => {
    expect(thermo.isPowerSaveOn).toEqual(true)
  })

  describe('raise temp function', ()=>{
    it('should increase temp from 20 to 21', ()=>{
      expect(thermo.temp).toEqual(20);
      thermo.raise()
      expect(thermo.temp).toEqual(21);
    })
    it('should increase temp from 20 to 25', ()=>{
      expect(thermo.temp).toEqual(20);
      thermo.raise(5)
      expect(thermo.temp).toEqual(25);
    })
    it('should not exceed 25 if power save is on',()=>{
      expect(thermo.isPowerSaveOn).toEqual(true)
      expect(thermo.temp).toEqual(20)
      expect(function() { thermo.raise(6) }).toThrow(new Error('cannot exceed 25'));
      expect(thermo.temp).toEqual(20);
    })
    it('should not exceed 32 if power save is off',()=>{
      thermo.togglePowerSave()
      expect(thermo.isPowerSaveOn).toEqual(false)
      expect(thermo.temp).toEqual(20)
      expect(function() { thermo.raise(13) }).toThrow(new Error('cannot exceed 32'));
      expect(thermo.temp).toEqual(20);
    })
  })

  describe('lower temp function',()=>{
    it('should reduce temp from 20 to 19',()=>{
      expect(thermo.temp).toEqual(20);
      thermo.lower()
      expect(thermo.temp).toEqual(19);
    })
    it('should reduce temp from 20 to 15',()=>{
      expect(thermo.temp).toEqual(20);
      thermo.lower(5)
      expect(thermo.temp).toEqual(15);
    })
    it('cannot go below 10', ()=>{
      expect(thermo.temp).toEqual(20);
      expect(function() { thermo.lower(11) }).toThrow(new Error('cannot be below 10'));
      expect(thermo.temp).toEqual(20);
    })
  })

  describe('togglePowerSave',()=>{
    it('should alter isPowerSaveOn to false, then true again', ()=>{
      expect(thermo.isPowerSaveOn).toEqual(true)
      thermo.togglePowerSave()
      expect(thermo.isPowerSaveOn).toEqual(false)
      thermo.togglePowerSave()
      expect(thermo.isPowerSaveOn).toEqual(true)
    })
  })

  describe('reset',()=>{
    it ('should reset a non-20 temp to 20',()=>{
      expect(thermo.temp).toEqual(20);
      thermo.lower()
      expect(thermo.temp).toEqual(19);
      thermo.reset()
      expect(thermo.temp).toEqual(20);
    })
  })

  describe('usageCheck',()=>{
    it('equals medium if temp is between 10 and 18',()=>{
      expect(thermo.temp).toEqual(20);
      thermo.lower(9)
      expect(thermo.temp).toEqual(11);
      expect(thermo.usageCheck()).toEqual('low')
    })
    it('equals medium if temp is between 19 and 25',()=>{
      expect(thermo.temp).toEqual(20);
      expect(thermo.usageCheck()).toEqual('medium')
    })
    it('equals medium if temp is above 26',()=>{
      expect(thermo.temp).toEqual(20);
      thermo.togglePowerSave()
      thermo.raise(9)
      expect(thermo.usageCheck()).toEqual('high')
    })
  })


});
