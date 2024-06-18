<template>
  <div class="BDCF">
    <inc_menu />
    <div class="bg1">
      <div><img class="gif1" src="../../assets/img/1.gif" alt="" /></div>
    </div>
    <div class="com">
      <div class="t1">
        <div class="t02">
          <p>{{$t('BDCF.t1') }}</p>
          <p>{{$t('BDCF.t2') }}</p>
          <p>{{$t('BDCF.t3') }}</p>
          <p></p>
        </div>
        <div>
          <img src="../../assets/new/26.png" alt="" />
        </div>
      </div>
      <div class="t2">
        <div
          class="t3"
          @touchstart.stop="isType = 1"
          @click="drawer = true"
          :class="isType == 1 ? 'activeBg' : ''"
        >
          <div>
            <img v-if="type == 1" src="../../assets/new/28.png" alt="" />
            <img v-else src="../../assets/new/29.png" alt="" />

            {{ type == 1 ? 'USDT' : 'BTC' }}
          </div>
          <div>
            <img class="navDown" src="../../assets/new/16.png" alt="" />
          </div>
        </div>
        <p class="t9">{{$t('BDCF.t4') }}{{ btcfDetail.symbol }}</p>
        <div
          class="t3"
          @touchstart.stop="isType = 2"
          :class="isType == 2 ? 'activeBg' : ''"
        >
          <input type="number" :placeholder="$t('BDCF.t5')" v-model="amount" />
        </div>
        <p class="t10" v-if="type == 1">
         
          {{( usdtDetail.price * (amount || 1) ).toFixed(2)|| 0 }} USDT =
          {{ ((usdtDetail.price / btcfDetail.price) * (amount || 1)).toFixed(2) || 0 }}
          {{ btcfDetail.symbol }}
        </p>
        <p class="t10" v-if="type == 2">
          {{ (btcDetail.price * (amount || 1)).toFixed(2) || 0 }} BTC =
          {{ ( (btcDetail.price / btcfDetail.price) * (amount || 1)).toFixed(2) || 0 }}
          {{ btcfDetail.symbol }}
        </p>
        <div class="save" @click="exchangeUsdt2BTCF">{{$t('BDCF.t4') }}</div>
      </div>

      <div class="t2">
        <p class="t9">BTCF {{$t('mine.t76') }}：<span style="color:#03C4FB">{{ getBurning }}</span></p>
        <p class="t9" style="margin-top:20px;display: flex;align-items: center">{{$t('mine.t77') }}：
<!--          <el-tag-->
<!--              type="success"-->
<!--              size="mini"-->
<!--              @click="copySubmit('0x000000000000000000000000000000000000dEaD')"-->
<!--              effect="dark">-->
<!--            {{ $t('computingPower.t18')}}-->
<!--          </el-tag>-->

            <span style="color:#03C4FB;font-size: 14px">0x0(30)00000dEaD</span>
            <img
                style="width: 20px;height: 20px;margin-left: 10px;margin-bottom: 3px;"
                @click="copySubmit('0x000000000000000000000000000000000000dEaD')"
                src="../../assets/new/5.png"
                alt=""
            />
        </p>
      </div>

      <div class="t11">
        <p>{{$t('BDCF.t6') }}</p>
        <img src="../../assets/new/25.png" alt="" />
      </div>
      <div class="t12">
        <p>{{$t('BDCF.t6') }}</p>
        <p>{{$t('BDCF.t7') }}</p>
        <p>{{$t('BDCF.t8') }}</p>
        <p>{{$t('BDCF.t9') }}</p>
        <p>{{$t('BDCF.t10') }}</p>


      </div>
    </div>
    <div class="navigationBar">
      <div @click="goTo('/')">
        <p><img src="../../assets/new/10.png" alt="" /></p>
        <p>{{$t('tab.market') }}</p>

      </div>
      <div @click="goTo('/computingPower')">
        <p><img src="../../assets/new/13.png" alt="" /></p>
        <p>{{$t('tab.computingPower') }}</p>
      </div>
      <div @click="goTo('/manageMoneyMatters')">
        <p><img src="../../assets/new/7.png" alt="" /></p>
        <p>{{$t('tab.manageMoneyMatters') }}</p>

      </div>
      <div @click="goTo('/BDCF')" class="active">
        <p><img src="../../assets/new/14.png" alt="" /></p>
        <p>{{$t('tab.BTCF') }}</p>

      </div>
      <div @click="goTo('/mine')">
        <p><img src="../../assets/new/11.png" alt="" /></p>
        <p>{{$t('tab.mine') }}</p>
      </div>
    </div>
    <div class="hig"></div>
    <el-drawer :title="$t('BDCF.t11')" :visible.sync="drawer" :direction="'btt'">
      <div class="list2">
        <div
          @click="
            type = 1
            drawer = false
          "
        >
          <p><img src="../../assets/new/28.png" alt="" /></p>
          <p>USDT</p>
        </div>
        <div
          @click="
            type = 2
            drawer = false
          "
        >
          <p><img src="../../assets/new/29.png" alt="" /></p>

          <p>BTC</p>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Web3 from 'web3'
