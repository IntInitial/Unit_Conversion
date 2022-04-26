import convertToUnits from '../src/convert'

test('Returns a map the expected value of pint to all other volume values', () => {
  const inputFromValue = 5
  const inputFromName = 'pint'
  const inputUnitType = 'volume'
  const expectedResult = {
    cubic_foot: '0.100',
    cubic_inch: '173.387',
    cubic_meter: '0.003',
    cup: '10.000',
    cup_us: '11.839',
    gallon: '0.625',
    gallon_us: '0.751',
    litre: '2.841',
    millilitre: '2841.313',
    ounce: '96.076',
    pint: '5.000',
    pint_us: '6.005',
    quart: '2.500',
    quart_us: '3.002',
    tablespoon: '160.000',
    tablespoon_us: '192.152',
    teaspoon: '480.000',
    teaspoon_us: '576.457'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})

test('Returns a map the expected value of celcius to all other temperature values', () => {
  const inputFromValue = 18
  const inputFromName = 'celcius'
  const inputUnitType = 'temperature'
  const expectedResult = {
    celcius: '18.000',
    fahrenheit: '64.400',
    kelvin: '291.150'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})

test('Returns a map the expected value of kelvin to all other temperature values', () => {
  const inputFromValue = 250
  const inputFromName = 'kelvin'
  const inputUnitType = 'temperature'
  const expectedResult = {
    celcius: '-23.150',
    fahrenheit: '-9.670',
    kelvin: '250.000'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})

test('Returns a map the expected value of fahrenheit to all other temperature values', () => {
  const inputFromValue = 39
  const inputFromName = 'fahrenheit'
  const inputUnitType = 'temperature'
  const expectedResult = {
    celcius: '3.889',
    fahrenheit: '39.000',
    kelvin: '277.039'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})

test('Returns a map the expected value of newtonmeter to all other torque values', () => {
  const inputFromValue = 80
  const inputFromName = 'newton_meter'
  const inputUnitType = 'torque'
  const expectedResult = {
    newton_meter: '80.000',
    deca_newton_meter: '8.000',
    kilo_newton_meter: '0.080',
    deci_newton_meter: '800.000',
    centi_newton_meter: '8000.000',
    milli_newton_meter: '80000.000',
    micro_newton_meter: '80000000.000',
    newton_millimeter: '80000.000',
    kilogram_force_meter: '8.158',
    kilogram_force_centimeter: '815.773',
    gram_force_meter: '8157.730',
    gram_force_centimeter: '815772.970',
    dyne_centimeter: '800000000.000',
    foot_pound: '59.005',
    inch_pound: '708.060',
    inch_ounce: '11328.960'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})

test('Returns a map the expected value of kilogram per cubic meter to all other density values', () => {
  const inputFromValue = 478
  const inputFromName = 'kilogram_per_cubic_meter'
  const inputUnitType = 'density'
  const expectedResult = {
    kilogram_per_cubic_millimeter: '0.000',
    kilogram_per_cubic_centimeter: '0.000',
    kilogram_per_cubic_meter: '478.000',
    gram_per_cubic_meter: '478000.000',
    gram_per_cubic_millimeter: '0.000',
    gram_per_cubic_centimeter: '0.478',
    tonne_per_cubic_meter: '0.478',
    tonne_per_cubic_millimeter: '0.000',
    tonne_per_cubic_centimeter: '0.000',
    gram_per_liter: '478.000',
    gram_per_milliliter: '0.478',
    pound_per_cubic_feet: '29.841',
    pound_per_cubic_inch: '0.017'
  }
  expect(convertToUnits(inputUnitType, inputFromName, inputFromValue)).toEqual(expectedResult)
})