# `@devoinc/eslint-config-devo`

This is an eslint config package. It exports several eslint confgs for projects with react and js or ts.

# Usage

1. ## **Install this package**:

   ```bash
   $ npm install --dev @devoinc/eslint-config-devo
   ```

2. ## **Install dependencies**:

   - If you're using npm < 7, install this package's **peerDependencies** as devDependencies (npm >= 7 will install them automatically for you):
     ```bash
     $ npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks
     ```
   - If you're going to use a config with typescript add `@typescript-eslint/eslint-plugin` to your devDependencies.
   - If you're going to use a config with jest add `eslint-plugin-jest` to to your devDependencies.

3. ## **Add it to your project's eslint config file**:

   - Edit your eslint config file (`.eslintrc.*`) and extend one of the exported configurations (see available configurations below). Examples:

     ```javascript
     {
       "extends": ["@devoinc/eslint-config-devo/js-react"]
     }
     ```

     or

     ```javascript
       {
         "extends": ["@devoinc/eslint-config-devo/ts-react-newJsx-jest"]
       }
     ```

## Optional: If you want to add Prettier to your config:

Prettier is not required and has nothing to do with `@devoinc/eslint-config-devo` but we recommend adding Prettier to your dev environment.

- Install [Prettier](https://prettier.io/)
- Set up Prettier. We recommend using our prettier config shared configuration, named `@devoinc/prettier-config`: # TODO add link

  ```bash
  $ npm install -D @devoinc/prettier-config
  ```

  Then, configure it adding this to your `package.json` file:

  ```javascript
   {
     "prettier": "@devoinc/prettier-config"
   }
  ```

  Note: If you use a prettier shared config, you can still extend/override it in your project's configuration, the same as with the eslint config.

# Available configurations:

This package exports a number of eslint configurations. Choose the one that better applies to your project. Keep in mind these recommendations:

- There are 2 `classic` configs. They exist to maintain compatibility with predecessor projects. Prefer other configs for new projects, as they add more rules and support ESModules out of the box.
- It is recommended to use configs with `-jest` suffix only for [Jest](https://jestjs.io/) test files. You can either create an eslint config file for a folder where you have your test files or you can use the [overrides keyword](https://github.com/jest-community/eslint-plugin-jest#running-rules-only-on-test-related-files) in your eslint config. On how to use it, check out the [Example project](#example-project) section below.

  ## Javascript configs (each config extends the previous one):

  - `@devoinc/eslint-config-devo/js-react`: javascript base config with react recommended rules (includes hooks rules)
  - `@devoinc/eslint-config-devo/js-react-jest`: javascript, react and jest recommended rules
  - `@devoinc/eslint-config-devo/js-react-newJsx`: javascript and react with [new JSX](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports). Overrides js-react.
  - `@devoinc/eslint-config-devo/js-react-newJsx-jest`: javascript, react with new JSX and jest

  ## Classic javascript configs:

  - `@devoinc/eslint-config-devo/js-classic-base`: very basic base config with few rules
  - `@devoinc/eslint-config-devo/js-classic-jest-react-prettier`: extends the previous one and also adds recommended rules for jest, react, react hooks and prettier. This packages requires Prettier. See notes above about Prettier. For this package you might need to install these extra devDependencies: `eslint-config-prettier eslint-plugin-jest eslint-plugin-prettier prettier`

  ## Typescript configs (each config extends the previous one):

  - `@devoinc/eslint-config-devo/ts-react`: typescript base config with react recommended rules (includes hooks rules)
  - `@devoinc/eslint-config-devo/ts-react-jest`: typescript, react and jest recommended rules
  - `@devoinc/eslint-config-devo/ts-react-newJsx`: typescript and react with [new JSX](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports). Overrides ts-react.
  - `@devoinc/eslint-config-devo/ts-react-newJsx-jest`: typescript, react with new JSX and jest

# Example project

If you have any questions, we have an [example project](https://github.com/DevoInc/React-App-Template) that can teach you how to use this package. See the `.eslintrc.cjs` and `package.json` files.

# Development of this package

There are 2 families of eslint configs in this package: Javascript and Typescript configs.
All the the javascript configs (except the classic configs) extend the `js-react` config. So if you make changes in the `js-react` config it will affect the others. The same goes for the `ts-react` config in the typescript configs family.

If you want to test your config you can use the `eslint . --debug` command in your consumer package to log all debugging info.

For more info about creating a shareable config see [the official docs](https://stackoverflow.com/questions/54246368/how-to-test-an-npm-module-with-peerdependencies).


# How to publish a new version

1. Bump the package version
2. Update the changelog
3. Create a new Github release