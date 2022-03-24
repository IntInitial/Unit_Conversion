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
