<template>
<div class="appFooter">
  <img  class="getlogo"  src="../assets/img/sample/avatar/logo2.png"/>
    <div class="footer-title">
        Tophis {{times}}
    </div>
    The most reliable data center in Singapore.
</div>
</template>

<script>
export default {
  data() {
    return {
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      times:new Date().getUTCFullYear()
    }
  },
  components: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.footer-title{
  margin-top: 14px;
}
.getlogo{
  width: 64px;
}
</style>
