/**
 * Map of all UnitTypes. The base_name lets the next developer know which unit has been selected as the conversion default
 * To add a new unit to any unitType, simply divide the base_name unit in the unit list by 1 base_name worth of the unit to be
 * added i.e. 1 Gallon is 4.54609 litres. If we divide 1 litre by 4.54609 litres we get 0.21996. As you can see in the 'volume'
 * unitType below, the gallon value is 0.21996
 */
export const unitTypes = {
  volume: {
    base_name: 'litre',
    units: {
      litre: 1,
      millilitre: 1000,
      ounce: 33.814,
      gallon: 0.219969,
      quart: 0.879877,
      pint: 1.75975,
      cup: 3.51951,
      tablespoon: 56.3121,
      teaspoon: 168.936,
      cubic_foot: 0.0353147,
      cubic_inch: 61.0237,
      cubic_meter: 0.001,
      gallon_us: 0.264172,
      quart_us: 1.05669,
      pint_us: 2.11338,
      cup_us: 4.16667,
      tablespoon_us: 67.628,
      teaspoon_us: 202.884
    }
  },
  time: {
    base_name: 'day',
    units: {
      nanosecond: 8.64e+13,
      microsecond: 8.64e+10,
      millisecond: 8.64e+7,
      second: 86400,
      minute: 1440,
      hour: 24,
      day: 1,
      week: 0.142857,
      month: 0.0328767,
      year: 0.00273973,
      decade: 0.000273973,
      century: 2.7397e-5
    }
  },
  temperature: {
    base_name: 'celcius',
    units: {
      celcius: 1,
      fahrenheit: 33.8,
      kelvin: 274.15
    }
  },
  speed: {
    base_name: 'kilometre_per_hour',
    units: {
      kilometre_per_hour: 1,
      mile_per_hour: 0.621371,
      foot_per_second: 0.911344,
      meter_per_second: 0.277778,
      knot: 0.539957
    }
  },
  pressure: {
    base_name: 'bar',
    units: {
      bar: 1,
      pascal: 100000,
      pound_per_square_inch: 14.5038,
      atmosphere: 0.986923,
      torr: 750.062
    }
  },
  angle: {
    base_name: 'degree',
    units: {
      degree: 1,
      gradian: 1.11111,
      milliradian: 17.4533,
      minute_of_arc: 60,
      radian: 0.0174533,
      second_of_arc: 3600
    }
  },
  mass: {
    base_name: 'kilogram',
    units: {
      kilogram: 1,
      tonne: 0.001,
      gram: 1000,
      milligram: 1e+6,
      microgram: 1e+9,
      ton: 0.000984207,
      ton_us: 0.00110231,
      stone: 0.157473,
      pound: 2.20462,
      ounce: 35.274
    }
  },
  length: {
    base_name: 'metre',
    units: {
      metre: 1,
      kilometre: 0.001,
      centimeter: 100,
      millimetre: 1000,
      nanometre: 1e+9,
      mile: 0.000621371,
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.3701,
      nautical_mile: 0.000539957
    }
  },
  fuel_economy: {
    base_name: 'miles_per_gallon',
    units: {
      miles_per_gallon: 1,
      miles_per_gallon_us: 0.832674,
      kilometre_per_litre: 0.354006,
      litre_per_100_kilometre: 282.481
    }
  },
  frequency: {
    base_name: 'hertz',
    units: {
      hertz: 1,
      kilohertz: 0.001,
      megahertz: 1e-6,
      gigahertz: 1e-9
    }
  },
  energy: {
    base_name: 'joule',
    units: {
      joule: 1,
      kilojoule: 0.001,
      gram_calorie: 0.239006,
      kilocalorie: 0.000239006,
      watt_hour: 0.000277778,
      kilowatt_hour: 2.7778e-7,
      electronvolt: 6.242e+18,
      thermal_unit: 0.000947817,
      therm_us: 9.4804e-9,
      foot_pound: 0.737562
    }
  },
  digital_storage: {
    base_name: 'bit',
    units: {
      bit: 1,
      kilobit: 0.001,
      kibibit: 0.000976563,
      megabit: 1e-6,
      mebibit: 9.5367e-7,
      gigabit: 1e-9,
      gibibit: 9.3132e-10,
      terabit: 1e-12,
      tebibit: 9.0949e-13,
      petabit: 1e-15,
      petibit: 8.8818e-16,
      byte: 0.125,
      kilobyte: 0.000125,
      kibibyte: 0.00012207,
      megabyte: 1.25e-7,
      mebibyte: 1.1921e-7,
      gigabyte: 1.25e-10,
      gibibyte: 1.1642e-10,
      terabyte: 1.25e-13,
      tebibyte: 1.1369e-13,
      petabyte: 1.25e-16,
      pebibyte: 1.1102e-16
    }
  },
  data_transfer_rate: {
    base_name: 'bit_per_second',
    units: {
      bit_per_second: 1,
      kilobit_per_second: 0.001,
      kilobyte_per_second: 0.000125,
      kibibit_per_second: 0.000976563,
      megabit_per_second: 1e-6,
      megabyte_per_second: 1.25e-7,
      mebibit_per_second: 9.5367e-7,
      gigabit_per_second: 1e-9,
      gigabyte_per_second: 1.25e-10,
      gibibit_per_second: 9.3132e-10,
      terabit_per_second: 1e-12,
      terabyte_per_second: 1.25e-13,
      tebibit_per_seconf: 9.0949e-13
    }
  },
  area: {
    base_name: 'square_meter',
    units: {
      square_meter: 1,
      square_kilometer: 1e-6,
      square_mile: 3.861e-7,
      square_yard: 1.19599,
      square_foot: 10.7639,
      square_inch: 1550,
      hectare: 1e-4,
      acre: 0.000247105
    }
  },
  torque: {
    base_name: 'newton_meter',
    units: {
      newton_meter: 1,
      deca_newton_meter: 0.1,
      kilo_newton_meter: 0.001,
      deci_newton_meter: 10,
      centi_newton_meter: 100,
      milli_newton_meter: 1000,
      micro_newton_meter: 1e+6,
      newton_millimeter: 1000,
      kilogram_force_meter: 0.10197162,
      kilogram_force_centimeter: 10.19716213,
      gram_force_meter: 101.9716213,
      gram_force_centimeter: 10197.16212978,
      dyne_centimeter: 1e+7,
      foot_pound: 0.73756215,
      inch_pound: 8.85074579,
      inch_ounce: 141.612,
    }
  },
  density: {
    base_name: 'kilogram_per_cubic_meter',
    units: {
      kilogram_per_cubic_meter: 1,
      kilogram_per_cubic_millimeter: 1.e-9,
      kilogram_per_cubic_centimeter: 1.e-6,
      gram_per_cubic_meter: 1000,
      gram_per_cubic_millimeter: 1.e-6,
      gram_per_cubic_centimeter: 0.001,
      tonne_per_cubic_meter: 0.001,
      tonne_per_cubic_millimeter: 1.e-12,
      tonne_per_cubic_centimeter: 1.e-9,
      gram_per_liter: 1,
      gram_per_milliliter: 0.001,
      pound_per_cubic_feet: 0.062427960576145,
      pound_per_cubic_inch: 3.6127292000084E-5
    }
  }
}
