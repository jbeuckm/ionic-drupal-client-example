ionic-drupal-client-example
===========================

Example app using ionic-drupal-client

### Configuration ###

This app looks for a global object `drupal_config` that has the properties `server_url` and `api_endpoint` that specify where your Drupal instance is running and the name of your Services endpoint.

I set the global in a config file that is referenced by index.html here:

```html
<script src="js/config.js"></script>
```
