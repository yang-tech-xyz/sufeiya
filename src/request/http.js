import Vue from 'vue'
import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router/index'
import $ from 'jquery'

axios.defaults.timeout = 12600000

window._GlobalConfig = {
  // Gat Pool V4

  /* Deploy */
  currentEnv: 'local', // pro test local

  /* localhost */
  local: {
    //remove remove remove remove remove
    quickRegContractAddr: '',
    usdtContractAddr: '',
    nascanDomain: '',
    apiDomain: '/tophis/api/app',

    projectName: 'GatPool_Local',
    website: 'https://www.gatpool.com',
    price: 1,

    nacTokenId: 1,
    nacTokenName: 'GAT',
    nusdTokenId: 14,
    nusdTokenName: 'USDT',
    usdtBscPayAddress: '',
    projectInstanceId: 15,
    projectInstanceName: 'GatPool',
    chainName: 'BSC',
    web3jSign: 'GatPool-sign',

    chainId: 1,
    seconds: 5,
    networkVersion: 56,

    bscChain: {
      chainId: '0x38',
      chainName: 'BSC',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed3.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/'],
    },
  },

  /* test */
  test: {
    //remove remove remove remove remove
    quickRegContractAddr: '',
    usdtContractAddr: '',
    nascanDomain: 'https://scan.nachain.org',
    apiDomain: 'https://test-bsc-api.gatpool.com',

    projectName: 'GatPool_TEST',
    website: 'https://www.gatpool.com',
    price: 1,

    nacTokenId: 1,
    nacTokenName: 'GAT',
    nusdTokenId: 14,
    nusdTokenName: 'USDT',
    usdtBscPayAddress: '',
    projectInstanceId: 15,
    projectInstanceName: 'Tophis',
    chainName: 'BSC',
    web3jSign: 'GatPool-sign',

    chainId: 1,
    seconds: 5,
    networkVersion: 56,

    bscChain: {
      chainId: '0x38',
      chainName: 'BSC',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed3.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/'],
    },
  },

  /* pro */
  pro: {
    projectName: 'GatPool',
    website: 'https://bsc.gatpool.com',
    price: 1000,
    quickRegContractAddr: '',
    usdtContractAddr: '0x55d398326f99059fF775485246999027B3197955',
    nacTokenId: 1,
    nacTokenName: 'GAT',
    nusdTokenId: 14,
    nusdTokenName: 'USDT',
    usdtBscPayAddress: '',
    projectInstanceId: 16,
    projectInstanceName: 'GatPool',
    chainName: 'BSC',
    web3jSign: 'GatPool-sign',

    chainId: 1,
    nascanDomain: 'https://scan.nachain.org',
    // apiDomain:window.location.origin +'/api/app',
    //  apiDomain: 'https://tophis.net/api/app',
     apiDomain: '/api/app',
    // apiDomain: 'https://decom.fun/api/app',
    
    

    seconds: 180,
    networkVersion: 11155111,
    bscChain: {
      chainId: '0x38',
      chainName: 'BSC',
      nativeCurrency: {
        name: 'SepoliaETH',
        symbol: 'SepoliaETH',
        decimals: 18,
      },
      rpcUrls: ['https://sepolia.infura.io/v3/'],
      blockExplorerUrls: ['https://sepolia.etherscan.io'],
    },
  },
}

// 添加新的请求路径
axios.defaults.baseURL = _GlobalConfig[_GlobalConfig.currentEnv].apiDomain
axios.defaults.altBaseURL = ''

axios.defaults.headers.common['walletAddress'] = localStorage.getItem(
  'tophis_walletAddress',
)

axios.interceptors.request.use(
  (config) => {
    axios.defaults.headers.common['walletAddress'] = localStorage.getItem(
      'tophis_walletAddress',
    )

    config.headers['Accept-Language'] = localStorage.getItem('Gat_Mining_Pool_language')=='en_US'?'en': 'cn'
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(types.LOGOUT)
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.path },
            })
      }
    }
    return Promise.reject(error.response.data)
  },
)

export default axios
