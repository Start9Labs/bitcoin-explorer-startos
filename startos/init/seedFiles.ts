import { envFile } from '../fileModels/_env'
import { sdk } from '../sdk'

export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  await envFile.merge(effects, {})
})
