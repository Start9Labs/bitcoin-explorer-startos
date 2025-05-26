import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { envFile } from '../fileModels/_env'
import { defaultEnv } from '../utils'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await Promise.all([
      envFile.write(effects, defaultEnv),
    ])
  },
})
