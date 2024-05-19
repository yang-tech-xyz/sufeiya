<template>
  <div>
    <inc_menu/>
    <div class="bg1">
      <div><img class="gif1" src="../../assets/img/1.gif" alt=""/></div>
    </div>

    <div class="announcement-carousel">
      <el-carousel
          :interval="5000"
          arrow="never"
          indicator-position="none"
          direction="vertical"
          height="70px"
          @change="handleChange"
      >
        <el-carousel-item
            v-for="(item, index) in announcements"
            :key="index"
        >
          <div class="announcement" @click="showAnnouncement(item)">{{ item.title }}</div>
        </el-carousel-item>
      </el-carousel>
      <div class="custom-indicator">
        <span
            v-for="(item, index) in announcements"
            :key="index"
            class="indicator"
            :class="{ 'active': index === currentIndex }"
        ></span>
      </div>
    </div>

<!--    <el-dialog :visible.sync="dialogVisible" width="60%" title="Announcement" class="custom-dialog">-->
<!--      <div class="announcement-content ">{{ currentAnnouncementContent }}</div>-->

<!--      <span slot="footer" class="dialog-footer">-->
<!--        <el-button type="primary" @click="dialogVisible = false">Sure</el-button>-->
<!--      </span>-->
<!--    </el-dialog>-->
    <div
        class="notifyBoxz1"
        data-bs-toggle="modal"
        data-bs-target="#DialogIconedSuccess11"
    >
      <div class="in"></div>
    </div>
    <div
        class="modal fade dialogbox"
        id="DialogIconedSuccess11"
        data-bs-backdrop="static"
        tabindex="-1"
        role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title modal-body-success"></h5>
          </div>
          <div class="modal-body" style="margin: 40px 0;">{{ currentAnnouncementContent }}</div>
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">{{$t('inc_menu.closure')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="market">
      <div class="t1">
        <p>{{ $t('market.t1') }}</p>
        <p>{{ $t('market.t2') }}</p>
        <p>{{ $t('market.t3') }}</p>
      </div>
      <div class="list">
        <div v-for="(item, idx) in list" :key="idx">
          <div>
            <p><img :src="item.icon" alt=""/></p>
            <p>{{ item.symbol }}</p>
          </div>
          <div>{{ item.price }}</div>
          <div>{{ item.outputAnnualInterestRate }}</div>
        </div>
      </div>
      <div class="navigationBar">
        <div @click="goTo('/')" class="active">
          <p><img src="../../assets/new/15.png" alt=""/></p>
          <p>{{ $t('tab.market') }}</p>
        </div>
        <div @click="goTo('/computingPower')">
          <p><img src="../../assets/new/13.png" alt=""/></p>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      list: [],
      announcements: [],
      currentIndex: 0,
      dialogVisible: false,
      currentAnnouncementContent: ""
    };
  },
  mounted() {
    this.tokengetList();
    this.fetchAnnouncements();
  },
  methods: {
    handleChange(index) {
      this.currentIndex = index;
    },
    tokengetList() {
      axios
          .get(this.api.tokengetList, {
            params: {},
          })
          .then((res) => {
            if (res.code === 200) {
              this.list = res.data;
            }
          })
          .catch((error) => {
            console.error("获取列表失败：", error);
          });
    },
    fetchAnnouncements() {
      // console.log(typeof(localStorage.getItem("Gat_Mining_Pool_language")));
      axios
          .get(this.api.topNotice)
          .then((res) => {
            if (res.code === 200) {
              this.announcements = res.data;

              // for(var i =0;i<res.data.length;i++){
              //    var data = localStorage.getItem("Gat_Mining_Pool_language")
              //    console.log(data);
              //   if(res.data[i].lang==data){
              //     this.announcements.push(res.data[i]) ;
              //   }else{
              //     console.log("其他类型");
              //   }
              // }

            }

          })
          .catch((error) => {
            console.error("Error fetching announcements:", error);
          });
    },
    showAnnouncement(item) {
      this.currentAnnouncementContent = item.contents;
      this.dialogVisible = true;
      $('.notifyBoxz1').click()
    },

  },
};
</script>


<style scoped lang="less">
.container {
  width: 100%;
}

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

.announcement-carousel {
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(122, 191, 255, 0.66);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #000e17;
  backdrop-filter: blur(10px);
}

.announcement {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease;
}

.custom-indicator {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #007bff;
}


.announcement-content {
  padding: 20px;
  font-size: 16px;
  color: #fff;

}

:deep(.el-dialog__title) {
  color: #f7deb9 !important;

}

:deep(.el-dialog__header ) {
  background-color: rgba(12, 14, 16, .8);

}

:deep(.el-dialog__body) {
  background-color: rgba(16, 24, 43, .8);
}

:deep(.el-dialog__footer) {
  background-color: rgba(16, 24, 43, .8);
}


</style>
