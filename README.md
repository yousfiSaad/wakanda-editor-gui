New-GUI
=======

Welcome to the repository of the new Wakanda GUI Designer. It is currently a **Proof Of Concept**, so it might be unstable and contains bug. Do not hesistate to report if you find one by opening an issue.

# Setup
## Prerequisites
- NodeJS (tested with node v4)
- Chrome

## Install
Install dependencies (webpack and co) with npm.
```bash
$ npm install
```
After install, webpack will build the solution.

## Run
Launch webpack development server with following command. It will server the solution on port `9090`.
```bash
$ npm run webpack-server
```
Be careful, webpack-dev-server serve files **from memory**, they are not written to the filesystem.

Then browse to `http://localhost:9090/` on Chrome.

## Build
```bash
$ npm run webpack-build
```

It will generate and `index.html` and the root of the project directory, and a `build/` directory with javascript files bundled.

# Development
When javascript files are edited, webpack development server will automatically rebuild your solution. `.build.ejs` files **will not trigger** a new buildby webpack, you will need to do it manually by stopping and relaunching webpack development server.

Files for GUI content (i.e loaded on the `iframe`) are placed on `./workspace` directory. **Do not commit files on `./workspace` directory**, so every developers can keep its own set of files while developing features.

## Contribute
Main development branch is `develop`. If you want to add a feature, please work on a **separate branch** and create a pull request when your feature is ready to be merged on develop branch.
