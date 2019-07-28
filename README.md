


Se cuenta con un servidor rest simple que esta en la carpeta 'servidorRestNodejs' el log in de la app se puede dar de dos formas con los usuarios quemados en el codigo, o bien consumiendo el servicio rest, para correr el app de angular debe realizar el comando ng serve -o y para correr el servidorRestNodejs.js unicamente debe entrar en la carpeta y colocar node servidor.js quiza le solicite instalar 2 dependecias 'express' y 'body-parser' esto lo puede realizar con el comando npm install 'nombredelpaquete'.

var users=[
  {user:'noel',role:'Admin'},
  {user:'oscar',role:'Guest'}
];

esta es la variable en el servidorRestNodejs en donde puede definir los usuarios que guste.













# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
