# Webpack Module Federation with Aurelia v2

This repository demonstrates a simple example with the following scenario:

* App 1 is the **Host**
* App 2 exposes both a function **superFunction** and a custom element named **remote-site**
* App 1 consumes those and fires the remote function on a button click
* App 1 consumes the remote-site element and wires it up in the router on `/remote`

## How to start?

* cd into `app2` and `npm install` + `npm start` -> starts the app2 on port 9001
* in a second terminal, cd into `app1` and `npm install` + `npm start` -> starts the app1 on port 9000