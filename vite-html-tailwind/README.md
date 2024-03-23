![vite+html+tw](https://github.com/glebgorokhov/breezify-examples/assets/24701608/2cc7360a-c5cf-4b56-957e-48ec74d4ea83)

# Breezify + Vite + HTML + Tailwind   

Original template: https://github.com/Tailus-UI/ada-html

## Total savings

- **CSS**: 15.64 KB (22.42%)
- **HTML**: 75.37 KB (35.24%)
- **JS**: 0.84 KB (0.57%)
- **Total**: 91.85 KB (21.30%)

## How to reproduce the setup

```bash
# clone the repo
$ git clone git@github.com:Tailus-UI/ada-html.git

# change directory
$ cd ada-html

# install dependencies
$ npm install

# install Breezify
$ npm i -D breezify

# create the config
$ npx breezify init
```

Then update your `package.json` like this:

```json
{
  "scripts": {
    "build": "vite build && breezify do"
  }
}
```

Then build and preview the project:

```bash
# build for production and launch server
$ npm run build

# preview production
$ npm run preview
```

## Additional commands

```bash
# serve with hot reload at localhost:3000
$ npm run dev
```
