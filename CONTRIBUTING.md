# How to contribute

This guide is intended to provide rules and recommendations for contributing to our codebase.
This guide itself is also open for revisions and your suggestions to it are welcome.

## System-level tools

The file `.tool-versions` specifies versions of system-level tools we use (Node.js for example).
Make sure you use the same version for every tool installed in your system.
We recommend using [asdf](https://asdf-vm.com) to avoid manual version management.

When changing the version of Node.js, change `package.json`:`engines.node`, `.tool-versions` and `Dockerfile` accordingly.

## Linters and formatters

We use [EditorConfig](https://editorconfig.org) with config in the file `.editorconfig`, [ESLint](https://eslint.org) with config in the file `.eslint.js`, [Stylelint](https://stylelint.io) with config in the file `.styleelint.js` and [Prettier](https://prettier.io) with config in the file `.prettierrc.js`. We recommend having plugins for all of them in your code editor or IDE and using it.

You can check all the project code with `npm run code:check` or format it with `npm run code:fix`.

We use [Lefthook](https://github.com/evilmartians/lefthook) to check files of a commit and restrict the commit if checks fail. See the config in the file `lefthook.yml`. It is possible to skip the pre-commit checks by using `--no-verify` option of the `git commit` command, but this is only for an emergency and we strongly recommend not overusing this method.

Pull requests with the wrong formatted code can be rejected.

## Run for development

Use `npm start` to run webpack in watch mode. The result will be in the `dist` directory. You can serve this directory with any web server like the [http-server](https://www.npmjs.com/package/http-server) npm package or default Ruby static server for example: `ruby -run -e httpd . -p 3000`.

## Configuring build

For building we use [webpack](https://webpack.js.org). Config is in the `webpack.config.js` file.

We use [Browserslist](https://browsersl.ist) to set the browser versions we support in this application. It affects the build process. The config is in `package.json`:`browserslist`.

## Testing

Testing is good. :) But we don’t have any tests yet. :(

## Branching

Create branches for your additions to the codebase.

For branches with new features use name in format `feature/x`, and `fix/x` for branches with fixes, where `x` is an issue number or a short description in the kebab-case (or both). Good examples: `feature/12`, `fix/output-in-webpack`, `feature/13-restyle-homepage`.

We recommended using `git rebase` to update your branch with the main branch. After rebasing push your code with `git push --force-with-lease`.

## Rules of commits

Make sure you have set up the correct `user.name` and `user.email` in Git config.

Commit message subject should continue the phrase "If applied, this commit will...".

We don't force using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification but it is always welcome.

## Merging

We use Pull Requests (PR) to merge new code into the codebase.

Try to keep your PR small.

Mark a PR as a draft if it is not ready for review.

## Hints and tricks

If you need several HTML pages for your project, consider using a template engine [integrated with](https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md) html-webpack-plugin. We believe [pug](https://pugjs.org/) is a good option.

If you want to use separate js-files for that htmls, consider using several entries and splitting dependencies to a separate JS-file using [`dependOn` option](https://webpack.js.org/guides/code-splitting/#prevent-duplication).
