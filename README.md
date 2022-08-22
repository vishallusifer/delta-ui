# DeltaUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## To run the project follow these steps

1  Clone the project form git or download the zip file from git.
2. run npm install from inside project folder
3. To run project with Production API
    a. ng serve --prod
4. To run project with local API
    a. ng serve 
5. Open broser on localhost:4200

## To deploy project in AWS S3 Bucket

1. ng build --prod
2. create bucket in AWS console S3 Service 
3. Copy all the folder generated in dist/delta-ui folder to s3 bucket
4. provide bucket policy and allow all public access
5. using properties tab of s3 bucket, convert  bucket to static website and use that url to access application.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
