import firstConverter from './helloWorld'

const choice = (max = 1, min = 0, options = {}) => {
  if (options.bool === true) {
    return firstConverter()
  } else {
    return false
  }
}

export default choice
