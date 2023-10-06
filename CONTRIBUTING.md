# How to contribute

In the file `.tool-versions` you can find required versions of tools we use for development (Node.js for example).
Make sure you use the same version for every tool. Or use [asdf](https://asdf-vm.com) for it.

We use [EditorConfig](https://editorconfig.org). Please install a plugin for your editor.

We use [Browserslist](https://browsersl.ist). The config placed in `package.json`.

Architecture rules. [Feature Sliced Design](https://feature-sliced.design/) for react?

Writing tests rules.

Linters tools and requirements. Pre-commit.

Commit messages. Make sure you have setted up correct user.name and user.email settings of GIT. https://www.conventionalcommits.org/en/v1.0.0/
Commit message subject should continue the phrase "If applied, this commit will...". Refer issues.

Branching. `feature/`, `fix/` and adding number of an issue is recommended. Recommended to use rebase to update your branch with master if it is ok. `git push --force-with-lease`

Merging. Try to keep PR small. Keep it in draft while not ready.

Contribution to this contribution guide.
Any additional to this document as any other code.
Do not add rule here is you can add it to linter.
