import _ from 'lodash'

const email = document.querySelector('input')
const message = document.querySelector('textarea')
const from = document.querySelector('form')

const o = JSON.parse(localStorage.getItem('feedback-form-stat'))

if (o) {
    console.log('o', o)
    message.value = o.message
    email.value = o.email
}

from.addEventListener('input', _.throttle((e) => {
    localStorage.setItem('feedback-form-stat', JSON.stringify({ email: email.value, message: message.value }) )
}, 500))

from.addEventListener('submit', (e) => {
   e.preventDefault()
   console.log({ email: email.value, message: message.value })
   message.value = ''
   email.value = ''
   localStorage.clear()
})

