import firstConverter from './helloWorld.js'

const choice = (max = 1, min = 0, options = {}) => {
  if (options.bool === true) {
    return firstConverter()
  } else {
    return false
  }
}

export default choice
