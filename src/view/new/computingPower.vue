<template>
  <div class="computingPower" @touchstart="isType2 = ''">
    <inc_menu/>
    <div class="bg1" @click="forAllFn">
      <div><img class="gif1" src="../../assets/img/1.gif" alt=""/></div>
      <div class="titleIcon">
        <img :src="$t('computingPower.img1')" alt=""/>
      </div>
    </div>
    <div class="com">
      <div class="t1">
        <div class="price" v-if="symbol && symbol != 'TRON USDT'">
          {{ symbol }} {{ $t("mine.t72") }}：{{ Balance || 0 }}
          <!-- {{ availableBalance || 0 }} -->
        </div>

        <div class="t2">
          <div
              class="t3"
              @touchstart.stop="isType2 = 1"
              @click="
              isType = 1
              drawer = true
            "
              :class="isType2 == 1 ? 'activeBg' : ''"
          >
            <div>
              <img v-if="icon1" class="icon1" :src="icon1" alt=""/>
              <p>{{ symbol || $t('computingPower.t1') }}</p>
            </div>
            <div>
              <img class="icon2" src="../../assets/new/16.png" alt=""/>
            </div>
          </div>
          <div
              class="ipt"
              @touchstart.stop="isType2 = 2"
              :class="isType2 == 2 ? 'activeBg' : ''"
          >
            <input :placeholder="$t('computingPower.t2')" v-model="number"/>
            <p class="save" @click="getGasPriceFn">
              {{ $t('computingPower.t3') }}
            </p>
          </div>
        </div>
        <div class="price" v-if="symbol2">
          {{ symbol2 }} {{ $t("mine.t73") }}：{{ symbol2Account }} ≈ {{symbol2MinterAmount}}T
        </div>
        <div class="t2">
          <div
              class="t3"
              @touchstart.stop="isType2 = 3"
              :class="isType2 == 3 ? 'activeBg' : ''"
              @click="
              isType = 2
              drawer = true
            "
          >
            <div>
              <img v-if="icon2" class="icon1" :src="icon2" alt=""/>
              {{ symbol2 || $t('computingPower.t1') }}
            </div>
            <div>
              <img class="icon2" src="../../assets/new/16.png" alt=""/>
            </div>
          </div>
          <div
              class="ipt"
              @touchstart.stop="isType2 = 4"
              :class="isType2 == 4 ? 'activeBg' : ''"
          >
            <input :placeholder="$t('computingPower.t5')" v-model="number2"/>
            <p class="save" @click="buyOrder">{{ $t('computingPower.t6') }}</p>
          </div>
        </div>
        <div class="t2">
          <div
              class="ipt"
              style="width: 100%;"
              @touchstart.stop="isType2 = 5"
              :class="isType2 == 5 ? 'activeBg' : ''"
          >
            <input style="width: 100%;" :placeholder="$t('computingPower.t20')" v-model="hash2"/>
            <p class="save" @click="rechargeFn(hash2, 1)">
              {{ $t('computingPower.t0') }}
            </p>
          </div>
        </div>
      </div>
      <div class="t4">
        <div class="t5">
          <div
              v-for="(item, idx) in claimedList"
              :key="idx"
              v-if="idx <= 3"
              :class="'example' + idx"
              @click="topPowerDailyIncomeclaim(item.id)"
          >
            <div>
              <div></div>
            </div>
            <div class="income">
              <p>+{{ item.income ? item.income : 0 }}{{ item.symbol }}</p>
            </div>
            <div class="time">{{ item.processDate }}</div>
          </div>
          <div
              class="claimAll example4"
              @click="claimAll"
              v-if="claimedList.length"
          >
            {{ $t('computingPower.t7') }}
          </div>
        </div>
        <div class="gitIcon">
          <img src="../../assets/new/1.gif" alt=""/>
        </div>
        <div class="t6">
          <div class="t7">
            <div>
              <div>{{ $t('computingPower.t8') }}（BTC）</div>
              <div>{{ orderInfoDetail.claimIncome || 0 }}</div>
            </div>
            <div>
              <div>{{ $t('computingPower.t9') }}（BTC）</div>
              <div>{{ orderInfoDetail.unClaimIncome || 0 }}</div>
            </div>
          </div>
          <!-- <div class="t8">
            <div>未领取产出（BTC）</div>
            <div>{{ orderInfoDetail.unClaimIncome || 0 }}</div>
            <div class="save" @click="claimAll">
              一键领取
            </div> 
          </div> -->
        </div>
      </div>
      <div class="t9">
        <p>{{ $t('computingPower.t10') }}</p>
        <img src="../../assets/new/25.png" alt=""/>
      </div>
      <div class="list" v-if="powergetPageList && powergetPageList.length">
        <div class="t11">
          <p>{{ $t('computingPower.t11') }}</p>
          <p>{{ $t('computingPower.t12') }}</p>
          <p>{{ $t('computingPower.t13') }}</p>
          <p>{{ $t('computingPower.t14') }}(T)</p>
        </div>
        <div class="t11 t12" v-for="(item, idx) in powergetPageList" :key="idx">
          <p>{{ item.orderNo }}</p>
          <p>{{ item.orderDate }}</p>
          <p>{{ item.number }}{{ $t('computingPower.t15') }}</p>
          <p class="num" v-if="item.income">
            {{ (item.income * 1 || 0).toFixed(2) }}
          </p>
        </div>
      </div>
      <div class="mt-2" v-if="!powergetPageList.length">
        <div class="card text-center pd2">
          <div class="card-body">
            <div class="mb-2 mt-2">
              <img class="icon_empty" src="../../assets/new/27.png" alt=""/>
              <p class="noList">{{ $t('computingPower.t16') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigationBar">
      <div @click="goTo('/')">
        <p><img src="../../assets/new/10.png" alt=""/></p>
        <p>{{ $t('tab.market') }}</p>
      </div>
      <div class="active" @click="goTo('/computingPower')">
        <p><img src="../../assets/new/8.png" alt=""/></p>
        <p>{{ $t('tab.computingPower') }}</p>
      </div>
      <div @click="goTo('/manageMoneyMatters')">
        <p><img src="../../assets/new/7.png" alt=""/></p>
        <p>{{ $t('tab.manageMoneyMatters') }}</p>
      </div>
      <div @click="goTo('/BDCF')">
        <p><img src="../../assets/new/9.png" alt=""/></p>
        <p>{{ $t('tab.BTCF') }}</p>
      </div>
      <div @click="goTo('/mine')">
        <p><img src="../../assets/new/11.png" alt=""/></p>
        <p>{{ $t('tab.mine') }}</p>
      </div>
    </div>
    <div class="hig"></div>
    <el-drawer
        :title="$t('BDCF.t11')"
        :visible.sync="drawer"
        :direction="'btt'"
    >
      <div class="list2" v-if="isType == 1">
        <div
            v-for="(item, idx) in chainList"
            :key="idx"
            @click="drawerFn(item)"
        >
          <p><img :src="item.icon" alt=""/></p>
          <p>{{ item.symbol }}</p>
        </div>
      </div>
      <div class="list2" v-if="isType == 2">
        <div
            v-if="item.powerEnabled"
            v-for="(item, idx) in list"
            :key="idx"
            @click="drawerFn(item)"
        >
          <p><img :src="item.icon" alt=""/></p>
          <p>{{ item.symbol }}</p>
        </div>
      </div>
    </el-drawer>
    <div
        class="DialogBasicPay"
        data-bs-toggle="modal"
        data-bs-target="#DialogBasicPay"
    >
      <div class="in"></div>
    </div>
    <div
        class="modal fade dialogbox"
        style="z-index: 100000;"
        id="DialogBasicPay"
        data-bs-backdrop="static"
        tabindex="-1"
        role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ $t('computingPower.t3') }}{{ symbol }}
            </h5>
          </div>
          <div class="modal-body iptList">
            <div class="alts">{{ $t('computingPower.t17') }}</div>
            <p>
              <input
                  disabled
                  type="text"
                  :placeholder="$t('computingPower.t4')"
                  style="font-size: 12px;"
                  v-model="tronObj.erc20Address"
              />
              <span class="save" @click="copySubmit(tronObj.erc20Address)">
                {{ $t('computingPower.t18') }}
              </span>
            </p>
            <div class="alts">{{ $t('computingPower.t19') }}</div>

            <p>
              <input
                  disabled
                  type="text"
                  :placeholder="$t('computingPower.t4')"
                  style="font-size: 12px;"
                  v-model="tronObj.receiveAddress"
              />
              <span class="save" @click="copySubmit(tronObj.receiveAddress)">
                {{ $t('computingPower.t18') }}
              </span>
            </p>
            <div class="alts">Hash：</div>

            <p>
              <input
                  type="text"
                  style="font-size: 12px;"
                  :placeholder="$t('computingPower.t20')"
                  v-model="hashSet"
              />
            </p>
          </div>
          <div class="modal-footer">
            <div class="btn-inline incBtn">
              <a href="#" class="alertBtn" @click="rechargeFn">
                {{ $t('computingPower.t21') }}
              </a>
              <a href="#" class="alertBtnColse" data-bs-dismiss="modal">
                {{ $t('computingPower.t22') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import abi from '@/web3/contract'
import $ from 'jquery'

const TronWeb = require('tronweb')
let timeClean = null
export default {
  data() {
    return {
      isType2: '',
      loading: false,
      amount: '',
      drawer: false,
      chainList: [],
      list: [],
      loading: false,
      loadingText: '交易处理中...',
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      symbol: '',
      symbol2: '',
      symbol2Account: 0.00,
      symbol2MinterAmount:0,
      decimals: '',
      number: '',
      number2: '',
      isType: 1,
      gasPrice: '',
      receiveAddress: '',
      usdtContractAddr: '0x08E89F19749A207Ff6967406B8c63ef20Fb16fE7',
      availableBalance: '',
      detail: '',
      icon1: '',
      icon2: '',
      claimedList: [],
      powergetPageList: [],
      orderInfoDetail: '',
      erc20Address: '',
      tronWallet: '',
      hashSet: '',
      tronObj: {
        erc20Address: '',
      },
      obj: {},
      Balance: '',
      hash2: '',
    }
  },
  components: {},
  mounted() {
    // this.topPowerDailyIncomeclaim(1)
    // this.claimAll()
    this.queryTokensByChainIdTron()
    this.tokengetList()
    this.getUnclaimedList()
    this.powerConfig()
    this.orderInfo()
    this.powergetPage()
    clearInterval(timeClean)

    // this.topUser()
    if (localStorage.getItem('hashArr')) {
      this.apiFn()
    }
    let i = 0
    timeClean = setInterval(() => {
      i++
      if (localStorage.getItem('hashArr')) {
        this.apiFn()
      }

      if (i >= 20) {
        clearInterval(timeClean)
      }
    }, 15000)
  },
  created() {
  },
  destroyed() {
  },
  methods: {
    topUser() {
      this.axios
          .get(this.api.topUser, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.tronWallet = res.data.tronWallet
            }
          })
    },
    powergetPage() {
      this.axios
          .get(this.api.powergetPage, {
            params: {
              pageNum: 1,
              pageSize: 10000,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.powergetPageList = res.data.records
            }
          })
    },
    claimAll() {
      var self = this
      window.ethereum
          .request({
            method: 'personal_sign',
            params: [
              self.objConfig.web3jSign,
              localStorage.getItem('tophis_walletAddress'),
            ],
          })
          .then((signature) => {
            self.axios
                .post(self.api.claimAll, {
                  wallet: localStorage.getItem('tophis_walletAddress') || '-',
                  signMsg: signature,
                  content: self.objConfig.web3jSign,
                })
                .then((res) => {
                  if (res.code == 200) {
                    this.orderInfo()
                    this.getUnclaimedList()

                    $('.modal-body-success').html(this.$t('computingPower.t23'))
                    $('.clickDialogIconedSuccess').click()
                  } else {
                    $('.modal-body-erro').html(this.$t('computingPower.t24'))
                    $('.clickDialogIconedDanger').click()
                  }
                })
                .catch((e) => {
                  $('.modal-body-erro').html(this.$t('computingPower.t24'))

                  $('.clickDialogIconedDanger').click()
                })
          })
    },
    topPowerDailyIncomeclaim(id) {
      var self = this

      window.ethereum
          .request({
            method: 'personal_sign',
            params: [
              self.objConfig.web3jSign,
              localStorage.getItem('tophis_walletAddress'),
            ],
          })
          .then((signature) => {
            self.axios
                .post(self.api.topPowerDailyIncomeclaim + '?id=' + id, {
                  wallet: localStorage.getItem('tophis_walletAddress') || '-',
                  signMsg: signature,
                  content: self.objConfig.web3jSign,
                  id,
                })
                .then((res) => {
                  if (res.code == 200) {
                    this.orderInfo()
                    this.getUnclaimedList()
                    $('.modal-body-success').html(this.$t('computingPower.t23'))

                    $('.clickDialogIconedSuccess').click()
                  } else {
                    $('.modal-body-erro').html(this.$t('computingPower.t24'))

                    $('.clickDialogIconedDanger').click()
                  }
                })
                .catch((e) => {
                  $('.modal-body-erro').html(this.$t('computingPower.t24'))
                  $('.clickDialogIconedDanger').click()
                })
          })
    },
    orderInfo() {
      this.axios
          .get(this.api.orderInfo, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.orderInfoDetail = res.data
            }
          })
    },
    getUnclaimedList() {
      this.axios
          .get(this.api.getUnclaimedList, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.claimedList = res.data
            }
          })
    },
    powerConfig() {
      this.axios
          .get(this.api.powerConfig, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.detail = res.data
            }
          })
    },
    // 获取次方
    async getDecimalsFn() {
      var self = this

      var usdtAbiInitFn = await self.usdtAbiInitFn()
      return await usdtAbiInitFn.methods.decimals().call({})
    },
    drawerFn(item) {
      if (this.isType == 1) {
        this.symbol = item.symbol

        if (item.symbol == 'TRON USDT') {
          this.drawer = false

          $('.DialogBasicPay').click()
          return
        }
        this.erc20Address = item.erc20Address
        this.receiveAddress = item.receiveAddress
        this.decimals = item.decimals
        this.icon1 = item.icon

        this.getAccountsFn()
      }
      if (this.isType == 2) {
        this.symbol2 = item.symbol
        this.receiveAddress = item.receiveAddress
        this.icon2 = item.icon

        this.initsymbol2()
      }
      this.drawer = false
    },
    initsymbol2(){
      this.axios
          .get(this.api.getAccounts, {
            params: {
              symbol: this.symbol2,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.symbol2Account = Number(res.data[0].availableBalance || 0 ).toFixed(2)
            }
          })

      this.axios
          .get(this.api.getEvaluateBuyMinterAmount, {
            params: {
              symbol: this.symbol2,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.symbol2MinterAmount = Number(res.data).toFixed(0)
            }
          })
    },
    // 获取代币金额  暂时没用到
    async getBalanceOfFn() {
      var self = this

      let web3 = new Web3(Web3.givenProvider)
      var accounts = await web3.eth.getAccounts()
      var usdtAbiInitFn = await self.usdtAbiInitFn()

      return await usdtAbiInitFn.methods.balanceOf(accounts[0]).call({})
    },
    async getAccountsFn() {
      let self = this
      this.Balance = 0
      let web3 = new Web3(Web3.givenProvider)
      var accounts = await web3.eth.getAccounts()
      var usdtAbiInitFn = await self.usdtAbiInitFn()
      let Balance = await usdtAbiInitFn.methods.balanceOf(accounts[0]).call({})
      let decimals = await usdtAbiInitFn.methods.decimals().call({}) || 2
      console.log(Balance,decimals,Math.pow(10 ,decimals), '余额')
      this.Balance = (Balance /  Math.pow(10 ,decimals) ).toFixed(decimals)
      console.log(Balance,decimals, '余额')

      // let web3 = new Web3(Web3.givenProvider)

      // web3.eth.getBalance(localStorage.getItem('tophis_walletAddress') , function(error, balance) {
      //     if (error) {
      //         console.error(error);
      //     } else {
      //       this.Balance= web3.utils.fromWei(balance, 'ether')
      //         console.log('Balance:', web3.utils.fromWei(balance, 'ether')); // 转换为以太
      //     }
      // });
      // this.axios
      //   .get(this.api.getAccounts, {
      //     params: {
      //       symbol: this.symbol == 'TRON USDT' ? 'USDT' : this.symbol,
      //     },
      //   })
      //   .then((res) => {
      //     if (res.code == 200) {
      //       res.data.forEach((e) => {
      //         if (e.symbol == this.symbol) {
      //           this.availableBalance = e.availableBalance
      //         }
      //         if (this.symbol == 'TRON USDT') {
      //           this.availableBalance = e.availableBalance
      //         }
      //       })
      //     }
      //   })
    },
    async queryTokensByChainId() {
      var getChainId = -1
      if (Web3.givenProvider) {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
      }
      var self = this
      this.axios
          .get(this.api.queryTokensByChainId, {
            params: {
              walletAddress: localStorage.getItem('tophis_walletAddress') || '-',
              chainId: getChainId,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              if (this.tronObj.erc20Address) {
                res.data.push({
                  chainId: -1,
                  symbol: 'TRON USDT',
                  icon: require('../../assets/new/32.png'),
                })
              }

              this.chainList = res.data
              this.obj = res.data[0]
            }
            this.getAccountsFn()
          })
    },
    async queryTokensByChainIdTron() {
      var self = this
      this.axios
          .get(this.api.queryTokensByChainId, {
            params: {
              walletAddress: localStorage.getItem('tophis_walletAddress') || '-',
              chainId: -1,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              if (res.data && res.data.length) {
                const TronWeb = require('tronweb')
                const tronWeb = new TronWeb({
                  fullHost: 'https://api.trongrid.io',
                })
                if (res.data[0].erc20Address) {
                  res.data[0].erc20Address = tronWeb.address.fromHex(
                      res.data[0].erc20Address,
                  )
                }
                if (res.data[0].receiveAddress) {
                  res.data[0].receiveAddress = tronWeb.address.fromHex(
                      res.data[0].receiveAddress,
                  )
                }

                this.tronObj = res.data[0]
              }
            }
            this.queryTokensByChainId()
          })
    },
    tokengetList() {
      this.axios
          .get(this.api.tokengetList, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.list = res.data
            }
          })
    },
    async rechargeFn(hash, type) {
      var self = this
      var getChainId = -1
      if (Web3.givenProvider && hash && self.symbol != 'TRON USDT') {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
      }
      var tokenSymbol = self.symbol == 'TRON USDT' ? 'USDT' : this.symbol
      var hash = self.symbol == 'TRON USDT' ? self.hashSet : hash
      if (type == 1) {
        tokenSymbol = ''
        if (localStorage.getItem('hashArr')) {
          let hashArr = JSON.parse(localStorage.getItem('hashArr'))
          hashArr.forEach((e) => {
            if (e.hash == hash) {
              tokenSymbol = e.tokenSymbol
              getChainId = e.getChainId
            }
          })
        }
        if (!tokenSymbol) {
          // $('.modal-body-erro').html(self.$t('tab.t4'))
          // $('.clickDialogIconedDanger').click()
          this.forAllFn(hash)
          return
        }
      }
      try {
        self.axios
            .post(self.api.recharge, {
              hash,
              chainId: getChainId,
              tokenSymbol,
            })
            .then((res) => {
              // self.getAccountsFn()
              if (res.code == 200) {
                if (type == 1) {
                  self.removeHashArrFn(self.hash2)
                  $('.modal-body-success').html(self.$t('computingPower.t25'))
                  $('.clickDialogIconedSuccess').click()
                }

                self.symbol = ''
                self.hash = ''
                self.hash2 = ''
                self.number = ''

                self.getAccountsFn()
              } else {
                if (type == 1) {
                  $('.modal-body-erro').html(self.$t('computingPower.t26'))
                  $('.clickDialogIconedDanger').click()
                } else {
                  self.setHashArrFn(hash, tokenSymbol)
                  setTimeout(() => {
                    self.apiFn()
                  }, 10000)
                }

                self.getAccountsFn()
              }
            })
            .catch((e) => {
              if (type == 1) {
                $('.modal-body-erro').html(self.$t('computingPower.t26'))
                $('.clickDialogIconedDanger').click()
              } else {
                setTimeout(() => {
                  self.apiFn()
                }, 10000)
                self.setHashArrFn(hash, tokenSymbol)
              }

              self.getAccountsFn()
            })
      } catch (error) {
        if (type == 1) {
          $('.modal-body-erro').html(self.$t('computingPower.t26'))
          $('.clickDialogIconedDanger').click()
        }
        self.setHashArrFn(hash, tokenSymbol)
        setTimeout(() => {
          self.apiFn()
        }, 10000)
        self.getAccountsFn()
      }
    },
    apiFn() {
      if (localStorage.getItem('hashArr')) {
        let hashArr = JSON.parse(localStorage.getItem('hashArr'))
        hashArr.forEach((e) => {
          if (e.tokenSymbol != 'TRON USDT') {
            this.rechargeFn2(e.hash, e.tokenSymbol, e.getChainId)
          }
        })
      }
    },
    async forAllFn(hash) {
      var getChainId = -1
      if (Web3.givenProvider) {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
      }
      this.chainList.forEach((e) => {
        this.rechargeFn2((hash || this.hash2), e.symbol, getChainId, 1)
      })
    },

    async setHashArrFn(hash, symbol) {
      var getChainId = -1
      if (Web3.givenProvider && hash && self.symbol != 'TRON USDT') {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
      }
      if (symbol == 'TRON USDT') {
        return
      }
      if (localStorage.getItem('hashArr')) {
        let hashArr = JSON.parse(localStorage.getItem('hashArr'))
        hashArr.push({
          tokenSymbol: symbol,
          hash: hash,
          getChainId,
        })
      } else {
        let hashArr = [
          {
            tokenSymbol: symbol,
            hash: hash,
            getChainId,
          },
        ]
        localStorage.setItem('hashArr', JSON.stringify(hashArr))
      }
    },
    removeHashArrFn(hash) {
      if (localStorage.getItem('hashArr')) {
        let hashArr = JSON.parse(localStorage.getItem('hashArr'))
        let index = hashArr.findIndex((item) => item.hash === hash)
        hashArr.splice(index, 1)
        console.log(hashArr)
        if (hashArr && hashArr.length == 0) {
          localStorage.removeItem('hashArr')
        } else {
          localStorage.setItem('hashArr', JSON.stringify(hashArr))
        }
      }
    },
    async rechargeFn2(hash, tokenSymbol, getChainId, type) {
      var self = this

      self.axios
          .post(self.api.recharge, {
            hash,
            chainId: getChainId,
            tokenSymbol,
          })
          .then((res) => {
            if (res.code == 200) {
              this.removeHashArrFn(hash)
              if (type == 1) {
                self.hash2 = ''
                $('.modal-body-success').html(self.$t('computingPower.t25'))
                $('.clickDialogIconedSuccess').click()
              }
            }
          })
    },
    // 初始化 usdt
    usdtAbiInitFn() {
      let web3 = new Web3(Web3.givenProvider)
      console.log(this.erc20Address)
      return new web3.eth.Contract(abi.usdtAbi, this.erc20Address)
    },
    async getGasPriceFn() {
      var self = this
      if (this.number * 1 > this.Balance * 1) {
        $('.modal-body-erro').html(this.$t('tab.balance'))
        $('.clickDialogIconedDanger').click()
        return
      }

      if (this.symbol == 'TRON USDT') {
        $('.DialogBasicPay').click()
        return
      }
      if (!this.symbol) {
        $('.modal-body-erro').html(this.$t('computingPower.t27'))

        $('.clickDialogIconedDanger').click()
        return
      }
      if (!this.number) {
        $('.modal-body-erro').html(this.$t('computingPower.t28'))
        $('.clickDialogIconedDanger').click()
        return
      }

      let web3 = new Web3(Web3.givenProvider)

      web3.eth.getGasPrice().then(function (e) {
        self.gasPrice = e
        console.log(e, '---getGasPrice')
        self.saveSendTransactionFn()
      })
    },
    async saveSendTransactionFn() {
      var self = this

      let web3 = new Web3(Web3.givenProvider)
      var fromAddress = await web3.eth.getAccounts()
      var usdtAbiInitFn = await self.usdtAbiInitFn()

      if (!self.receiveAddress) {
        $('.modal-body-erro').html(this.$t('computingPower.t29'))
        $('.clickDialogIconedDanger').click()
        return
      }
      // console.log(,'次方')
      // console.log(
      //   self.scientificToNumber(self.number * Math.pow(10, self.decimals)),
      //   222,
      // )
      // this.loading = true
      this.loading = true
      usdtAbiInitFn.methods
          .transfer(
              self.receiveAddress,
              self.scientificToNumber(
                  self.number * Math.pow(10, await self.getDecimalsFn()),
              ),
          )
          .send({
            from: fromAddress[0],
            // gasLimit: 2100000,
            gasPrice: self.gasPrice,
          })

          .on('transactionHash', function (hash) {
            console.log(hash, '-----------hash')
            $('.modal-body-success').html(self.$t('computingPower.t25'))
            $('.clickDialogIconedSuccess').click()
            self.rechargeFn(hash)
            self.loading = false
          })
          .on('receipt', function (receipt) {
            console.log(receipt, '-----------receipt')
          })
          .on('confirmation', function (confirmationNumber, receipt) {
            console.log(confirmationNumber, receipt, '-----------confirmation')

            if (confirmationNumber == 0) {
            }
          })
          .on('error', function (error, receipt) {
            console.log(error, receipt, '-----------error')

            self.loading = false

            self.$message({
              type: 'info',
              message: error.message || error.stack,
            })
          })
    },

    buyOrder() {
      var self = this
      if (!this.symbol2) {
        $('.modal-body-erro').html(this.$t('computingPower.t27'))

        $('.clickDialogIconedDanger').click()
        return
      }
      if (!this.number2) {
        $('.modal-body-erro').html(this.$t('computingPower.t31'))
        $('.clickDialogIconedDanger').click()
        return
      }
      self.loading = true

      window.ethereum
          .request({
            method: 'personal_sign',
            params: [
              self.objConfig.web3jSign,
              localStorage.getItem('tophis_walletAddress'),
            ],
          })
          .then((signature) => {
            self.loading = false

            self.axios
                .post(self.api.buyOrder, {
                  wallet: localStorage.getItem('tophis_walletAddress') || '-',
                  signMsg: signature,
                  content: self.objConfig.web3jSign,
                  number: self.number2,
                  symbol: self.symbol2,
                })
                .then((res) => {
                  if (res.code == 200) {
                    self.number2 = ''

                    $('.modal-body-success').html(this.$t('BDCF.t12'))
                    $('.clickDialogIconedSuccess').click()
                  } else {
                    $('.modal-body-erro').html(res.msg || this.$t('BDCF.t13'))
                    $('.clickDialogIconedDanger').click()
                  }
                  this.initsymbol2()
                })
                .catch((e) => {
                  self.loading = false

                  $('.modal-body-erro').html(e.msg || this.$t('BDCF.t13'))
                  $('.clickDialogIconedDanger').click()
                })
          })
    },
  },
}
</script>

