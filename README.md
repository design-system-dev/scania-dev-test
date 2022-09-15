# scania-dev-test

This is my solution for the position as Frontend Developer at [Scanias Design System](https://digitaldesign.scania.com/home) team. The final result can be seen here:

[Live Storybook](https://scania-dev-test.netlify.app/?path=/story/pages-driver-evaluation-page--standard)

## Approach

My idea was to build a mini design system. So instead of just building the page and fullfilling the requirements, I decided to make it fit better to the position and use a similar approach (at much smaller scale) as I would have done for a proper design system:

1. Building it from the ground up (tokens -> components -> pages)
2. Monorepo to keep things separated
3. Building generic and reusable components. Trying to resist the temptation to just make it work for the given design.
4. No component should make assumptions about the internal markup or styling of other components.
5. Testing everything via unit tests and storybook

## Issues

Unfortunately I did not manage to properly export the Stencil components to React, I tried for a few hours. The idea was to have a separate `app` package (created via `create-react-app`), that utilizes the UI components to build the page. The app was all set up (see commit history), but it would not work with the components. When trying to generate React components using `@stencil/react-output-target`, I was getting compiler errors that I could not resolve (see [this commit](https://github.com/design-system-dev/scania-dev-test/commit/fd7a3cc0865640575afaf5fbcf1d9837fcf170b5)). When instead using them directly as web components in react, then it was not possible to pass in array values, which is required for `dropdown-component` and `table-component`, see [this commit](https://github.com/design-system-dev/scania-dev-test/commit/552fa9e2afd62d5ce3a5e8f5e297c0c8c5e3d5dd).

Because of this issue, I decided to drop the React app, and instead add the page directly to the Storybook. Otherwise it would have not gone there, since Storybook is best used for plain UI components.

Besides that, using Stencil for the first time went surprisingly smooth!

## How to install & run

```bash
# test if yarn is installed. If not, see here: https://yarnpkg.com/getting-started/install
yarn -v

# install dependencies
yarn i

# build packages
yarn all:build

# open storybook
yarn components:storybook:dev

# other
yarn all:test
yarn eslint:check
yarn prettier:check
```

## Thanks!

Looking forward very much to hearing your feedback :) Have a great day!
