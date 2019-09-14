# Demo: Checking dynamic data using TypeScript definitions

A simple application that simulates fetching untyped dynamic data from an external source.
Showcases how unexpected data mismatches can be handled as a part of an integration testsuite or as a part of the application itself.

If you propertly detect that your input data does not match the internal compiled expectations at runtime in your application you can take actions like:
- Fail early, application is in an unknown state
- Log a message to your logging service
- Both fail early and log

If you do the runtime-checks as an integration-step you can catch serious bugs or failed contracts with external data as a part of your build/deploy steps as well.

## Why is this kind of cool?

You don't have to maintain a separate set of decoders or create your types as separate JSON Schemas or some third-party DSL. Your TypeScript types represents the truth! The internal type-checkers that can be used at runtime are generated automatically from your TypeScript.

## Running demo

`npm start` - Run the app locally in development mode

`npm test` - Run the integration testsuite that includes checking your runtime-data up against your TypeScript definitions

## Notes

`src/dogServiceSmart.ts` contains a demo-implementation of how you can handle failure in a controlled way using the type-checkers. Update the import in `App.tsx` to try it out.