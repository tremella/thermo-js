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
  })
});
