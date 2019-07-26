## react-google-recaptcha in netlify form example

[DEMO](https://gregorib-recaptcha-demo.netlify.com)

Uses `react-google-recaptcha` with Netlify form handling.

## Installation: 

>`npm install`

## Usage:

Add `REACT_APP_SITE_KEY='your site key'` to an `env` file in the root folder for local testing.  For netlify, you need to add the env variable in the dashboard, and also add a `SITE_RECAPTCHA_SECRET` env variable with the 'secret key' value for the server.

Get a recaptcha v2 key from your [google recaptcha admin page](https://www.google.com/recaptcha/admin/).