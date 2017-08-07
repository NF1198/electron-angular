# Electron+Angular Calculator

This application demonstrates a simple application using
[Angular (Angular 2)](https://angular.io/) and
[Electron](https://electron.atom.io/).

Angular + Electron is a fantastic setup because you can develop interactively in "dev" mode, then build your Angular site (locally) and run in "production" mode, all using Electron to expose the UI. The [Angular CLI](https://cli.angular.io/) pretty much takes out all the guess-work so you can focus on developing your app, not learning how all the tools work.

To use this repository:

* install [npm and node](https://www.npmjs.com/get-npm)
* clone this repository to your local machine
* install the Angular CLI and [read the Angular quick-start](https://angular.io/guide/quickstart)
* read the [Electron quick-start](https://electron.atom.io/docs/tutorial/quick-start/)
* run `npm update`
* run `ng serve`, then in another terminal run `npm run start:dev`. The former starts the Angular development server. The latter starts Electron and points it at the development server.

## Building the application

You can also run and test a development build:

* run `ng build`
* run `electron .` from the project root.

Refer to `package.json` and `main.js` in the project root to see how the electron app is configured for each use-case. The main difference is that in a development build, electron is configured to load `electron-reload`. Beyond that, you can just focus on developing your Angular application.

## References

* [Angular + Electron Music Player](https://scotch.io/tutorials/build-a-music-player-with-angular-2-electron-i-setup-basics-concepts)
* [PrimeNG](https://www.primefaces.org/primeng/#/)

# From Angular-CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
