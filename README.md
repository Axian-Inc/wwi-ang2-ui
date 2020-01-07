# FFTHH Store UI
A basic Angular UI originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Getting Started
This project makes use of Docker and VS Code to provide a portable and explicit environment to develop against and target deployments towards.

### Workstation Dependencies
Ensure you have the following installed on your workstation:

*   [Docker Desktop](https://www.docker.com/products/docker-desktop)
*   [Visual Studio Code](https://code.visualstudio.com/download)
*   [Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Running Locally
1. Clone down this repository.
2. Open the folder in VS Code, the `Remote Containers` extension will notice the `.devcontainer\devcontainer.json` and attempt to build a container to house this environment and open this folder inside the container, as described by the project's root `Dockerfile`.
3. Once VS Code is running with the folder hosted out of the container, set the application config in the `./environments/environments.ts` file.
4. Run this application by running `yarn start` from the container terminal and navigate to `http://localhost:53529/`. The app will automatically reload if you change any of the source files.

## Angular CLI Help
### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).