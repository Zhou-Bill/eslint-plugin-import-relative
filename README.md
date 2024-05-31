# eslint-plugin-import-relative

import file use in relative path we should  change  the  alias  path

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-import-relative`:

```sh
npm install eslint-plugin-import-relative --save-dev
```

## Usage

Add `import-relative` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-relative"
    ]
}
```

或者

```json
{
    "extends": [
        "plugin:import-relative/recommended"
    ]
}
```



Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-relative/use-alias-path": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


