ionic-drupal-client-example
===========================

Example app using ionic-drupal-client

### Configuration ###

This app looks for a global object `drupal_config` that has the properties `server_url` and `api_endpoint` that specify where your Drupal instance is running and the name of your Services endpoint.

I set the global in a config file that is referenced by index.html here:

```html
<script src="js/config.js"></script>
```
Use `config.js` to set a global hash of the server info, something like:

```javascript
window.drupal_config = {
    server_url: "http://myserver.com/", // use trailing slash
    api_endpoint: "api/v1" // no trailing slash
};
```
