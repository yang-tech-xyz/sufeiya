<template>
  <div
    class="mine"
    @touchstart="
      isType = ''
      isType2 = ''
    "
  >
    <inc_menu />
    <div class="bg1">
      <div><img class="gif1" src="../../assets/img/1.gif" alt="" /></div>
    </div>
    <div class="com">
      <div class="t1">
        <div>{{ $t('mine.t1') }} {{detail2.grade==10?$t('mine.t66'):'VIP'+detail2.grade}}</div>
        <div><img src="../../assets/new/20.png" alt="" /></div>
      </div>
      <div class="links">
        <p>{{ $t('tab.t1') }}</p>
        <a href="https://x.com/Tophis_?s=09" target="_blank">{{ $t('tab.t2') }}</a>
        <a href="https://t.me/tfs00001" target="_blank">{{ $t('tab.t3') }}</a>
      </div>
      <div class="t2">
        <p>{{ $t('mine.t2') }}</p>
        <img src="../../assets/new/25.png" alt="" />
      </div>
      <div class="t3" v-if="ioconList.length">
        <div class="bors">
          <div v-for="(item, idx) in ioconList[ioconIdx]" :key="idx">
            <div>
              <p>{{ item.symbol }}:</p>
              <p>
                <span>{{ item.availableBalance || 0 }}</span>
              </p>
            </div>
            <div
              class="save"
              data-bs-toggle="modal"
              data-bs-target="#DialogBasic7"
              @click="tokenclaim(item.symbol, item.availableBalance)"
            >
              {{ $t('mine.t3') }}
            </div>
          </div>
        </div>
        <div class="t4">
          <img
            @click="ioconIdx <= 0 ? 0 : ioconIdx--"
            :src="
              ioconIdx <= 0
                ? require('../../assets/new/4.png')
                : require('../../assets/new/3.png')
            "
            alt=""
          />
          <p>{{ ioconIdx + 1 }}/{{ ioconList.length }}</p>
          <img
            @click="
              ioconIdx >= ioconList.length - 1
                ? ioconList.length - 1
                : ioconIdx++
            "
            :src="
              ioconIdx >= ioconList.length - 1
                ? require('../../assets/new/1.png')
                : require('../../assets/new/2.png')
            "
            alt=""
          />
        </div>
      </div>
      <div class="mt-2" v-if="!ioconList.length">
        <div class="card text-center pd2">
          <div class="card-body">
            <div class="mb-2 mt-2">
              <img class="icon_empty" src="../../assets/new/27.png" alt="" />
              <p class="noList">{{ $t('computingPower.t16') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="saveAll">
        <div data-bs-toggle="modal" data-bs-target="#DialogBasic">
          {{ $t('mine.t4') }}
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#DialogBasic2"
          class="usdSave"
        >
          USDT {{ $t('mine.t5') }}
        </div>
      </div>
      <div>
        <div>BTC{{ $t('mine.t6') }}</div>
        <div
          class="ipt"
          @touchstart.stop="
            isType = 1
            isType2 = ''
          "
          :class="isType == 1 ? 'activeBg' : ''"
        >
          <input
            :disabled="btcTransferAddress2 ? true : false"
            :placeholder="$t('mine.t7')"
            v-model="btcTransferAddress"
          />

          <p
            class="save"
            v-if="!btcTransferAddress2"
            @click="updateWithdrawBTCAddress"
          >
            {{ $t('mine.t8') }}
          </p>
          <p
            class="save"
            v-if="btcTransferAddress2"
            @click="copySubmit(btcTransferAddress2)"
          >
            {{ $t('mine.t9') }}
          </p>
        </div>
      </div>

      <div style="margin-top: 30px;">
        <div>TRON USDT{{ $t('mine.t6') }}</div>
        <div
          class="ipt"
          @touchstart.stop="
            isType2 = 1
            isType = ''
          "
          :class="isType2 == 1 ? 'activeBg' : ''"
        >
          <input
            :placeholder="$t('mine.t10')"
            v-model="tronUsdtaddress"
            
          />

          <p
            class="save"
           
            @click.stop="updateTRONUSDTAddress"
          >
            {{ $t('mine.t8') }}
          </p>
          <!-- <p
            class="save"
            style="margin-left: 10px"
            v-if="tronUsdtaddress2"
            @click="copySubmit(tronUsdtaddress2)"
          >
            {{ $t('mine.t9') }}
          </p> -->
        </div>
      </div>

      <div class="t2">
        <p>{{ $t('mine.t11') }}</p>
        <img src="../../assets/new/25.png" alt="" />
      </div>
      <div class="bor">
        <div class="line">
          <div>
            <p>{{ $t('mine.t12') }}</p>
            <p>{{ detail2.invitedUserCode }}</p>
          </div>
          <div>
            <p>{{ $t('mine.t13') }}</p>
            <p>
              {{ interceptFn2(shareUrl) }}
              <img
                @click="copySubmit(shareUrl)"
                src="../../assets/new/5.png"
                alt=""
              />
            </p>
          </div>
          <div>
            <p>{{ $t('mine.t14') }}</p>
            <p>{{ inviteInfo.totalInviteUser }} {{ $t('mine.t15') }}</p>
          </div>
          <div>
            <p>{{ $t('mine.t16') }}</p>
            <p>{{ inviteInfo.totalPowerIncome }}BTC</p>
          </div>
        </div>
        <div
          class="list"
          v-if="getPowerInvitePageList && getPowerInvitePageList.length"
        >
          <div class="t11">
            <p>{{ $t('mine.t17') }}</p>
            <p>{{ $t('mine.t18') }}</p>
            <p>{{ $t('mine.t19') }}</p>
            <p>{{ $t('mine.t20') }}</p>
          </div>
          <div
            class="t11 t12"
            v-for="(item, idx) in getPowerInvitePageList"
            :key="idx"
          >
            <p>V{{ item.grade }}</p>
            <p>{{ interceptFn(item.wallet) }}</p>
            <p>{{ item.power }}</p>
            <p>{{ item.createTime }}</p>
          </div>
          <div class="t4">
            <img
              @click="
                pageNum <= 1 ? 1 : pageNum--
                getPowerInvitePage()
              "
              :src="
                pageNum <= 0
                  ? require('../../assets/new/4.png')
                  : require('../../assets/new/3.png')
              "
              alt=""
            />
            <p>{{ pageNum }}/{{ totalPage }}</p>

            <img
              @click="
                pageNum >= totalPage ? totalPage : pageNum++
                getPowerInvitePage()
              "
              :src="
                pageNum >= totalPage
                  ? require('../../assets/new/1.png')
                  : require('../../assets/new/2.png')
              "
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="t2">
        <p>{{ $t('mine.t21') }}</p>
        <img src="../../assets/new/25.png" alt="" />
      </div>
      <div class="bor">
        <div class="line">
          <div>
            <p>{{ $t('mine.t22') }}</p>
            <p>{{ inviteInfo2.totalInviteUser }} {{ $t('mine.t15') }}</p>
          </div>
          <div>
            <p>{{ $t('mine.t23') }}</p>
            <p>{{ inviteInfo2.totalStoreIncome }}U</p>
          </div>
        </div>
        <div
          class="list list011"
          v-if="getStoreInvitePageList && getStoreInvitePageList.length"
        >
          <div class="t11">
            <p>{{ $t('mine.t24') }}</p>
            <p>{{ $t('mine.t25') }}</p>
            <p>{{ $t('mine.t26') }}</p>
          </div>
          <div
            class="t11 t12"
            v-for="(item, idx) in getStoreInvitePageList"
            :key="idx"
          >
            <p>V{{ item.grade }}</p>
            <p>{{ interceptFn(item.wallet) }}</p>
            <p>{{ item.investAmount }}U</p>
          </div>
          <div class="t4">
            <img
              @click="
                pageNum2 <= 1 ? 1 : pageNum2--
                getStoreInvitePage()
              "
              :src="
                pageNum2 <= 0
                  ? require('../../assets/new/4.png')
                  : require('../../assets/new/3.png')
              "
              alt=""
            />
            <p>{{ pageNum2 }}/{{ totalPage2 }}</p>

            <img
              @click="
                pageNum2 >= totalPage2 ? totalPage2 : pageNum2++
                getStoreInvitePage()
              "
              :src="
                pageNum2 >= totalPage2
                  ? require('../../assets/new/1.png')
                  : require('../../assets/new/2.png')
              "
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="t2">
        <p>{{ $t('mine.t27') }}</p>
        <img src="../../assets/new/25.png" alt="" />
      </div>
      <div
        class="bor"
        v-if="topAccountTxgetPageList && topAccountTxgetPageList.length"
      >
        <div class="list list012">
          <div class="t11">
            <p>{{ $t('mine.t28') }}</p>
            <p>{{ $t('mine.t29') }}</p>
            <!-- <p>资金类型</p> -->
            <p>{{ $t('mine.t30') }}</p>
            <p>{{ $t('mine.t31') }}</p>
          </div>
          <div
            class="t11 t12"
            v-for="(item, idx) in topAccountTxgetPageList"
            :key="idx"
          >
            <p>{{ item.symbol }}</p>
            <p>{{ item.amount }}</p>
            <!-- <p>
              {{
                item.balanceType == 'available'
                  ? ' 可用'
                  : item.balanceType == 'frozen'
                  ? ' 冻结'
                  : '限制'
              }}
            </p> -->
            <p>
              <span v-if="item.txType == 'STORE_IN'">{{ $t('mine.t32') }}</span>
              <span v-if="item.txType == 'PURCHASE'">{{ $t('mine.t33') }}</span>
              <span v-if="item.txType == 'INTERNAL_TRANSFER'">
                {{ $t('mine.t34') }}
              </span>
              <span v-if="item.txType == 'EXCHANGE'">{{ $t('mine.t35') }}</span>
              <span v-if="item.txType == 'RECHARGE_IN'">
                {{ $t('mine.t36') }}
              </span>
              <span v-if="item.txType == 'WITHDRAW'">{{ $t('mine.t37') }}</span>
              <span v-if="item.txType == 'WITHDRAW_BTC'">
                {{ $t('mine.t38') }}
              </span>
              <span v-if="item.txType == 'STORE_REDEEM'">
                {{ $t('mine.t39') }}
              </span>
              <span v-if="item.txType == 'STORE_INTEREST'">
                {{ $t('mine.t40') }}
              </span>
              <span v-if="item.txType == 'TRON_RECHARGE_IN'">
                {{ $t('mine.t41') }}
              </span>
              <span v-if="item.txType == 'TRON_WITHDRAW'">
                {{ $t('mine.t42') }}
              </span>

              <span v-if="item.txType == 'STORE_INTEREST_INVITE'">
                {{ $t('mine.t43') }}
              </span>
              <span v-if="item.txType == 'POWER_DAILY_INCOME'">
                {{ $t('mine.t44') }}
              </span>
              <span v-if="item.txType == 'POWER_SHARING_INCOME'">
                {{ $t('mine.t45') }}
              </span>
            </p>
            <p>{{ item.createdDate }}</p>
          </div>
          <div class="t4">
            <img
              @click="
                pageNum3 <= 1 ? 1 : pageNum3--
                topAccountTxgetPage()
              "
              :src="
                pageNum3 <= 0
                  ? require('../../assets/new/4.png')
                  : require('../../assets/new/3.png')
              "
              alt=""
            />
            <p>{{ pageNum3 }}/{{ totalPage3 }}</p>

            <img
              @click="
                pageNum3 >= totalPage3 ? totalPage3 : pageNum3++
                topAccountTxgetPage()
              "
              :src="
                pageNum3 >= totalPage3
                  ? require('../../assets/new/1.png')
                  : require('../../assets/new/2.png')
              "
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mt-2" v-if="!topAccountTxgetPageList.length">
        <div class="card text-center pd2">
          <div class="card-body">
            <div class="mb-2 mt-2">
              <img class="icon_empty" src="../../assets/new/27.png" alt="" />
              <p class="noList">{{ $t('computingPower.t16') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navigationBar">
      <div @click="goTo('/')">
        <p><img src="../../assets/new/10.png" alt="" /></p>
        <p>{{ $t('tab.market') }}</p>
      </div>
      <div @click="goTo('/computingPower')">
        <p><img src="../../assets/new/13.png" alt="" /></p>
        <p>{{ $t('tab.computingPower') }}</p>
      </div>
      <div @click="goTo('/manageMoneyMatters')">
        <p><img src="../../assets/new/7.png" alt="" /></p>
        <p>{{ $t('tab.manageMoneyMatters') }}</p>
      </div>
      <div @click="goTo('/BDCF')">
        <p><img src="../../assets/new/9.png" alt="" /></p>
        <p>{{ $t('tab.BTCF') }}</p>
      </div>
      <div @click="goTo('/mine')" class="active">
        <p><img src="../../assets/new/6.png" alt="" /></p>
        <p>{{ $t('tab.mine') }}</p>
      </div>
    </div>
    <div class="hig"></div>
    <div
      class="modal fade dialogbox"
      id="DialogBasic"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('mine.t4') }}</h5>
          </div>
          <div class="modal-body">{{ $t('mine.t46') }}</div>
          <div class="modal-footer">
            <div class="btn-inline incBtn">
              <a
                href="#"
                class="alertBtn"
                data-bs-dismiss="modal"
                @click="exchangeBTC2USDT"
              >
                {{ $t('mine.t47') }}
              </a>
              <a href="#" class="alertBtnColse" data-bs-dismiss="modal">
                {{ $t('mine.t48') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade dialogbox"
      id="DialogBasic2"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('mine.t49') }}</h5>
          </div>
          <div class="modal-body iptList">
            <p>
              <input
                type="number"
                v-model="amount"
                :placeholder="$t('mine.t50')"
              />
            </p>
            <p>
              <input
                type="text"
                v-model="receiveAddress"
                :placeholder="$t('mine.t51')"
              />
            </p>
          </div>
          <div class="modal-footer">
            <div class="btn-inline incBtn">
              <a href="#" class="alertBtn" @click="getTransfer">
                {{ $t('mine.t52') }}
              </a>
              <a href="#" class="alertBtnColse" data-bs-dismiss="modal">
                {{ $t('mine.t48') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade dialogbox"
      id="DialogBasic7"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('mine.t37') }}</h5>
          </div>
          <div class="modal-body iptList">
            <p>
              <input
                type="number"
                v-model="amount2"
                :placeholder="$t('mine.t53')"
              />
            </p>
          </div>
          <div class="modal-footer">
            <div class="btn-inline incBtn">
              <a href="#" class="alertBtn" @click="tokenclaimFn">
                {{ $t('mine.t54') }}
              </a>
              <a href="#" class="alertBtnColse" data-bs-dismiss="modal">
                {{ $t('mine.t48') }}
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
const TronWeb = require('tronweb')

export default {
  data() {
    return {
      amount: '',
      address: '',
      walletAddress: '',
      invitationLink: 'https://modao.cc',
      detail: '',
      gasPrice: '',
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      usdtContractAddr: '0x08E89F19749A207Ff6967406B8c63ef20Fb16fE7',
      usdtAddress: '0x9367ccc9D544482AcB67Ed1Fa5E32198610E7B43',
      availableBalanceBtc: '',
      availableBalanceUsdt: '',
      getPageList: [],
      powergetPageList: [],
      receiveAddress: '',
      btcTransferAddress: '',
      btcTransferAddress2: '',
      tronUsdtaddress: '',
      tronUsdtaddress2: '',
      isType: '',
      isType2: '',
      ioconList: [],
      ioconIdx: 0,
      detail2: '',
      shareUrl: '',
      invitedCode: '',
      totalAmount: '',
      totalInviteUser: '',
      grade: '',
      inviteInfo: '',
      pageNum: 1,
      total: 0,
      totalPage: 1,
      pageNum2: 1,
      total2: 0,
      totalPage2: 1,
      pageNum3: 1,
      total3: 0,
      totalPage3: 1,
      getPowerInvitePageList: [],
      inviteInfo2: '',
      getStoreInvitePageList: [],
      topAccountTxgetPageList: [],
      symbol2: '',
      amount2: '',
      availableBalance2: '',
    }
  },
  components: {},
  mounted() {
    this.getAccountsFn3()
    this.walletAddress = localStorage.getItem('tophis_walletAddress')
    this.getAccountsFn()
    this.getAccountsFn2()
    this.topStoreOrder()
    this.powergetPage()
    this.topUser()
    this.powerConfig()
    this.getAccountsFn3()
    this.getPowerInviteInfo()
    this.getPowerInvitePage()
    this.getStoreInviteInfo()
    this.getStoreInvitePage()
    this.topAccountTxgetPage()
    //   const TronWeb = require('tronweb')
    //   const tronWeb = new TronWeb({
    //     fullHost: 'https://api.trongrid.io',
    //   })
    //  console.log( tronWeb.address.toHex('TJ28fCeT6utbqvwbXThcvLYvZo9eLwxbzV'))
    //   console.log(tronWeb.address.fromHex('41584ea11badc03ba00cee8990a5f47a6e56184290'))
  },
  methods: {
    async tokenclaim(symbol, availableBalance) {
      var self = this
      this.symbol2 = symbol
      this.availableBalance2 = availableBalance
    },
    async tokenclaimFn() {
      var self = this
      if (this.amount2 * 1 > this.availableBalance2 * 1) {
        $('.modal-body-erro').html(this.$t('mine.t55'))
        $('.clickDialogIconedDanger').click()
        return
      }
      var getChainId = -1
      if (Web3.givenProvider && this.symbol2 != 'TRON USDT') {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
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
          const TronWeb = require('tronweb')
          const tronWeb = new TronWeb({
            fullHost: 'https://api.trongrid.io',
          })
          self.axios
            .post(self.api.tokenclaim, {
              wallet: localStorage.getItem('tophis_walletAddress') || '-',
              signMsg: signature,
              content: self.objConfig.web3jSign,
              amount: self.amount2,
              symbol: self.symbol2 == 'TRON USDT' ? 'USDT' : self.symbol2,
              chainId: getChainId,
            })
            .then((res) => {
              self.getAccountsFn3()
              if (res.code == 200) {
                self.amount2 = ''
                $('.modal-body-success').html(this.$t('mine.t56'))
                $('.clickDialogIconedSuccess').click()
              } else {
                $('.modal-body-erro').html(res.msg || this.$t('mine.t57'))
                $('.clickDialogIconedDanger').click()
              }
            })
            .catch((e) => {
              $('.modal-body-erro').html(e.msg || this.$t('mine.t57'))
              $('.clickDialogIconedDanger').click()
            })
        })
    },

    getPowerInvitePage() {
      this.axios
        .get(this.api.getPowerInvitePage, {
          params: {
            pageNum: this.pageNum,
            pageSize: 10,
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.getPowerInvitePageList = res.data.list
            this.total = res.data.total
            this.totalPage = res.data.totalPage
          }
        })
    },
    getStoreInvitePage() {
      this.axios
        .get(this.api.getStoreInvitePage, {
          params: {
            pageNum: this.pageNum2,
            pageSize: 10,
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.getStoreInvitePageList = res.data.list
            this.total2 = res.data.total
            this.totalPage2 = res.data.totalPage
          }
        })
    },
    topAccountTxgetPage() {
      this.axios
        .get(this.api.topAccountTxgetPage, {
          params: {
            pageNum: this.pageNum3,
            pageSize: 10,
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.topAccountTxgetPageList = res.data.list
            this.total3 = res.data.total
            this.totalPage3 = res.data.totalPage
          }
        })
    },

    getPowerInviteInfo() {
      this.axios
        .get(this.api.getPowerInviteInfo, {
          params: {},
        })
        .then((res) => {
          if (res.code == 200) {
            this.inviteInfo = res.data
          }
        })
    },
    getStoreInviteInfo() {
      this.axios
        .get(this.api.getStoreInviteInfo, {
          params: {},
        })
        .then((res) => {
          if (res.code == 200) {
            this.inviteInfo2 = res.data
          }
        })
    },
    topUser() {
      this.axios
        .get(this.api.topUser, {
          params: {},
        })
        .then((res) => {
          if (res.code == 200) {
            const TronWeb = require('tronweb')
            const tronWeb = new TronWeb({
              fullHost: 'https://api.trongrid.io',
            })
            this.detail2 = res.data
            this.btcTransferAddress = res.data.btcTransferAddress
            this.btcTransferAddress2 = res.data.btcTransferAddress
            if (res.data.tronWallet) {
              this.tronUsdtaddress = tronWeb.address.fromHex(
                res.data.tronWallet,
              )
              this.tronUsdtaddress2 = tronWeb.address.fromHex(
                res.data.tronWallet,
              )
            }

            this.shareUrl =
              window.location.origin + '/#/?invitedCode=' + res.data.invitedCode

            this.totalAmount = res.data.totalAmount
            this.totalInviteUser = res.data.totalInviteUser
            this.grade = res.data.grade || 1
          }
        })
    },
    getAccountsFn3() {
      this.axios
        .get(this.api.getAccounts, {
          params: {},
        })
        .then((res) => {
          if (res.code == 200) {
            res.data.forEach((e) => {
              if (e.symbol == 'USDT') {
                res.data.push({
                  chainId: -1,
                  symbol: 'TRON USDT',
                  icon: require('../../assets/new/32.png'),
                  availableBalance: e.availableBalance,
                })
              }
            })

            let chunkSize = 3
            this.ioconList = []
            for (let i = 0; i < res.data.length; i += chunkSize) {
              let chunk = res.data.slice(i, i + chunkSize)
              this.ioconList.push(chunk)
            }
            console.log(this.ioconList)
          }
        })
    },
    async updateWithdrawBTCAddress() {
      var self = this
      if (!this.btcTransferAddress) {
        $('.modal-body-erro').html(this.$t('mine.t59'))
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
            .post(self.api.updateWithdrawBTCAddress, {
              wallet: localStorage.getItem('tophis_walletAddress') || '-',
              signMsg: signature,
              content: self.objConfig.web3jSign,
              btcTransferAddress: self.btcTransferAddress,
            })
            .then((res) => {
              if (res.code == 200) {
                self.topUser()
                $('.alertBtnColse').click()
                $('.modal-body-success').html(this.$t('mine.t60'))
                $('.clickDialogIconedSuccess').click()
              } else {
                $('.modal-body-erro').html(res.msg || this.$t('mine.t61'))
                $('.clickDialogIconedDanger').click()
              }
            })
            .catch((e) => {
              $('.modal-body-erro').html(e.msg || this.$t('mine.t61'))
              $('.clickDialogIconedDanger').click()
            })
        })
    },
    async updateTRONUSDTAddress() {
      var self = this
      if (!this.tronUsdtaddress) {
        $('.modal-body-erro').html(this.$t('mine.t62'))
        $('.clickDialogIconedDanger').click()
        return
      }
      const TronWeb = require('tronweb')
      const tronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io',
      })

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
            .post(self.api.updateTRONUSDTAddress, {
              wallet: localStorage.getItem('tophis_walletAddress') || '-',
              signMsg: signature,
              content: self.objConfig.web3jSign,
              tronUsdtaddress: tronWeb.address.toHex(self.tronUsdtaddress),
            })
            .then((res) => {
              if (res.code == 200) {
                self.topUser()
                $('.alertBtnColse').click()
                $('.modal-body-success').html(this.$t('mine.t60'))

                $('.clickDialogIconedSuccess').click()
              } else {
                $('.modal-body-erro').html(res.msg || this.$t('mine.t61'))
                $('.clickDialogIconedDanger').click()
              }
            })
            .catch((e) => {
              $('.modal-body-erro').html(e.msg || this.$t('mine.t61'))
              $('.clickDialogIconedDanger').click()
            })
        })
    },
    async exchangeBTC2USDT() {
      var self = this
      var getChainId = -1
      if (Web3.givenProvider) {
        let web3 = new Web3(Web3.givenProvider)
        getChainId = await web3.eth.getChainId()
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
            .post(self.api.exchangeBTC2USDT, {
              wallet: localStorage.getItem('tophis_walletAddress') || '-',
              signMsg: signature,
              content: self.objConfig.web3jSign,
              chainId: getChainId,
              amount: self.availableBalanceBtc,
            })
            .then((res) => {
              self.getAccountsFn3()
              if (res.code == 200) {
                $('.modal-body-success').html(this.$t('BDCF.t12'))
                $('.clickDialogIconedSuccess').click()
              } else {
                $('.modal-body-erro').html(res.msg || this.$t('BDCF.t13'))
                $('.clickDialogIconedDanger').click()
              }
            })
            .catch((e) => {
              $('.modal-body-erro').html(e.msg || this.$t('BDCF.t13'))
              $('.clickDialogIconedDanger').click()
            })
        })
    },
    topStoreOrder() {
      this.axios
        .get(this.api.topStoreOrder, {
          params: {
            pageNum: 1,
            pageSize: 10000,
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.getPageList = res.data.list
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

    getAccountsFn() {
      this.axios
        .get(this.api.getAccounts, {
          params: {
            symbol: 'BTC',
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.availableBalanceBtc = res.data[0].availableBalance
          }
        })
    },

    getAccountsFn2() {
      this.axios
        .get(this.api.getAccounts, {
          params: {
            symbol: 'USDT',
          },
        })
        .then((res) => {
          if (res.code == 200) {
            this.availableBalanceUsdt = res.data[0].availableBalance
          }
        })
    },

    // 初始化 usdt
    usdtAbiInitFn() {
      let web3 = new Web3(Web3.givenProvider)
      return new web3.eth.Contract(abi.usdtAbi, this.usdtContractAddr)
    },
    //ETH转账
    async getTransfer() {
      var self = this
      if (!this.receiveAddress) {
        $('.modal-body-erro').html(this.$t('mine.t51'))
        $('.clickDialogIconedDanger').click()
        return
      }
      if (!this.amount) {
        $('.modal-body-erro').html(this.$t('mine.t50'))
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
            .post(self.api.internalTransfer, {
              wallet: localStorage.getItem('tophis_walletAddress') || '-',
              signMsg: signature,
              content: self.objConfig.web3jSign,
              amount: self.amount,
              receiveAddress: self.receiveAddress,
              symbol: 'USDT',
            })
            .then((res) => {
              if (res.code == 200) {
                self.amount = ''
                self.receiveAddress = ''
                self.getAccountsFn3()
                $('.alertBtnColse').click()
                $('.modal-body-success').html(this.$t('mine.t64'))
                $('.clickDialogIconedSuccess').click()
              } else {
                $('.modal-body-erro').html(res.msg || this.$t('mine.t65'))
                $('.clickDialogIconedDanger').click()
              }
            })
            .catch((e) => {
              $('.modal-body-erro').html(e.msg || this.$t('mine.t65'))
              $('.clickDialogIconedDanger').click()
            })
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
    //  暂时没用到
    async getGasPriceFn(value) {
      var self = this

      let web3 = new Web3(Web3.givenProvider)

      web3.eth.getGasPrice().then(function (e) {
        self.gasPrice = e
        console.log(e)
        self.saveSendTransactionFn(value)
      })
    },
    async saveSendTransactionFn(value) {
      var self = this

      let web3 = new Web3(Web3.givenProvider)
      var fromAddress = await web3.eth.getAccounts()
      var usdtAbiInitFn = await self.usdtAbiInitFn()
      console.log(fromAddress)
      console.log(usdtAbiInitFn)
      usdtAbiInitFn.methods
        .transfer(
          self.usdtAddress,
          self.scientificToNumber(value * Math.pow(10, 18)),
        )
        .send({
          from: fromAddress[0],
          gasLimit: 210000,
          gasPrice: self.gasPrice,
        })

        .on('transactionHash', function (hash) {
          console.log(hash, '-----------hash')
          self.loading = true
          self.txHash = hash
          self.loadingText =
            window.vm.$t('pay.transaction_is_being_confirmed') + '...'
        })
        .on('receipt', function (receipt) {
          console.log(receipt, '-----------receipt')
        })
        .on('confirmation', function (confirmationNumber, receipt) {
          console.log(confirmationNumber, receipt, '-----------confirmation')

          if (confirmationNumber == 0) {
            self.loading = false
            self.loadingText = ''
            $('.copyHash').click()
          }
        })
        .on('error', function (error, receipt) {
          console.log(error, receipt, '-----------error')

          self.loading = false
          self.loadingText = ''

          self.$message({
            type: 'info',
            message: error.message || error.stack,
          })
        })
    },

    personal_signFn() {
      let self = this
      window.ethereum
        .request({
          method: 'personal_sign',
          params: [
            self.objConfig.web3jSign,
            localStorage.getItem('tophis_walletAddress'),
          ],
        })
        .then((signature) => {
          console.log(signature)
        })
        .catch((e) => {})
    },
  },
}
</script>

<style scoped lang="less">
.links {
  display: flex;
  margin-top: 20px;
  background: rgba(36, 38, 39, 0.7);
    border-radius: 12px 12px 12px 12px;
    border: 1px solid rgba(122, 191, 255, 0.66);
    align-items: center;
    padding: 0 12px;

    height: 56px;

  p,
  a {
    color: #fff;
    font-size: 15px;
    width:33.3%

    
  }
  a{
    color: #2ae1ff;
    display: block;
  }
}
.com {
  padding: 12px;
  position: relative;
  z-index: 10;
  .t1 {
    height: 56px;
    background: rgba(36, 38, 39, 0.7);
    border-radius: 12px 12px 12px 12px;
    border: 1px solid rgba(122, 191, 255, 0.66);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    div {
      font-weight: 600;
      font-size: 15px;
      color: #0283fa;
      line-height: 18px;
    }
    img {
      height: 100%;
      height: 50px;
    }
  }
  .t2 {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 33px 0 20px;
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
  .t3 {
    height: 228px;
    background: rgba(36, 38, 39, 0.7);
    border-radius: 12px 12px 12px 12px;
    border: 1px solid #5b89b3;
    padding: 15px 12px;
    overflow-y: scroll;
    .bors {
      height: 147px;
    }
    > div {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
        p {
          font-weight: 500;
          font-size: 12px;
          color: #ffffff;
        }
        span {
          font-weight: bold;
          font-size: 15px;
          color: #ffffff;
          margin-top: 8px;
          display: block;
          width: 200px;
          word-wrap: break-word;
        }
        .save {
          min-width: 56px;
          height: 28px;
          background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
          border-radius: 8px 8px 8px 8px;
          font-weight: 500;
          font-size: 14px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .t4 {
      width: 120px;
      margin: 24px auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 14px;
        letter-spacing: 4px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .saveAll {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    > div {
      width: 164px;
      height: 44px;
      border: 1px solid rgba(13, 110, 253, 1);
      border-radius: 12px;
      text-align: center;
      line-height: 44px;
    }
    .usdSave {
      background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
      box-shadow: 0px 3px 16px 0px rgba(42, 224, 255, 0.42);
      border-radius: 8px 8px 8px 8px;
    }
  }
  .ipt {
    font-size: 15px;
    display: flex;
    height: 44px;
    background: rgba(36, 38, 39, 0.7);
    border-radius: 12px 12px 12px 12px;
    border: 1px solid rgba(122, 191, 255, 0.6);
    padding-left: 12px;
    justify-content: space-between;
    margin-top: 12px;

    .save {
      min-width: 71px;
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
      font-size: 12px;
      width: 100%;
    }
  }
  .activeBg {
    border: 1px solid #0283fa;
    background: #121315;
  }
  .bor {
    border-radius: 12px 12px 12px 12px;
    border: 1px solid #5b89b3;
    padding: 12px;
  }
  .line {
    > div {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #535860;
      align-items: center;
      img {
        width: 20px;
        margin-left: 8px;
      }
      padding: 14px 0;
      > p:nth-child(1) {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
      > p:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;

        color: #ffffff;
      }
    }
  }
  .list {
    .t11 {
      display: flex;
      padding: 25px 0;
      justify-content: space-between;
      border-bottom: 1px solid #535860;

      p {
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        width: 30%;
        word-wrap: break-word;
      }
      > p:nth-child(1) {
        width: 12%;
      }
      > p:nth-child(2) {
        text-align: center;
        width: 34%;
      }
      > p:nth-child(3) {
        text-align: center;
        width: 26%;
      }
      > p:nth-child(4) {
        text-align: right;
        width: 28%;
      }
    }
    .t12 {
      border-bottom: 1px solid #535860;
      padding: 15px 0;

      p {
        color: #fff;
      }
    }
    .t4 {
      width: 120px;
      margin: 20px auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 14px;
        letter-spacing: 4px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
    .list011 {
      p:nth-child(3) {
        text-align: right;
      }
    }
  }
}
.list012 {
  p:nth-child(1) {
    width: 22% !important;
  }
  p:nth-child(2) {
    width: 30% !important;
  }
  p:nth-child(3) {
    width: 30% !important;
  }
  p:nth-child(4) {
    text-align: right;

    width: 25% !important;
  }
}
.iptList {
  margin-bottom: 20px !important;
  margin-top: 10px !important;
  > p {
    border-radius: 6px;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 198, 255, 0.3);
    background: rgba(0, 198, 255, 0.1);
    input {
      height: 40px;
      width: 100%;
      padding-left: 10px;
      font-size: 14px;
    }
  }
}
.bg1 {
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
</style>
