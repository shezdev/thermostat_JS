describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

it('starts at 20 degrees', function() {
  expect(thermostat._temperature).toEqual(20);
});

it('you can increase the temperature with an up function', function() {
  thermostat.up(1);
  expect(thermostat._temperature).toEqual(21);
});


it('you can decrease the temperature with a down function', function() {
  thermostat.down(1);
  expect(thermostat._temperature).toEqual(19);
});
//
// it 'The minimum temperature is 10 degrees'
//
// });
//
// it 'If power saving mode is on, the maximum temperature is 25 degrees'
//
// });
//
// it' If power saving mode is off, the maximum temperature is 32 degrees'
//
// });
//
// it 'Power saving mode is on by default'
//
// });
//
// it 'You can reset the temperature to 20 with a reset function'
//
// });
//
// it "You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage."
//
// });

});
