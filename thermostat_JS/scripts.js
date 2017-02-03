thermostat = new Thermostat();


$("#temp-value").text(thermostat._temperature);
$("#energy-status").text(thermostat.energyUsage());
$("#energy-status").addClass(thermostat.energyUsage());
$("#psm-status-button").text(thermostat.psmStatus);

$("#up-button").click(function(){
  $("#energy-status").removeClass(thermostat.energyUsage());
  thermostat.up(1);
  $("#temp-value").text(thermostat._temperature);
  $("#energy-status").text(thermostat.energyUsage());
  $("#energy-status").addClass(thermostat.energyUsage());
});

$("#down-button").click(function(){
  $("#energy-status").removeClass(thermostat.energyUsage());
  thermostat.down(1);
  $("#temp-value").text(thermostat._temperature);
  $("#energy-status").text(thermostat.energyUsage());
  $("#energy-status").addClass(thermostat.energyUsage());
});

$("#reset-button").click(function(){
  $("#energy-status").removeClass(thermostat.energyUsage());
  thermostat.reset();
  $("#temp-value").text(thermostat._temperature);
  $("#energy-status").text(thermostat.energyUsage());
  $("#energy-status").addClass(thermostat.energyUsage());
});


$("#psm-status-button").click(function(){
  thermostat.switchPSMStatus();
  $("#psm-status-button").text(thermostat.psmStatus);
  $("#temp-value").text(thermostat._temperature);
});
