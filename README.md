# Template of a web application

## How to use this template

In `package.json` change values of `name`, `version`, `description`, `author`, `repository`, `bugs`, `homepage`.

Set a node version you need in `package.json`:`engines.node` and in `.tool-versions`.
The file `.tool-versions` is used by the [asdf](https://asdf-vm.com) runtime version manager, but feel free to use any other version manager (like [nvm](https://github.com/nvm-sh/nvm) and remove this file.

Choose the license you need for your project and change `package.json`:`license` accordingly. Also change `LICENSE` file or remove it.

Setup [Browserslist](https://browsersl.ist) for your needs. The config placed in `package.json`.

Update [contributing guide](./CONTRIBUTING.md) for your needs.


## Webpack tips

If you need several HTML-pages for your project, consider to use a template engine html-webpack-plugin [can use](https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md). I believe [pug](https://pugjs.org/) is a good option.

If you want to use separate js-files for that htmls, consider to use several entries and splitting dependecies to a separate JS-file using [dependOn option](https://webpack.js.org/guides/code-splitting/#prevent-duplication).


## Contributing

Please get familiar with our [contributing guide](./CONTRIBUTING.md).


## License

This project is released under [ISC License](https://opensource.org/licenses/ISC).
