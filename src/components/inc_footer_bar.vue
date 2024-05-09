<template>
  <div id="footer-bar" class="footer-bar-5">
    <a href="/" :class="pathname == '/' ? 'active-nav' : ''"
      ><i
        data-feather="home"
        data-feather-line="1"
        data-feather-size="21"
        data-feather-color="blue-dark"
        data-feather-bg="blue-fade-light"
      ></i
      ><span>{{ $t("include.home_page") }}</span></a
    >
    <a href="/register" :class="pathname == '/register' ? 'active-nav' : ''"
      ><i
        data-feather="shopping-cart"
        data-feather-line="1"
        data-feather-size="21"
        data-feather-color="red-dark"
        data-feather-bg="red-fade-light"
      ></i
      ><span>{{ $t("include.lease") }}</span></a
    >
    <a href="/nodeList" :class="pathname == '/nodeList' ? 'active-nav' : ''"
      ><i
        data-feather="cloud"
        data-feather-line="1"
        data-feather-size="21"
        data-feather-color="green-dark"
        data-feather-bg="green-fade-light"
      ></i
      ><span>{{ $t("applyCommunity.virtual_machine") }}</span></a
    >
    <a href="/systemStat" :class="pathname == '/systemStat' ? 'active-nav' : ''"
      ><i
        data-feather="pie-chart"
        data-feather-line="1"
        data-feather-size="21"
        data-feather-color="brown-dark"
        data-feather-bg="brown-fade-light"
      ></i
      ><span>{{ $t("include.data") }}</span></a
    >
    <a href="/settings" :class="pathname == '/settings' ? 'active-nav' : ''"
      ><i
        data-feather="settings"
        data-feather-line="1"
        data-feather-size="21"
        data-feather-color="dark-dark"
        data-feather-bg="gray-fade-light"
      ></i
      ><span>{{ $t("include.settings") }}</span></a
    >
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      pathname: "",
    };
  },
  components: {},
  mounted() {
    this.pathname = window.location.pathname;
  },
  methods: {},
};
</script>
  
  <style scoped lang="less">
</style>
  