# Template of a web application

## How to use this template

Download the content of this repository.

In `package.json` change the values of the `name`, `version`, `description`, `author`, `repository`, `bugs` and `homepage` keys. Remove any of them except `name` and `version` if you don't need them.

Choose the license you will use for your project and change `package.json`:`license` accordingly. Also, change the `LICENSE` file and "License" section of this readme.

Set up [Browserslist](https://browsersl.ist) for your requirements. The config is placed in `package.json`:`browserslist`.

_do not forget to run `npm install` after changing `package.json` file_

Change files in directory 'public':

-   `title` in `index.html`
-   `humans.txt` file content (check [this guide](https://humanstxt.org))
-   icons and favicon files with saving sizes of images (you can find an explanation in [this article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) written by [Evil Martians](https://evilmartians.com/))
-   if you want to ban search engine crawlers from accessing your web application modify `robots.txt` — uncomment the ban section

Finally, remove this section of README.md and change the header text.

## Building the application

### With Docker

Make sure you have [Docker](https://www.docker.com) installed.

Remove the `dist` directory if exists. You can do it with the `rm -Rf dist` command.

Run `docker build --output=dist --target=build-result .`

Find the built application in the `dist` directory.

### Locally

Make sure you have the same version of Node.js as specified in `package.json`:`engines.node`.
We recommend using [asdf](https://asdf-vm.com) to avoid manual Node version management.

Install node modules with the command `npm install`

Run `npm run build`

Find the built application in the `dist` directory.

## Contributing

Please get familiar with our [contributing guide](./CONTRIBUTING.md).

## License

This project is released under [ISC License](https://opensource.org/licenses/ISC).
