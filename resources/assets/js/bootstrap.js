
window._ = require('lodash')

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery')

require('./vendor/responsive-paginate')

/**
 * We'll load jQuery colorbox plugin.
 */

window.colorbox = require('jquery-colorbox')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Add a request interceptor
window.axios.interceptors.request.use(function(config) {
    // Show loading before request is sent
    window.Loading.start('#main-container')
    return config
})

// Add a response interceptor
window.axios.interceptors.response.use(function(response) {
    // Hide loading on success
    window.Loading.stop()
    return response
}, function(error) {
    // Hide loading on error
    window.Loading.stop()
    return Promise.reject(error)
})

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    throw new Error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

/**
 * We need to pass cookie to api subdomain
 */

window.axios.defaults.withCredentials = true

/**
 * We need to require Popper.js, then Bootstrap JS.
 */

require('popper.js')
require('bootstrap/dist/js/bootstrap')

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
