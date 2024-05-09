<template>
  <div class="recordList" @click="goTo('transactionDetail')">
    <div>
      <div class="time">
        <p><span>07-18 20:42</span></p>
        <p><img src="@/assets/img/4.png" alt="" /></p>
      </div>
      <div class="success">成功</div>
      <div class="content">授权 USDT</div>
    </div>
    <div>
      <div class="time">
        <p><span>07-18 20:42</span></p>
        <p><img src="@/assets/img/4.png" alt="" /></p>
      </div>
      <div class="success">成功</div>
      <div class="contentExchange">
        <div>
          <p><img src="@/assets/img/nac.png" alt="" />GAT</p>
          <p>0.3</p>
        </div>
        <p>
          <span></span>
          <img src="@/assets/img/5.png" alt="" />
          <span></span>
        </p>

        <div>
          <p><img src="@/assets/img/usdt.png" alt="" />USDT</p>
          <p>1.3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.recordList {
  > div {
    border-radius: 0.2rem;
    padding: 0.3rem;
    border: 1px solid #e8e8e8;
    background: #fff;
    margin-bottom: 0.3rem;
    span {
      color: #999;
    }
    .time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 0.38rem;
      }
    }
    .success {
      color: green;
      font-size: 0.38rem;
    }
    .content {
      font-size: 0.4rem;
      margin-top: 0.25rem;
    }
    .contentExchange {
      background: #f5f6f8;
      border-radius: 0.2rem;
      padding: 0.3rem 0.5rem;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;

      > div {
        > p:nth-child(1) {
          display: flex;
          align-items: center;
          font-size: 0.373rem;
        }
        > p:nth-child(2) {
          margin-top: 0.1rem;
        }
        img {
          width: 0.6rem;
          margin-right: 0.2rem;
          border-radius: 50%;
        }
      }
      > p {
        display: flex;
        align-items: center;
        img {
          width: 0.4rem;
        }
        span {
          display: block;
          width: 1rem;
          height: 1px;
          background: #d6d7d9;
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
