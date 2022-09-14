# components

Library of reusable UI components, as well as ready-built pages.

## Scripts

```sh
# build components
yarn components:build

# component dev server with hot reload
yarn components:dev

# build storybook
yarn components:storybook:build

# storybook dev server with hot reload
yarn components:storybook:dev

# test components
yarn components:test

# test components in watch mode
yarn components:test:watch
```

## Ideas for improvements

general:

-   prefix component names with `ui-`, and remove the `-component` suffix
-   add automated visual regression tests using storybook and puppeteer
-   improve types
-   get a proper react export working :)

`dropdown-component`:

-   close dropdown whenever an element outside of the dropdown is being clicked
