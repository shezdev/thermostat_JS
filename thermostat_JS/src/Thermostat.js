const DEFAULT_TEMP = 20;

var Thermostat = function() {
  this._temperature = 20;
  this._minTemp = 10;
  this._powerSavingMode = true;
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