import abi from '@/web3/contract'
export default {
  data() {
    return {
      type: 1,
      drawer: false,
      isType: '',
      list: [],
      usdtDetail: {},
      btcfDetail: {},
      amount: '',
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      btcDetail: {},
      getBurning:0,
    }
  },
  components: {},
  mounted() {
    this.initBTCF();
    this.tokengetList()
  },
  methods: {
    initBTCF(){
      this.axios
          .get('topTokenBurning/getBurning')
          .then((res) => {
            this.getBurning = res.data.burningAmount;
          })
    },
    exchangeUsdt2BTCF() {
      var self = this
      if (!this.amount) {
        $('.modal-body-erro').html(this.$t('BDCF.t5'))
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
            .post(
              self.type == 1
                ? self.api.exchangeUsdt2BTCF
                : self.api.exchangeBTC2BTCF,
              {
                wallet: localStorage.getItem('tophis_walletAddress') || '-',
                signMsg: signature,
                content: self.objConfig.web3jSign,
                amount: self.amount,
              },
            )
            .then((res) => {
              if (res.code == 200) {
                self.amount = ''
                self.tokengetList()
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
    tokengetList() {
      this.axios
        .get(this.api.tokengetList, {
          params: {},
        })
        .then((res) => {
          if (res.code == 200) {

            res.data.forEach((item) => {
              if (item.symbol == 'USDT') {
                this.usdtDetail = item
              }
              if (item.symbol == 'BTC') {
                this.btcDetail = item
              }
              if (item.symbol == 'BTCF') {
                this.btcfDetail = item
              }
            })
          }
        })
    },
  },
}
</script>

<style scoped lang="less">
.BDCF {
  .bg1 {
    margin-top: -30px;
    .gif1 {
      width: 100%;
      position: absolute;
      opacity: 0.5;
      left: -30%;
      top: -20%;
    }
  }
  .com {
    padding: 12px 12px 30px;
    .t1 {
      padding: 32px 30px 12px;
      display: flex;
      position: relative;
      .t02 {
        > p:nth-child(1) {
          font-weight: 400;
          font-size: 18px;
          color: #ffffff;
        }
        > p:nth-child(2) {
          font-family: HONOR Sans TC, HONOR Sans TC;
          font-weight: bold;
          font-size: 16px;
          color: #01eb8c;
          margin-top: 12px;
          width: 170px;
          line-height: 1.4;
        }
        > p:nth-child(3) {
          font-family: HONOR Sans TC, HONOR Sans TC;
          font-weight: bold;
          font-size: 16px;
          color: #01eb8c;
          width: 170px;
          line-height: 1.4;
        }
        > p:nth-child(4) {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
        }
      }
      img {
        width: 100px;
        position: absolute;
        right: 40px;
        margin-top: 40px;
      }
    }
    .t2 {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid #5b89b3;
      padding: 24px 12px;
      margin-top: 44px;
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
        }
        .navDown {
          width: 15px;
        }
      }
      .t9 {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        margin-bottom: 12px;
      }
      .t10 {
        font-weight: 400;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }
      .save {
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
        margin: 20px auto 0;
      }
      .activeBg {
        background: #101010;
        border: 1px solid #0283fa;
      }
    }
    .t11 {
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
    .t12 {
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid #5b89b3;
      padding: 12px;

      p {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
}
.list2 {
  padding: 0 16px;
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
</style>
