# A simple testing / demo site for HTML5 Application Cache

Sample HTML5 index.html file with a `manifest` file for testing the HTML5 appcache behaviour.

* Simple demo HTML5 page with some links to other online resources.
* Using Apache .htaccess with `mod_rewrite` for far future `expire-header` of static content.
* Added proper `mime-type` for `.manifest` in .htaccess using `AddType` directive for Apache .htaccess
* Tested in Chrome and Firefox

## Usage

Modify the `v1`number in both the index.html file and the offlin.manifest file, to trigger a webbrowser update. A message will be displayed that the manifest file is updated and the browser wil reload the page.