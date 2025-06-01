// Configuración de redes Polkadot
export const NETWORKS = {
  polkadot: {
    name: 'Polkadot',
    rpc: 'wss://rpc.polkadot.io',
    symbol: 'DOT',
    decimals: 10,
    ss58Format: 0,
    explorer: 'https://polkadot.subscan.io'
  },
  kusama: {
    name: 'Kusama',
    rpc: 'wss://kusama-rpc.polkadot.io',
    symbol: 'KSM',
    decimals: 12,
    ss58Format: 2,
    explorer: 'https://kusama.subscan.io'
  },
  westend: {
    name: 'Westend Testnet',
    rpc: 'wss://westend-rpc.polkadot.io',
    symbol: 'WND',
    decimals: 12,
    ss58Format: 42,
    explorer: 'https://westend.subscan.io'
  },
  local: {
    name: 'Local Node',
    rpc: 'ws://127.0.0.1:9944',
    symbol: 'UNIT',
    decimals: 12,
    ss58Format: 42,
    explorer: null
  }
}

// Configuración por defecto
export const DEFAULT_NETWORK = 'westend' // Usar testnet por defecto para desarrollo

// Direcciones de ejemplo para testing
export const SAMPLE_ADDRESSES = {
  alice: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  bob: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
  charlie: '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y'
}

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'PolkaJobs',
  version: '1.0.0',
  supportedExtensions: ['polkadot-js'],
  defaultGasLimit: 1000000000000,
  defaultTip: 0
}

// URLs útiles
export const URLS = {
  polkadotjs: 'https://polkadot.js.org/extension/',
  faucet: {
    westend: 'https://faucet.polkadot.io/',
    kusama: 'https://faucet.polkadot.io/'
  },
  docs: {
    polkadot: 'https://wiki.polkadot.network/',
    substrate: 'https://docs.substrate.io/',
    ink: 'https://use.ink/'
  }
}

export default {
  NETWORKS,
  DEFAULT_NETWORK,
  SAMPLE_ADDRESSES,
  APP_CONFIG,
  URLS
}
