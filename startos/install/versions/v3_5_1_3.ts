import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v3_5_1_3 = VersionInfo.of({
  version: '3.5.1:3',
  releaseNotes: 'Version 3.5.1 repack',
  migrations: {
    up: async ({ }) => {
    },
    down: IMPOSSIBLE,
  },
})
