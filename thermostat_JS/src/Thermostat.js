var Thermostat = function() {
  this._temperature = 20;
  this._minTemp = 10;
  this.powerSavingMode = true
  this.psmStatus = "PSM ON";
  this._maxTemp = 25;
  this.DEFAULT_TEMP = 20;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  this._maxTemp = 25;
  this.psmStatus = "PSM ON";
  this._temperature = 25;
}

Thermostat.prototype.up = function(degrees) {
  return this._temperature = Math.min(this._temperature + degrees, this._maxTemp);
};

Thermostat.prototype.down = function(degrees) {
  return this._temperature = Math.max(this._temperature - degrees, this._minTemp);
};

Thermostat.prototype.reset = function() {
  return this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.turnOff_PSM = function() {
  this.powerSavingMode = false;
  this._maxTemp = 32;
  this.psmStatus = "PSM OFF";
};

Thermostat.prototype.switchPSMStatus = function() {
  if (this.powerSavingMode) {
    this.turnOff_PSM();
  } else {
    this.turnPowerSavingModeOn();
  }
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return "low";
  }
  else if (this._temperature >= 18 && this._temperature < 25 ) {
    return "medium";
  }
  else {
    return "high";
  }
};
