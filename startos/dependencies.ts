import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  return {
    bitcoind: {
      kind: "running",
      versionRange: ">=30.2:5-beta.4",
      healthChecks: ["bitcoind"],
    },
  }
})
