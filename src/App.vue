<template>
  <div>
    <router-view />
  </div>
</template>
<script>
let time = null
export default {
  data() {
    return {}
  },
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="less">
html,
body {
  // background: url(../src/assets/new/3.gif) no-repeat bottom;
  // background-size: contain;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.font-12 {
  font-size: 13px !important;
}
a:hover,
a:active,
a:focus {
  color: #fff !important;
}
.card-body {
  max-height: 300px;
  overflow-y: scroll;
}
.ovsOne {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.noList {
  font-size: 14px;
  color: #ccc;
  margin-top: 10px;
}
.pd2 {
  padding: 20px;
}
.alertBacks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  .card-style {
    width: 70%;
  }
  .color-black {
    font-size: 16px;
    font-weight: bold;
  }
  .loadingText {
    color: #00c6ff;
    text-align: center;
  }
  .bor23 {
    color: #00c6ff;
  }
}

.el-drawer {
  background: #000e17;
  padding-bottom: 10px;
  height: auto !important;
  .list {
    max-height: 300px;
    overflow-y: scroll;
  }
}
.el-drawer__header {
  text-align: center;
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
}
.el-drawer__close-btn {
  position: absolute;
  right: 10px;
}
.form-group.basic .form-control,
.form-group.basic .custom-select {
  padding-right: 0;
  font-size: 13px;
}
.goBack {
  background: url(../src/assets/images/1.png) no-repeat center center;
  background-size: 20px 28px;
}
.icon_empty {
  height: 48px;
}
.redColor {
  margin-bottom: 10px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  i {
    font-style: normal;
    color: red;
  }
}
.getlogo {
  width: 80px;
  border-radius: 10px;
}
.el-message-box {
  width: 320px;
}
.font-size20 {
  font-size: 20px !important;
}
.modal-body {
  word-break: break-all;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background: #000e17;
  border-color: #000e17;
  color: #fff;
}
.el-button--primary {
  background: #000e17;
  border-color: #000e17;
}
.el-input__inner:hover {
  border-color: #000e17 !important;
}
.el-message {
  width: 340px !important;
  min-width: 340px !important;
}
.buttonNo {
  position: relative;
  .el-icon-loading {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  span {
    margin-left: 0 !important;
  }
}
.panelbox .modal-dialog .modal-content {
  position: absolute;
  right: 0;
  background: #000e17;
}
.hst {
  height: 700px;
  overflow: hidden;
}

.appBottomMenu {
  a {
    color: #bcc8c4;
    strong {
      color: #bcc8c4 !important;
    }
  }
  .inc_active {
    color: #00c6ff !important;
    strong {
      color: #00c6ff !important;
    }
  }
}
.font-600 {
  font-weight: 600;
}
.bgdc {
  border-bottom: 1px solid rgba(0, 187, 126, 0.3);
}
.padf {
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  margin-right: 10px;
}
.pa15 {
  padding: 20px;
}
.img25 {
  width: 25px;
  height: 25px;
}
.colorblue {
  color: #000e17 !important;
}
.fontSize22 {
  font-size: 22px !important;
}
.fontSize20 {
  font-size: 20px !important;
}
.fontSize18 {
  font-size: 16px !important;
}
.fontSize16 {
  font-size: 16px !important;
}
.fontSize14 {
  font-size: 14px !important;
}
.pr-0 {
  padding-right: 0 !important;
}
.m-show {
  display: block !important;
}
.m-hide {
  display: none !important;
}
.colorRed {
  color: red !important;
}
.p-0 {
  padding: 20px 0 !important;
}
.el-button {
  font-size: 15px !important;
}
.sectionPus {
  display: block;
}
.loading {
  width: 30px;

  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.shape {
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
}
.magtop {
  margin-top: 20px !important;
  height: 43px;
}
.magbon {
  margin-bottom: 10px !important;
  height: 43px;
}
.right-p {
  text-align: right;
  div {
    min-width: 40px !important;
  }
}
.shape-1 {
  background-color: #1875e5;
  left: -5px;
  animation: animationShape1 7s linear infinite;
}

.shape-2 {
  background-color: #c5523f;
  left: 15px;
  animation: animationShape2 7s linear infinite;
}

.shape-3 {
  background-color: #499255;
  left: 35px;
  animation: animationShape3 7s linear infinite;
}

.shape-4 {
  background-color: #f2b736;
  width: 30px;
  height: 30px;
  left: -40px;
  background-color: transparent !important;
  z-index: 2;
  animation: animationShape4 7s linear infinite;
}

.shape-4 > div {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.shape-4 .shape-4-top {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fbbc05;
  clip: rect(0 30px 15px 0);
  transform: rotate(-30deg);
  animation: animationShape4Top 0.4s ease infinite alternate;
}

.shape-4 .shape-4-bottom {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fbbc05;
  clip: rect(15px 30px 30px 0);
  transform: rotate(45deg);
  animation: animationShape4Bottom 0.4s ease infinite alternate;
}

.shape-4 .shape-4-eye {
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 10px;
}

@keyframes animationShape4Top {
  0% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(0);
  }
}

@keyframes animationShape4Bottom {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(0);
  }
}

@keyframes animationShape1 {
  0% {
    opacity: 1;
  }

  17% {
    opacity: 1;
  }

  19% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  90% {
    opacity: 0;
  }

  95% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes animationShape2 {
  0% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  22% {
    opacity: 0;
  }

  35% {
    opacity: 0;
  }

  45% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes animationShape3 {
  0% {
    opacity: 1;
  }

  27% {
    opacity: 1;
  }

  29% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  64% {
    opacity: 1;
  }

  65% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes animationShape4 {
  0% {
    left: -40px;
    transform: rotateY(0);
  }

  45% {
    left: 50px;
    transform: rotateY(0);
  }

  50% {
    left: 50px;
    transform: rotateY(180deg);
  }

  95% {
    left: -40px;
    transform: rotateY(180deg);
  }

  100% {
    left: -40px;
    transform: rotateY(0);
  }
}
.el-message-box {
  background: rgba(0, 198, 255, 0.1);
  border: 0;
  .el-message-box__message p {
    color: #ffffff;
  }
  .el-input__inner {
    background: transparent !important;
    border: 1px solid #00c6ff;
  }
  .el-input__inner:hover {
    border: 1px solid #00c6ff !important;
  }
  .el-message-box__btns {
    .el-button {
      background: transparent !important;
      border: 1px solid #999 !important;
      height: 40px;
      color: #999;
    }
    .el-button--primary {
      color: #fff;
      border: 0 !important;
      background: linear-gradient(90deg, #00c6ff, #0DFFFF) !important;
    }
  }
}
.custom-select {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='13px' height='8px' viewBox='0 0 13 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline id='Path' stroke='%23A9ABAD' stroke-width='2' points='1.59326172 1.79663086 6.59326172 6.79663086 11.5932617 1.79663086'%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right center !important;
  background: #000e17 !important;
}
.modal-content {
  .btn-text-secondary {
    background: transparent !important;
  }
}

.dialogbox .modal-dialog .modal-content .btn-inline {
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
}
.dialogbox .modal-dialog .modal-content .btn-inline .btn:first-child {
  border: 0 !important;
  border-radius: 0 !important;
  width: 45% !important;
  height: 44px !important;
  padding: 0 !important;
  background: url(../public/img/1.png) no-repeat !important;
  background-size: 100% 100% !important;
  border-radius: 0 !important;
  min-height: 44px !important;
  margin: 0 0 20px !important;
  color: #fff !important;
  border: 0 !important;
}
.dialogbox .modal-dialog .modal-content .btn-inline .btn:last-child {
  border: 0 !important;
  border-radius: 0 !important;
  min-height: 44px !important;
  width: 45% !important;
  height: 44px !important;
  background: url(../public/img/1.png) no-repeat !important;
  background-size: 100% 100% !important;
  border-radius: 0 !important;
  padding: 0 !important;
  margin: 0 0 20px !important;
  color: #fff !important;
  border: 0 !important;
}
.dialogbox .modal-dialog .modal-content .swapToUsdFnBtn .btn:last-child {
  width: 95% !important;
  margin-top: -10px !important;
}
.section {
  .card {
    background: rgba(0, 198, 255, 0.2) !important;
  }
  .listview {
    border: 0 !important;
  }
}
#registerId {
  padding: 56px 0;
  margin-bottom: env(safe-area-inset-bottom);
  margin-top: env(safe-area-inset-top);
  .card {
    background: transparent !important;
  }
}

.noBgs {
  background: transparent !important;
}
.card2 {
  background: rgba(0, 198, 255, 0.3) !important;
}
#transferList {
  .custom-select {
    padding-left: 10px !important;
  }
}
select {
  outline: none;
  background: transparent;
  border: none;
  outline: none;
}
.usdtNum {
  font-size: 16px;
}
.payCla {
  text-align: center;
  input {
    background: transparent;
    width: 85%;
    margin: -40px auto 30px;
    border: 1px solid rgba(0, 198, 255, 0.3) !important;
    padding-left: 10px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }
}
div,
p {
  line-height: 1;
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #fff;
}

textarea,
input {
  outline: 0;
  border: 0;
  background: transparent !important;
}
.fotter {
  position: fixed;
  z-index: 999;
  width: 100%;
  bottom: 0;
  left: 0;
  color: #bcc8c4 !important;
  font-weight: 400;
  font-size: 12px;
  right: 0;
  background: #000e17;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 198, 255, 0.3);
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  > div {
    width: 25%;

    text-align: center;
    p {
      font-size: 12px;
    }
    > p:nth-child(1) {
      height: 30px;
      width: 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 22px;
      margin-bottom: 4px;
      flex-shrink: 0;
    }
    .icon2 {
      width: 26px;
      height: 26px;
    }
  }
  .active {
    color: #00c6ff;
  }
}
.hg {
  height: 70px;
}
.alertBtn {
  padding: 8px 20px;
  font-size: 14px;
  background: linear-gradient(90deg, #00c6ff, #0DFFFF);
  color: #fff;
  border-radius: 50px;
  height: 40px;

  margin-bottom: 16px;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.alertBtnColse {
  border: 1px solid #00c6ff;
  margin-bottom: 16px;

  color: #00c6ff;
  font-size: 14px;
  border-radius: 50px;
  height: 40px;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.navigationBar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #101010;
  width: 100%;
  box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.16);
  border-radius: 0px 0px 0px 0px;
  padding: 10px 0;
  text-align: center;
  z-index: 10;
  > div {
    width: 20%;
    p {
      font-weight: 500;
      font-size: 10px;
      color: #ffffff;
      line-height: 12px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
      text-align: center;
    }
  }
}
.hig{
  height: 60px;
}
.active{
  p{
    color: #03C4FB !important;
  }
}
</style>
