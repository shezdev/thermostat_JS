const DEFAULT_TEMP = 20;

var Thermostat = function() {
  this._temperature = 20;
  this._minTemp = 10;
  this._powerSavingMode = true;
  this._maxTemp = 25;
  // thus._maxTemp_PSM = 32;
}

Thermostat.prototype.up = function(degrees) {
  return this._temperature += degrees;
};

Thermostat.prototype.down = function(degrees) {
  return this._temperature -= degrees;
};

Thermostat.prototype.reset = function() {
  return this._temperature = DEFAULT_TEMP;
};

Thermostat.prototype.turnOff_PSM = function() {
  if (this._powerSavingMode = false);
    return this._maxTemp = 32;
//this._powerSavingMode === false ? return this._maxTemp = 32 : return this._maxTemp
};
