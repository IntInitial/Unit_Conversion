import firstConverter from '../src/helloWorld'

test('Returns true by default', () => {
  // This will have a 50/50 chance to pass or fail
  // TODO Implement better unit tests
  expect(firstConverter()).toBe(false)
})
