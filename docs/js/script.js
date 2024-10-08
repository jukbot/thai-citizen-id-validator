import isValidThaiID from '../../dist/browser/validator.js'

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('citizenid')
  const btn = document.getElementById('button')
  const error = document.getElementById('errorMessage')
  const success = document.getElementById('successMessage')

  const mask = IMask(input, {
    mask: '0-0000-00000-00-0'
  })

  input.addEventListener('input', handleInput)
  input.addEventListener('keypress', disableEnterSubmit)

  btn.addEventListener('click', handleSubmit)

  function handleInput () {
    const value = mask.unmaskedValue
    const maxLength = 13
    const regex = /^[0-9]\d*$/

    const isValidLength = value.length === maxLength
    const isValidFormat = regex.test(value)
    const isThaiIDValid = isValidThaiID(value)

    btn.disabled = !(isValidLength && isValidFormat && isThaiIDValid)

    input.setAttribute('aria-invalid', String(!isThaiIDValid))
    error.setAttribute('aria-hidden', String(isThaiIDValid))
    success.setAttribute('aria-hidden', String(!isThaiIDValid))
    error.style.display = isValidLength
      ? !isThaiIDValid
          ? 'block'
          : 'none'
      : 'none'
    success.style.display = isValidLength && isThaiIDValid ? 'block' : 'none'
  }

  function disableEnterSubmit (event) {
    if (event.code === 'Enter') {
      event.preventDefault()
      return false
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    event.stopImmediatePropagation()
    window.alert('Your citizen ID submit value is: ' + mask.unmaskedValue)
  }
})