<style scoped lang="less">
.computingPower {
  .bg1 {
    margin-top: -30px;

    .gif1 {
      width: 100%;
      position: absolute;
      opacity: 0.5;
    }

    .titleIcon {
      text-align: center;
      position: relative;
      z-index: 10;

      img {
        width: 200px;
        margin: 60px auto 0;
      }
    }
  }

  .com {
    padding: 12px;
    margin-top: 100px;
    position: relative;
    z-index: 1;

    .t1 {
      margin-top: -80px;

      .t2 {
        display: flex;
        margin-bottom: 16px;

        .t3 {
          width: 120px;
          height: 44px;
          background: rgba(36, 38, 39, 0.7);
          border-radius: 12px 12px 12px 12px;
          border: 1px solid rgba(122, 191, 255, 0.6);
          padding: 10px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 8px;

          > div {
            display: flex;
            align-items: center;
          }

          .icon1 {
            width: 24px;
            border-radius: 50%;
            margin-right: 6px;
          }

          .icon2 {
            height: 15px;
          }
        }

        .ipt {
          font-size: 15px;
          display: flex;
          width: 223px;
          height: 44px;
          background: rgba(36, 38, 39, 0.7);
          border-radius: 12px 12px 12px 12px;
          border: 1px solid rgba(122, 191, 255, 0.6);
          padding-left: 12px;
          justify-content: space-between;

          .save {
            min-width: 71px;
            padding: 0 5px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
            border-radius: 12px 12px 12px 12px;
          }

          input[placeholder],
          [placeholder],
          *[placeholder] {
            font-size: 14px;
            width: 130px;
          }
        }

        .activeBg {
          border: 1px solid #0283fa;
          background: #121315;
        }
      }
    }

    .t4 {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      padding-bottom: 12px;
      border: 1px solid rgba(122, 191, 255, 0.66);

      .gitIcon {
        margin: 100px auto 0;
        text-align: center;
        padding-left: 63px;

        img {
          width: 300px;
        }
      }

      .t5 {
        position: relative;

        .time {
          font-weight: 400;
          font-size: 12px;
          color: #ffb600;
          margin-top: 6px;
        }

        .income {
          text-align: center;

          p {
            font-weight: 400;
            font-size: 12px;
            color: #ffb600;
            line-height: 12px;
            text-align: center;
            width: 80px;
            word-wrap: break-word;
          }
        }

        > div {
          text-align: center;
          width: 80px;

          > div {
            > div {
              width: 60px;
              height: 60px;
              border-radius: 0px 0px 0px 0px;
              background: url(../../assets/new/33.png) no-repeat;
              background-size: 100% 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 6px;

              p {
                font-weight: 400;
                font-size: 12px;
                color: #02ff3e;
                line-height: 12px;
                text-align: center;
                word-wrap: break-word;
              }
            }
          }
        }

        .claimAll {
          width: 60px;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          height: 60px;
          border-radius: 0px 0px 0px 0px;
          background: url(../../assets/new/34.png) no-repeat;
          background-size: 100% 100%;
        }

        > div:nth-child(1) {
          position: absolute;
          left: 0px;
          top: 170px;
        }

        > div:nth-child(2) {
          position: absolute;
          left: 50px;
          top: 60px;
        }

        > div:nth-child(3) {
          position: absolute;
          left: 140px;
          top: 20px;
        }

        > div:nth-child(4) {
          position: absolute;
          right: 43px;
          top: 20px;
        }

        > div:nth-child(5) {
          position: absolute;
          right: 13px;
          top: 140px;
        }
      }

      .example0 {
        animation: example0 2s infinite linear;
      }

      .example1 {
        animation: example 2s infinite linear;
      }

      .example2 {
        animation: example0 3s infinite linear;
      }

      .example3 {
        animation: example 3s infinite linear;
      }

      .example4 {
        animation: example0 3s infinite linear;
      }

      @keyframes example {
        0% {
          transform: translateY(0);
        }
        25% {
          transform: translateY(-5px);
        }
        50% {
          transform: translateY(0);
        }
        75% {
          transform: translateY(5px);
        }
        100% {
          transform: translateY(0);
        }
      }
      @keyframes example0 {
        0% {
          transform: translateY(-5px);
        }
        25% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-5px);
        }
      }

      .t6 {
        padding: 12px;

        .t7 {
          display: flex;

          > div {
            width: 50%;
          }

          > div:nth-child(1) {
            > div:nth-child(1) {
              font-weight: 400;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.6);
            }

            > div:nth-child(2) {
              font-weight: bold;
              font-size: 20px;
              color: #ffffff;
              margin-top: 12px;
            }
          }

          > div:nth-child(2) {
            > div:nth-child(1) {
              font-weight: 400;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.6);
            }

            > div:nth-child(2) {
              font-weight: bold;
              font-size: 20px;
              color: #00b42a;
              margin-top: 12px;
            }
          }
        }

        .t8 {
          position: relative;

          > div:nth-child(1) {
            font-weight: 400;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
          }

          > div:nth-child(2) {
            font-weight: bold;
            font-size: 20px;
            color: #00b42a;
            margin-top: 12px;
          }

          .save {
            width: 108px;
            height: 44px;
            background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
            border-radius: 12px 12px 12px 12px;
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            top: 6px;
          }
        }
      }
    }

    .t9 {
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      margin: 34px 0 24px;
      position: relative;

      p {
        position: relative;
        z-index: 1;
      }

      img {
        width: 62px;
        position: absolute;
        left: 0;
        bottom: -1px;
        z-index: 0;
      }
    }

    .list {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid rgba(122, 191, 255, 0.66);
      padding: 0 12px;

      .t11 {
        display: flex;
        padding: 15px 0;
        justify-content: space-between;

        p {
          font-weight: 400;
          font-size: 14px;
          word-wrap: break-word;
          color: #999999;
        }

        > p:nth-child(1) {
          width: 30%;
        }

        > p:nth-child(2) {
          width: 28%;
          text-align: center;
        }

        > p:nth-child(3) {
          width: 20%;
          text-align: center;
        }

        > p:nth-child(4) {
          width: 25%;
          text-align: right;
        }
      }

      .t12 {
        border-top: 1px solid #535860;

        p {
          color: #fff;
        }

        .num {
          color: #02ff3e;
        }
      }
    }
  }
}

.list2 {
  padding: 0 16px;
  max-height: 300px;
  overflow-y: scroll;

  > div {
    background: rgba(0, 198, 255, 0.1);
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    display: flex;
    align-items: center;

    img {
      width: 26px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
}

.price {
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
}

.iptList {
  margin-bottom: 20px !important;
  margin-top: 10px !important;

  > p {
    border-radius: 6px;
    height: 40px;
    position: relative;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 198, 255, 0.3);
    background: rgba(0, 198, 255, 0.1);

    input {
      height: 40px;
      width: 100%;
      padding-left: 10px;
      font-size: 14px;
    }

    .save {
      width: 56px;
      height: 40px;
      background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
      border-radius: 8px 8px 8px 8px;
      font-weight: 500;
      font-size: 14px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      position: absolute;

      right: 0;
    }
  }
}

.alts {
  text-align: left;
  line-height: 2.6;
  font-size: 12px;
}
</style>
