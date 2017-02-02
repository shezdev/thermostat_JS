var Thermostat = function() {
  this._temperature = 20;
  this._minTemp = 10;
  this.powerSavingMode = true;
  this._maxTemp = 25;
  this.DEFAULT_TEMP = 20;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(degrees) {
  return this._temperature += degrees;
};

Thermostat.prototype.down = function(degrees) {
  return this._temperature -= degrees;
};

Thermostat.prototype.reset = function() {
  return this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.turnOff_PSM = function() {
  if (this.powerSavingMode = false);
    return this._maxTemp = 32;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return "low usage";
  }
  else if (this._temperature >= 18 && this._temperature < 25 ) {
    return "medium usage";
  }
  else {
    return "high usage";
  }
};
