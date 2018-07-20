Sample app used to demonstrate how to add [Sentry](https://sentry.io/) with source maps to a [React](https://reactjs.org/) app.

## Setup

Set the following env vars however you prefer:

- REACT_APP_ERROR_REPORTING_KEY: {[Sentry DSN](https://docs.sentry.io/clients/java/config/#setting-the-dsn-data-source-name)}
- ERROR_REPORTING_ORGANIZATION: {Sentry organization}
- ERROR_REPORTING_PROJECT: {Sentry project}
- ERROR_REPORTING_API_TOKEN: {[Api token](https://sentry.io/settings/account/api/auth-tokens/)}

Open your console and run:

```
git clone git@github.com:jzabala/react-sentry-example.git
cd react-sentry-example
yarn
yarn build
cd build
npx http-server
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, [install http-server globally](https://www.npmjs.com/package/http-server) for older npm versions)_
