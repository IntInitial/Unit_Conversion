import { unitTypes } from './constants/units.js'

/**
 * Function to convert inputted value of given unit to given value
 * @param {float} x Inputted quantity of 'From' unit
 * @param {float} y Value of inputted 'From' unit to base unit
 * @param {float} z Given value of next unit from Map of units
 * @returns {float} Converted value fixed to 3 decimal places
 */
const convert = (x, y, z) => {
  return ((x / y) * z).toFixed(3)
}

/**
 * Function to return a Map of all other units converted from the given unit and unit quantity
 * @param {String} unitType Type of unit defined from category selected
 * @param {String} unitFromName Name of inputted unit to get other unit values of
 * @param {float} unitFromValue Value of inputted 'From' unit
 * @returns {Map} Map of all converted available units from quantity of inputted unit
 */
const convertToUnits = (unitType, unitFromName, unitFromValue) => {
  const res = {}
  const celcius = 'celcius'
  const fahrenheit = 'fahrenheit'
  const kelvin = 'kelvin'
  const temperature = 'temperature'

  try {
    if (Object.hasOwnProperty.call(unitTypes, unitType)) {
      const unitCategory = unitTypes[unitType]
      if (Object.hasOwnProperty.call(unitCategory.units, unitFromName)) {
        // Temperature does not conform to usual unit conversion
        if (unitType === temperature) {
          for (const un in unitCategory.units) {
            if (unitFromName === celcius) {
              switch (un) {
                case celcius:
                  res[un] = unitFromValue.toFixed(3)
                  break
                case fahrenheit:
                  res[un] = ((unitFromValue * 1.8) + 32).toFixed(3)
                  break
                case kelvin:
                  res[un] = (unitFromValue + 273.15).toFixed(3)
              }
            } else if (unitFromName === fahrenheit) {
              switch (un) {
                case celcius:
                  res[un] = ((unitFromValue - 32) * 0.55555555555).toFixed(3)
                  break
                case fahrenheit:
                  res[un] = unitFromValue.toFixed(3)
                  break
                case kelvin:
                  res[un] = ((unitFromValue - 32) * 0.55555555555 + 273.15).toFixed(3)
              }
            } else {
              switch (un) {
                case celcius:
                  res[un] = (unitFromValue - 273.15).toFixed(3)
                  break
                case fahrenheit:
                  res[un] = ((unitFromValue - 273.15) * 1.8 + 32).toFixed(3)
                  break
                case kelvin:
                  res[un] = unitFromValue.toFixed(3)
              }
            }
          }
        // For all other units, simple conversion is fine
        } else {
          for (const un in unitCategory.units) {
            res[un] = convert(unitFromValue, unitCategory.units[unitFromName], unitCategory.units[un])
          }
        }
      }
    }
  } catch (e) {
    console.error(e)
  }

  return res
}

export default convertToUnits
