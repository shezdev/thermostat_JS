'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat._temperature).toEqual(20);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('you can increase the temperature with an up function', function() {
    thermostat.up(1);
    expect(thermostat._temperature).toEqual(21);
  });

  it('you can decrease the temperature with a down function', function() {
    thermostat.down(1);
    expect(thermostat._temperature).toEqual(19);
  });

  it('The minimum temperature is 10 degrees', function() {
    expect(thermostat._minTemp).toBe(10);
  });

  it('maximum temperature is 25 degrees if power saving mode is on', function() {
    thermostat.powerSavingMode = true;
    expect(thermostat._maxTemp).toBe(25);
  });

  it('maximum temperature is 32 degrees if power saving mode is off', function() {
    thermostat.turnOff_PSM();
    expect(thermostat._maxTemp).toBe(32);
  });

  it('can turn PSM back on', function() {
    thermostat.turnOff_PSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it ('You can reset the temperature to 20 with a reset function', function() {
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20);
  });

  describe('has an energy usage function', function() {
    it ('has a low-usage setting of < 18', function() {
      thermostat._temperature;
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual("low usage");
    });

    it ('has a medium-usage setting of < 25', function() {
      thermostat._temperature;
      thermostat.up(4);
      expect(thermostat.energyUsage()).toEqual("medium usage");
    });

    it ('has a high-usage setting of >= 25', function() {
      thermostat._temperature;
      thermostat.up(5);
      expect(thermostat.energyUsage()).toEqual("high usage");
    });
  });
});
