var Thermostat = function() {
  this._temperature = 20;
}

Thermostat.prototype.up = function(degrees) {
  return this._temperature += degrees;
};

Thermostat.prototype.down = function(degrees) {
  return this._temperature -= degrees;
};
