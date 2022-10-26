# Infinix UI application

# Description

Perpetual futures DEX for sophisticated traders

**Infinix aims to be the Perpetual Futures platform for Sophisticated Traders**
- **Superior leverage:** Logarithmic perpetuals reduce liquidation risk by taking the log of the underlying asset price before computing funding payments. This better behaved funding payment distribution provides for longer funding periods, higher leverage, and a more stable clearing house.
- **Real world data feeds:** every assets class that the first-party API3 oracle provides can be supported via a perpetual contract. Whether it’s commodities, fiat, crypto, stocks, and more.
- **Custom tools & functions:** Custom funding payment functions and tools for sophisticated traders

# Breakdown

Under the hood, there are multiple components configured to work together.

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [Jest](https://jestjs.io/)
- [Linter](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [SVG inline import](https://github.com/gregberge/svgr)
- [PWA](https://github.com/shadowwalker/next-pwa)
- [Zustand](https://github.com/pmndrs/zustand)

# Maintenance

To start developing, run the following command:

```bash
$ cp .env.example .env.local
```

Edit `.env.local` with the valid credentials.

Then, run the following command:

```bash
$ yarn start
```

# Sync

To sync the cloned repository with the remote repository, run the following command:

```bash
$ yarn sync
```

## Partytown Script

Add the type="text/partytown" prop for each script that should run from a web worker. The example below is using the React specific way of inlining a script with dangerouslySetInnerHTML.

```
<script
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: '/* Inlined Third-Party Script */',
  }}
/>
```

## Storybook

There are two ways to run your storybook:

- `yarn storybook` to run the storybook

- `yarn storybook:build` to build the storybook

## Testing

There are two ways to test your application:

- `yarn test` to run the tests

- `yarn test:watch` to run the tests in watch mode

<aside>
💡 Note: Wiring between storybook and Jest is done, check out the example `tests/pages/home.test.tsx` for more information.

</aside>

## Running the app

There are multiple scripts ready to use on your first tryout.

- `yarn start` to launch the development server
- `yarn build` to build production
- `yarn lint` to run the linter

<aside>
💡 `yarn install` will trigger `.scripts/postinstall.js` script. Which contains important checks on whether you need to update certain configurations. It is strongly advised to make sure that script doesn’t throw any warnings, or in case of the warning, resolve them ASAP before going live.

</aside>
````
