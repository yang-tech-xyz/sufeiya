<template>
    <div class="announcement-carousel">
      <el-carousel
        :interval="5000"
        arrow="never"
        indicator-position="none"
        height="100px"
        @change="handleChange"
      >
        <el-carousel-item v-for="(item, index) in announcements" :key="index">
          <div class="announcement">{{ item }}</div>
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
  </template>
  
  <script>
  export default {
    name: 'AnnouncementCarousel',
    data() {
      return {
        announcements: [
          '公告1: 欢迎访问我们的网站！',
          '公告2: 我们的服务已上线。',
          '公告3: 感谢您的支持！'
        ],
        currentIndex: 0
      };
    },
    methods: {
      handleChange(index) {
        this.currentIndex = index;
      }
    }
  };
  </script>
  
  <style scoped>
  .announcement-carousel {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .announcement {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #333;
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
  </style>
  