<template>
  <div class="manageMoneyMatters" @touchstart="isType = ''">
    <inc_menu/>
    <div class="bg1">
      <div><img class="gif1" src="../../assets/img/1.gif" alt=""/></div>
      <div class="titleIcon"><img :src="$t('manageMoneyMatters.img1')" alt=""/></div>
      <div class="t3-rename">{{ $t('mine.t67') }}</div>
    </div>
    <div class="t1">
      <div class="t2">
        <div
            class="t3"
            @touchstart.stop="isType = 1"
            @click="drawer = true"
            :class="isType == 1 ? 'activeBg' : ''"
        >
          <div>
            <img :src="icon1" alt=""/>
            {{ symbol || $t('computingPower.t1') }}
          </div>
          <div>
            <img class="navDown" src="../../assets/new/16.png" alt=""/>
          </div>
        </div>
        <div
            class="t3 re"
            @touchstart.stop="isType = 2"
            :class="isType == 2 ? 'activeBg' : ''"
            v-model="amount"
        >
          <input type="number" :placeholder="$t('BDCF.t5')" v-model="amount"/>
        </div>

        <div
            class="t3"
            @touchstart.stop="isType = 3"
            @click="drawer2 = true"
            :class="isType == 3 ? 'activeBg' : ''"
        >
          <div>
            {{ obj.name || $t('manageMoneyMatters.t1') }}
          </div>
          <div>
            <img class="navDown" src="../../assets/new/16.png" alt=""/>
          </div>
        </div>
        <div class="t4">
          <p class="t5">{{ $t('manageMoneyMatters.t2') }}</p>
          <p>{{ obj.displayRate || '-' }}</p>
          <p @click="topStoreOrderorder">{{ $t('manageMoneyMatters.t3') }}</p>
        </div>
      </div>
      <div class="t6">
        <div class="t7">
          <img class="gifIcon2" src="../../assets/new/2.gif" alt=""/>
        </div>
        <div class="t8">
          <div>
            <p>{{ $t('manageMoneyMatters.t4') }}（USDT）</p>
            <p class="num1">
              {{ roundingFn(orderInfo.investAmount, 12) }}
            </p>
          </div>
          <div>
            <p>{{ $t('manageMoneyMatters.t5') }}（USDT）</p>
            <p class="num2">{{ roundingFn(orderInfo.interest, 12) }}</p>
          </div>
        </div>
      </div>
      <div class="t9">
        <p>{{ $t('manageMoneyMatters.t6') }}</p>
        <img src="../../assets/new/25.png" alt=""/>
      </div>
      <div class="list" v-if="topStoreOrdergetPageList.length">
        <div class="t11">
          <p>{{ $t('manageMoneyMatters.t7') }}</p>
          <p>{{ $t('manageMoneyMatters.t8') }}</p>
          <p>{{ $t('manageMoneyMatters.t9') }}</p>
          <p>{{ $t('manageMoneyMatters.t10') }}</p>
        </div>
        <div
            class="t11 t12"
            v-for="(item, idx) in topStoreOrdergetPageList"
            :key="idx"
        >
          <p>{{ item.symbol }}</p>
          <p>{{ item.amount }}</p>
          <p>{{ item.orderDate }}</p>
          <p class="num" v-if="item.status != 2">
            {{
              item.status == 1
                  ? $t('manageMoneyMatters.t11')
                  : $t('manageMoneyMatters.t12')
            }}
          </p>
          <p class="num" v-if="item.status == 2">
            <span
                @click="topStoreOrdercpOrder(item.orderNo)"
                class="topStoreOrdercpOrderBtn"
            >
              {{ $t('manageMoneyMatters.t13') }}
            </span>
          </p>
        </div>
      </div>
      <div class="mt-2" v-if="!topStoreOrdergetPageList.length">
        <div class="card text-center pd2">
          <div class="card-body">
            <div class="mb-2 mt-2">
              <img class="icon_empty" src="../../assets/new/27.png" alt=""/>
              <p class="noList">
                {{ $t('computingPower.t16') }}
              </p>
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
      <div @click="goTo('/computingPower')">
        <p><img src="../../assets/new/13.png" alt=""/></p>
        <p>{{ $t('tab.computingPower') }}</p>
      </div>
      <div @click="goTo('/manageMoneyMatters')" class="active">
        <p><img src="../../assets/new/12.png" alt=""/></p>
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
      <div class="list2">
        <div
            v-for="(item, idx) in chainList"
            :key="idx"
            @click="drawerFn(item)"
            v-if="item.storeEnabled"
        >
          <p><img :src="item.icon" alt=""/></p>
          <p>{{ item.symbol }}</p>
          <p class="balance">
            {{
              $t('manageMoneyMatters.t14')
            }}{{ roundingFn(item.balance, 4) || 0 }}
          </p>
        </div>
      </div>
    </el-drawer>
    <el-drawer
        :title="$t('manageMoneyMatters.t15')"
        :visible.sync="drawer2"
        :direction="'btt'"
    >
      <div class="list2">
        <div
            v-for="(item, idx) in getList"
            :key="idx"
            @click="getListTabFn(item)"
        >
          <p><img src="../../assets/image/4.png" alt=""/></p>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  data() {
    return {
      drawer: false,
      drawer2: false,
      chainList: [],
      getList: [],
      receiveAddress: '',
      icon1: '',
      symbol: '',
      symbol2: '',
      decimals: '',
      obj: {},
      amount: '',
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      isType: '',
      topStoreOrdergetPageList: [],
      orderInfo: {},
      getAccountsList: [],
    }
  },
  components: {},
  mounted() {
    this.getAccountsFn()

    this.getListFn()
    this.topStoreOrdergetPage()
    this.topStoreOrderOrderInfo()
  },
  created() {
  },
  methods: {
    async getAccountsFn() {
      let data = await this.axios.get(this.api.getAccounts, {
        params: {},
      })
      this.getAccountsList = data.data
      this.tokengetList()
    },
    topStoreOrderOrderInfo() {
      this.axios
          .get(this.api.topStoreOrderOrderInfo, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.orderInfo = res.data
            }
          })
    },
    topStoreOrdergetPage() {
      this.axios
          .get(this.api.topStoreOrdergetPage, {
            params: {
              pageNum: 1,
              pageSize: 100000,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.topStoreOrdergetPageList = res.data.list
            }
          })
    },
    drawerFn(item) {
      this.symbol = item.symbol
      this.icon1 = item.icon
      this.receiveAddress = item.receiveAddress
      this.decimals = item.decimals
      this.obj = {}
      this.drawer = false
    },
    getListTabFn(item) {
      this.obj = item
      this.drawer2 = false
    },
    async tokengetList() {
      var self = this
      this.axios
          .get(this.api.tokengetList, {
            params: {},
          })
          .then((res) => {
            if (res.code == 200) {
              this.chainList = res.data
              res.data.forEach(async (e) => {
                this.getAccountsList.forEach((e2) => {
                  if (e.symbol == e2.symbol) {
                    e['balance'] = e2.availableBalance
                  }
                })
              })
            }
          })
    },
    async getListFn() {
      var getChainId = -1
      if (Web3.givenProvider) {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
      }
      var self = this
      this.axios
          .get(this.api.getList, {
            params: {
              walletAddress: localStorage.getItem('tophis_walletAddress') || '-',
              chainId: getChainId,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.getList = res.data
            }
          })
    },
    topStoreOrderorder() {
      var self = this
      if (!this.obj.id) {
        $('.modal-body-erro').html(this.$t('manageMoneyMatters.t16'))
        $('.clickDialogIconedDanger').click()
        return
      }
      if (!this.amount) {
        $('.modal-body-erro').html(this.$t('manageMoneyMatters.t17'))
        $('.clickDialogIconedDanger').click()
        return
      }
      if (this.amount < this.obj.limitMinAmount) {
        $('.modal-body-erro').html(
            this.$t('manageMoneyMatters.t18') + this.obj.limitMinAmount,
        )
        $('.clickDialogIconedDanger').click()
        return
      }
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
                .post(self.api.topStoreOrderorder, {
                  storeId: self.obj.id,
                  amount: self.amount,
                  wallet: localStorage.getItem('tophis_walletAddress') || '-',
                  signMsg: signature,
                  content: self.objConfig.web3jSign,
                  symbol: self.symbol,
                })
                .then((res) => {
                  if (res.code == 200) {
                    self.amount = ''
                    self.symbol = ''
                    self.getAccountsFn()
                    self.getListFn()
                    self.topStoreOrdergetPage()
                    self.topStoreOrderOrderInfo()
                    self.obj = {}
                    $('.modal-body-success').html(this.$t('manageMoneyMatters.t19'))
                    $('.clickDialogIconedSuccess').click()
                  } else {
                    $('.modal-body-erro').html(
                        res.msg || this.$t('manageMoneyMatters.t20'),
                    )
                    $('.clickDialogIconedDanger').click()
                  }
                })
                .catch((e) => {
                  $('.modal-body-erro').html(
                      e.msg || this.$t('manageMoneyMatters.t20'),
                  )
                  $('.clickDialogIconedDanger').click()
                })
          })
    },
    topStoreOrdercpOrder(orderNo) {
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
                .post(self.api.topStoreOrdercpOrder, {
                  orderNo: orderNo,
                  wallet: localStorage.getItem('tophis_walletAddress') || '-',
                  signMsg: signature,
                  content: self.objConfig.web3jSign,
                })
                .then((res) => {
                  if (res.code == 200) {
                    self.getAccountsFn()
                    self.getListFn()
                    self.topStoreOrdergetPage()
                    self.topStoreOrderOrderInfo()
                    $('.modal-body-success').html(this.$t('computingPower.t25'))
                    $('.clickDialogIconedSuccess').click()
                  } else {
                    $('.modal-body-erro').html(res.msg || 'failed')
                    $('.clickDialogIconedDanger').click()
                  }
                })
                .catch((e) => {
                  $('.modal-body-erro').html(e.msg || 'failed')
                  $('.clickDialogIconedDanger').click()
                })
          })
    },
  },
}
</script>

