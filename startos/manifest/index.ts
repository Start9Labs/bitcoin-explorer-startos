import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'bitcoin-explorer',
  title: 'Bitcoin Explorer',
  license: 'MIT',
  wrapperRepo: 'https://github.com/aldum/btc-rpc-explorer-startos',
  upstreamRepo: 'https://github.com/janoside/btc-rpc-explorer',
  supportSite: 'https://github.com/janoside/btc-rpc-explorer/issues',
  marketingSite: 'https://bitcoinexplorer.org/',
  donationUrl: 'https://donate.bitcoinexplorer.org',
  docsUrl: 'https://github.com/janoside/btc-rpc-explorer',
  description: { short, long },
  volumes: ['main'],
  images: {
    explorer: {
      source: {
        dockerBuild: {},
      },
      arch: ['x86_64', 'aarch64'],
    },
    valkey: {
      source: {
        dockerTag: 'valkey/valkey:alpine',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    bitcoind: {
      // @TODO conver to LocalString when supported by SDK
      description: 'Communicate with the Bitcoin Network',
      optional: false,
      metadata: {
        title: 'Bitcoin',
        icon: 'https://bitcoin.org/img/icons/opengraph.png',
      },
    },
  },
})
