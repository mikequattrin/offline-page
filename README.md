# Offline Page
## Simple offline page using service workers

Notes: 
* Service Worker requires your production site to be HTTPS enabled (localhost does not require HTTPS)
* Service Worker only works in localhost and not at a file://
* Service Worker doesn't have access to the DOM
* Service Workers are only supported in Chrome, Firefox, and Opera. Partial support available in Android Browser and Chrome for Android. Soon to be supported in IE Edge.

Setup:

* Run python -m SimpleHTTPServer in project directory

ToDo:
* Add functionality to offline load home page javascript files, and style files
* Write docs for debugging service workers using firefox 