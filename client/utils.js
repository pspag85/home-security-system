const randomIntGenerator = () => Math.floor(Math.random() * Math.floor(10))

const randomPasscodeGenerator = () => {
  let passcode = ''
  const digits = '0123456789'
  for(let i = 0; i < 4; i += 1) {
    let index = randomIntGenerator()
    let char = digits[index]
    passcode += char
  }
  return passcode
}

const utils = {
  randomIntGenerator,
  randomPasscodeGenerator
}

module.exports = utils