<template>
  <div>
    <inc_menu />
    <div class="bg1">
      <div><img class="gif1" src="../../assets/img/1.gif" alt="" /></div>
    </div>
    <div class="market">
      <div class="t1">
        <p>{{$t('market.t1') }}</p>
        <p>{{$t('market.t2') }}</p>
        <p>{{$t('market.t3') }}</p>
      </div>
      <div class="list">
        <div v-for="(item, idx) in list" :key="idx">
          <div>
            <p><img :src="item.icon" alt="" /></p>
            <p>{{item.symbol}}</p>
          </div>
          <div>{{item.price}}</div>
          <div>{{ item.outputAnnualInterestRate }}</div>
        </div>
      </div>
      <div class="navigationBar">
        <div @click="goTo('/')" class="active">
          <p><img src="../../assets/new/15.png" alt="" /></p>
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
        <div @click="goTo('/BDCF')">
          <p><img src="../../assets/new/9.png" alt="" /></p>
          <p>{{$t('tab.BTCF') }}</p>

        </div>
        <div @click="goTo('/mine')">
          <p><img src="../../assets/new/11.png" alt="" /></p>
          <p>{{$t('tab.mine') }}</p>
        </div>
      </div>
      <div class="hig"></div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import abi from '@/web3/contract'
export default {
  data() {
    return {
      list: [],
    }
  },
  components: {},
  mounted() {
    
    this.tokengetList()
  },
  created() {},
  methods: {
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
   
  },
}
</script>

<style scoped lang="less">
.bg1 {
    .gif1 {
      width: 100%;
      position: absolute;
      opacity: 0.5;
    }
  }
.market {
  padding: 0 12px 0;
  position: relative;
  z-index: 10;
  
  .t1 {
    display: flex;
    padding: 15px 13px;
    > p:nth-child(1) {
      display: flex;
      align-items: center;
      width: 38%;
    }
    > p:nth-child(2) {
      text-align: center;
      width: 20%;
    }
    > p:nth-child(3) {
      width: 42%;
      text-align: right;
    }
  }
  .list {
    > div {
      height: 56px;
      margin-bottom: 12px;
      background: rgba(36, 38, 39, 0.7);
      border-radius: 12px 12px 12px 12px;
      border: 1px solid rgba(122, 191, 255, 0.66);
      display: flex;
      align-items: center;
      padding: 13px;
      img {
        width: 32px;
        height: 32px;
        background: #f7deb9;
        border-radius: 45px 45px 45px 45px;
        margin-right: 10px;
      }

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        width: 38%;
      }
      > div:nth-child(2) {
        text-align: center;
        width: 20%;
      }
      > div:nth-child(3) {
        width: 42%;
        text-align: right;
        font-weight: 500;
        font-size: 15px;
        color: #00b42a;
      }
    }
  }
}
</style>