<style scoped lang="less">
.manageMoneyMatters {
  padding-bottom: 40px;

  .t3-rename{
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(89deg, #00ffff, #00ffff, #5994eb);
    -webkit-background-clip: text;
    color: transparent;
    margin: 0 30px;
    line-height: 35px;
    margin-top: 25px;
  }

  .bg1 {
    margin-top: -30px;

    .gif1 {
      width: 100%;
      position: absolute;
      opacity: 0.5;
      right: -40%;
      top: -20%;
    }

    .titleIcon {
      text-align: center;
      position: relative;
      z-index: 10;

      img {
        width: 300px;
        margin: 60px auto 0;
      }
    }
  }

  .t1 {
    padding: 6px 12px;
    margin-top: 20px;
    position: relative;
    z-index: 2;

    .t2 {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid #5b89b3;
      padding: 24px 12px;




      .t3 {
        height: 44px;
        border-radius: 12px 12px 12px 12px;
        background: #2e3841;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        border: 1px solid #2e3841;

        margin-bottom: 16px;
        justify-content: space-between;

        div {
          font-size: 15px;
        }

        input[placeholder],
        [placeholder],
        *[placeholder] {
          font-size: 15px;
        }

        img {
          width: 24px;
          margin-right: 4px;
          border-radius: 50%;
        }

        .navDown {
          width: 15px;
        }
      }
      .re{
        margin-bottom: 2px;
      }
      .activeBg {
        background: #101010;
        border: 1px solid #0283fa;
      }
    }

    .t4 {
      > p:nth-child(1) {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }

      > p:nth-child(2) {
        font-weight: bold;
        font-size: 40px;
        color: #00b42a;
        padding: 22px 0 30px;
        text-align: center;
      }

      > p:nth-child(3) {
        width: 220px;
        height: 44px;
        background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        border-radius: 12px 12px 12px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
    }

    .t6 {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid rgba(122, 191, 255, 0.66);
      padding: 24px 12px 30px;
      margin-top: 23px;

      .t7 {
        text-align: center;

        .gifIcon2 {
          width: 241px;
          margin: 0 auto;
        }
      }

      .t8 {
        display: flex;
        margin-top: 40px;

        > div {
          width: 50%;
          padding-left: 10px;
          padding-right: 20px;

          > p:nth-child(1) {
            font-weight: 400;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 10px;
          }

          .num1 {
            font-weight: 500;
            font-size: 15px;
            color: #ffffff;
          }

          .num2 {
            font-weight: 500;
            font-size: 15px;
            color: #00b42a;
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
          color: #999999;
          width: 20%;
        }

        > p:nth-child(1) {
          width: 15%;
        }

        > p:nth-child(2) {
          text-align: center;
          width: 30%;
        }

        > p:nth-child(3) {
          text-align: center;
          width: 30%;
        }

        > p:nth-child(4) {
          text-align: right;
        }
      }

      .t12 {
        border-top: 1px solid #535860;
        display: flex;
        align-items: center;

        p {
          color: #fff;
        }

        .num {
          color: #02ff3e;
        }

        .topStoreOrdercpOrderBtn {
          min-width: 44px;
          height: 24px;
          line-height: 26px;
          text-align: center;
          background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
          font-weight: 500;
          color: #ffffff;
          border-radius: 8px;
          display: inline-block;
          font-size: 12px;
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
    position: relative;

    .balance {
      position: absolute;
      right: 20px;
      font-size: 14px;
      color: #fff;
      opacity: 0.8;
    }

    img {
      width: 26px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
}
</style>
