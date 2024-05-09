<template>
  <div>
    <nav aria-label="pagination-demo">
      <ul class="pagination pagination- justify-content-center">
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              color-white
              bg-gray-dark
              shadow-xl
              border-0
            "
            href="#"
            tabindex="-1"
            aria-disabled="true"
            ><i class="fa fa-angle-left"></i
          ></a>
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-red-dark
              shadow-xl
              border-0
            "
            href="#"
            >1</a
          >
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-green-dark bg-transparent
              shadow-xl
              border-0
            "
            href="#"
            >2</a
          >
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-blue-dark
              shadow-xl
              border-0
            "
            href="#"
            >3</a
          >
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-yellow-dark bg-transparent
              shadow-xl
              border-0
            "
            href="#"
            >4</a
          >
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-red-dark
              shadow-xl
              border-0
            "
            href="#"
            >5</a
          >
        </li>
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              color-white
              bg-gray-dark
              shadow-xl
              border-0
            "
            href="#"
            ><i class="fa fa-angle-right"></i
          ></a>
        </li>
      </ul>
    </nav>

    <nav aria-label="pagination-demo">
      <ul class="pagination pagination- justify-content-center">
        <li class="page-item">
          <a
            class="
              page-link
              rounded-l
              line-height-s
              bg-red-dark
              shadow-xl
              border-0
            "
            href="#"
            >{{ $t("include.load_more") }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
