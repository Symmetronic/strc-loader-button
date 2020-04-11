![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Symmetronic Loader Button

A simple button with a loading state. This comes in handy if you like to notify the user about some asynchronous action taking place.

## Using this component

### Script tag

- Put the following script tag `<script src='https://unpkg.com/strc-loader-button@1.0.1/dist/strc-loader-button.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML, etc.

### Node Modules

- Run `npm install strc-loader-button --save`
- Put the following script tag `<script src='node_modules/strc-loader-button/dist/strc-loader-button.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML, etc.

### In a stencil-starter app

- Run `npm install strc-loader-button --save`
- Add an import to the npm packages `import 'strc-loader-button';`
- Then you can use the element anywhere in your template, JSX, HTML, etc.

## API

### Setting the Loading State

An exemplary setup might look as follows.

```html
<script>
function load() {
  let loaderButton = document.querySelector('strc-loader-button');
  loaderButton.setAttribute('loading', true);

  setTimeout(loaded, 2000);
}

function loaded() {
  let loaderButton = document.querySelector('strc-loader-button');
  loaderButton.setAttribute('loading', false);
}
</script>

<strc-loader-button
  disabled='false'
  loading='false'
  loadingLabel='Loading...'
  type='button'
  onClick='load();'
>
  Click me!
</strc-loader-button>
```

### Styling

You can adjust the style of the loader button using CSS variables.

```css
strc-loader-button {
  --strc-loader-button-color: gray;
  --strc-loader-button-duration: 0.75s;
}
```

## NPM scripts

- `npm install`: Install dependencies
- `npm start`: Build in development mode
- `npm run build`: Build in production mode
- `npm test`: Run tests
- `npm run test:watch`: Run tests in interactive watch mode
