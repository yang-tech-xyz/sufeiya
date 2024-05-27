<template>
  <div>
    <div class="bg">
      <div><img src="../assets/new/35.png" alt="" />
      <span class="lang" @click="tabLang">{{$t('tab.lang') }}</span>
      </div>
      <div class="add" @click="bindwallet(1)">
        {{ interceptFn(walletAddress) || $t('inc_menu.walletFirst') }}
      </div>
    </div>
    <div
      class="clickDialogIconedSuccess"
      data-bs-toggle="modal"
      data-bs-target="#DialogIconedSuccess"
    >
      <div class="in">
        <div></div>
      </div>
    </div>

    <div
      class="modal fade dialogbox"
      id="DialogIconedSuccess"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-icon text-success" style="margin-top: 30px;">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div class="modal-header">
            <h5 class="modal-title modal-body-success"></h5>
          </div>
          <div class="modal-body" style="margin: 10px 0;"></div>
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">{{$t('inc_menu.closure')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- erro -->
    <div
      class="clickDialogIconedDanger"
      data-bs-toggle="modal"
      data-bs-target="#DialogIconedDanger"
    >
      <div class="in">
        <div></div>
      </div>
    </div>

    <div
      class="modal fade dialogbox"
      id="DialogIconedDanger"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-footer">
            <div class="btn-inline">
              <a
                href="#"
                class="closeImg"
                data-bs-dismiss="modal"
                @click="closeFn2"
              >
                <img src="../assets/images/new/close.png" alt="" />
              </a>
            </div>
          </div>
          <div class="modal-icon text-danger">
            <ion-icon name="close-circle"></ion-icon>
          </div>
          <div class="modal-header">
            <!-- <h5 class="modal-title">Error</h5> -->
          </div>
          <div class="modal-body modal-body-erro"></div>
          <!-- <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">{{
                $t("inc_menu.close")
              }}</a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- * end -->

    <!--  Success-->
    <div
      class="clickDialogIconedSuccess"
      data-bs-toggle="modal"
      data-bs-target="#DialogIconedSuccess"
    >
      <div class="in">
        <div></div>
      </div>
    </div>

    <div
      class="modal fade dialogbox"
      id="DialogIconedSuccess"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-icon text-success" style="margin-top: 30px;">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div class="modal-header">
            <h5 class="modal-title modal-body-success"></h5>
          </div>
          <div class="modal-body" style="margin: 10px 0;"></div>
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">
                {{ $t('inc_menu.close') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- * end -->

    <!-- info -->
    <div
      class="clickDialogIconedInfo"
      data-bs-toggle="modal"
      data-bs-target="#DialogIconedInfo"
    >
      <div class="in"></div>
    </div>
    <div
      class="modal fade dialogbox"
      id="DialogIconedInfo"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="closeImg" data-bs-dismiss="modal">
                <img src="../assets/images/new/close.png" alt="" />
              </a>
            </div>
          </div>
          <div class="modal-icon">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          </div>
          <div class="modal-header showTip">
            <h5 class="modal-title modal-title-info"></h5>
          </div>
          <!-- <div class="modal-body">
                        Your card has been expired.
                    </div> -->
          <!-- <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">{{
                $t("inc_menu.close")
              }}</a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="clickDialogBasic12"
      data-bs-toggle="modal"
      data-bs-target="#DialogBasic12"
    >
      <div class="in"></div>
    </div>
    <div
      class="modal fade dialogbox"
      id="DialogBasic12"
      data-bs-backdrop="static"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{$t('inc_menu.bindInvitationCode')}}</h5>
          </div>
          <div class="modal-body iptList">
            <p>
              <input
                type="text"
                v-model="invitedCode"
                :placeholder="$t('inc_menu.pleaseEnter')"
              />
            </p>
          </div>
          <div class="modal-footer">
            <div class="btn-inline incBtn">
              <a href="#" class="alertBtn" @click="personal_signFn(1)">
                {{$t('inc_menu.confirmBinding')}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
const TronWeb = require('tronweb')
export default {
  data() {
    return {
      walletAddress: '',
      walletName: '',
      Gat_Mining_Pool_total_value: '-',
      usdtContractAddr:
        _GlobalConfig[_GlobalConfig.currentEnv].usdtContractAddr,
      quickRegContractAddr:
        _GlobalConfig[_GlobalConfig.currentEnv].quickRegContractAddr,
      objConfig: _GlobalConfig[_GlobalConfig.currentEnv],
      invitedCode: '',
      msg: 'tron-web-dapp',
      tronWeb: null,
    }
  },
  components: {},
  mounted() {
    var self = this
    if (this.$route.query.invitedCode) {
      this.invitedCode = this.$route.query.invitedCode
    }

    if (localStorage.getItem('tophis_walletAddress')) {
      self.axios
        .get(self.api.checkWallet, {
          params: {
            walletAddress: localStorage.getItem('tophis_walletAddress'),
          },
        })
        .then((res) => {
          if (!res.data) {
            self.bindwallet()
          }
        })
        .catch((e) => {})

      self.walletAddress = localStorage.getItem('tophis_walletAddress')
      if (!localStorage.getItem('tophis_signature')) {
        // self.personal_signFn()
      }
      setTimeout(() => {
        if (window.ethereum) {
          if (self.walletAddress != window.ethereum.selectedAddress) {
            self.bindwallet()
          }
        }
      }, 500)
    } else {
      self.bindwallet()
    }
    // if(window.tp){
    //   try{
    //     window.tp.on('accountChanged', (newAccount) => {
    //       console.log('账号切换')
    //       localStorage.removeItem('tophis_signature')
    //
    //       self.breakFn()
    //       self.bindwallet()
    //     });
    //   }catch (e){
    //     console.error(e)
    //   }
    // }
    if (window.ethereum) {
      //监听账号切换
      window.ethereum.on('accountsChanged', function (accounts) {
        console.log('账号切换')
        localStorage.removeItem('tophis_signature')

        self.breakFn()
        self.bindwallet()
      })

      // 监听网络切换
      window.ethereum.on('networkChanged', function (networkIDstring) {
        console.log('监听网络切换')
        localStorage.removeItem('tophis_signature')

        self.breakFn()
        self.bindwallet()
      })
    }

    // if (window.tronWeb) {
    //   //监听账号切换
    //   window.tronWeb.on('accountsChanged', function (accounts) {
    //     console.log('账号切换tronWeb')
    //     localStorage.removeItem('tophis_signature')

    //     self.breakFn()
    //     self.bindwallet()
    //   })

    //   // 监听网络切换
    //   window.tronWeb.on('networkChanged', function (networkIDstring) {
    //     console.log('监听网络切换tronWeb')
    //     localStorage.removeItem('tophis_signature')

    //     self.breakFn()
    //     self.bindwallet()
    //   })
    // }
  },
  watch: {
    // 'tronWeb.defaultAddress.base58'(newVal, oldVal) {
    //   if (oldVal) {
    //     console.log(`reverse_y 值从 ${oldVal} 变成了 ${newVal}`)
    //     localStorage.removeItem('tophis_signature')
    //     this.breakFn()
    //     this.bindwallet()
    //   }
    // },
  },
  methods: {
    tabLang(){
      if(localStorage.getItem("Gat_Mining_Pool_language")=='en_US'){
        localStorage.setItem("Gat_Mining_Pool_language","zh_CN")

      }else{
        localStorage.setItem("Gat_Mining_Pool_language","en_US")

      }
      this.$router.go(0);

    },
    breakFn() {
      var self = this
      localStorage.removeItem('tophis_walletAddress')
      localStorage.removeItem('tophis_signature')
      localStorage.removeItem('faqlistArr')
      localStorage.removeItem('faqlistArr')
      localStorage.removeItem('Gat_Mining_Pool_total_coinPrice')
      localStorage.removeItem('arrArticlelist')
      localStorage.removeItem('Gat_Mining_Pool_tokenBalance')
      localStorage.removeItem('arrContent')
      localStorage.removeItem('Gat_Mining_Pool_walletName')
      localStorage.removeItem('Gat_Mining_Pool_total_value')
      localStorage.removeItem('accountinfoSet')
      localStorage.removeItem('bindlistContent')

      // self.$router.go(0);
    },
    accountinfo() {
      this.axios
        .get(this.api.accountinfo, {
          params: {
            walletAddress: localStorage.getItem('tophis_walletAddress') || '-',
          },
        })
        .then((res) => {
          if (res.flag) {
            localStorage.setItem('accountinfoSet', JSON.stringify(res.content))
          }
        })
    },
    // 切换网络
    wallet_addEthereumChainFn() {
      var self = this
      return (
        window.ethereum &&
        window.ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [self.objConfig.bscChain],
          })
          .then(() => {
            return true
          })
          .catch((e) => {})
      )
    },

    ipt() {
      var regs = /[^a-z|A-Z|0-9|\-|_||—|]/g
      this.nickname = this.nickname.replace(regs, '')
    },

    saveFn(type) {
      var self = this

      var provider = null
      provider = window.ethereum

      Vue.prototype.web3 = new Web3(provider)
      self.web3.eth.getGasPrice().then(function (e) {
        self.gasPrice = e
      })
    },
    async bindwallet(type) {
      var self = this
      if (window.ethereum) {
        try {
          self.loadingBtn = true
          window.ethereum
            .enable()
            .then(function (accounts) {
              console.log(accounts)

              localStorage.setItem(
                'tophis_walletAddress',
                accounts[0].toLowerCase(),
              )
              self.walletAddress = localStorage.getItem('tophis_walletAddress')
              self.axios
                .get(self.api.checkWallet, {
                  params: {
                    walletAddress: self.walletAddress,
                  },
                })
                .then((res) => {
                  if (res.data) {
                    self.axios
                      .get(self.api.topUser, {
                        params: {},
                      })
                      .then((res) => {
                        history.go(0)
                      })
                      .catch((e) => {
                        localStorage.removeItem('tophis_signature')

                        if (self.$route.query.invitedCode) {
                          self.personal_signFn(type)
                        } else {
                        }
                      })
                  } else {
                    $('.clickDialogBasic12').click()
                  }
                })
                .catch((e) => {})
            })

            .catch(function (reason) {})
        } catch (error) {
          $('.DialogBasic2').click()
        }
      } else {
        // setTimeout(() => {
        //   if (window.tronWeb) {
        //     if (window.tronWeb) {
        //       window._GlobalConfig[
        //         window._GlobalConfig.currentEnv
        //       ].web3jSign = self.removeFirstTwoChars(
        //         window.tronWeb.toHex('tronWeb-sign'),
        //       )
        //     }
        //     self.tronWeb = window.tronWeb
        //     self.walletAddress = self.tronWeb.defaultAddress.base58
        //     if (self.walletAddress) {
        //       localStorage.setItem(
        //         'tophis_walletAddress',
        //         self.walletAddress,
        //       )
        //       self.walletAddress = localStorage.getItem('tophis_walletAddress')
        //       self.axios
        //         .get(self.api.checkWallet, {
        //           params: {
        //             walletAddress: self.walletAddress,
        //           },
        //         })
        //         .then((res) => {
        //           if (res.data) {
        //             self.axios
        //               .get(self.api.topUser, {
        //                 params: {},
        //               })
        //               .then((res) => {
        //               })
        //               .catch((e) => {
        //                 localStorage.removeItem('tophis_signature')
        //                 if (self.$route.query.invitedCode) {
        //                   self.personal_signFn(type)
        //                 } else {
        //                 }
        //               })
        //           } else {
        //             $('.clickDialogBasic12').click()
        //           }
        //         })
        //         .catch((e) => {})
        //     }
        //   }
        // }, 500)
      }
    },
    removeFirstTwoChars(str) {
      return str.slice(2)
    },
    async personal_signFn(type) {
      let self = this
      if (window.ethereum) {
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
            self.register(signature)
          })
          .catch((e) => {})
      } else {
        // var str = self.objConfig.web3jSign
        // var HexStr = window.tronWeb.toHex(str)
        // var signature = await window.tronWeb.trx.sign('3f41ea1947027fd0b30f32f1fdddf3236f00fbb090a5223a1888c74995ea70e9')
        // console.log(signature)
        // // console.log( window.tronWeb.toHex(signature) )
        // self.register(self.removeFirstTwoChars(signature))
      }
    },
    register(signature) {
      var self = this

      this.isLoad = false
      let wallet = localStorage.getItem('tophis_walletAddress')
      // if (self.tronWeb) {

      //   wallet =window.tronWeb.address.toHex(wallet)
      // }
      this.axios
        .post(this.api.register, {
          wallet: wallet || '-',
          signMsg: signature,
          content: self.objConfig.web3jSign,
          invitedCode: this.$route.query.invitedCode || this.invitedCode,
        })
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            localStorage.setItem('tophis_signature', signature)
            self.$router.go(0);

          } else {
            $('.modal-body-erro').html(res.msg || 'failed')
            $('.clickDialogIconedDanger').click()
          }
        })
    },
    closeFn2() {
      var self = this
      if (!localStorage.getItem('tophis_signature')) {
        self.axios
          .get(self.api.topUser, {
            params: {},
          })
          .then((res) => {})
          .catch((e) => {
            if (e.code == 500) {
              $('.clickDialogBasic12').click()
            }
          })
      }
    },
  },
}
</script>

<style scoped lang="less">
.incHig {
  height: 40px;
}
.computingPower {
  .bg {
    background: transparent !important;
  }
  .incHig {
    height: 0 !important;
  }
}
.bg {
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 10px 16px;
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
  left: 0;
  img {
    width: 30px;
  }
  .add {
    background: linear-gradient(90deg, #0dffff 0%, #2ae1ff 100%);
    border-radius: 6px 6px 6px 6px;
    padding: 7px 10px 5px;
    font-size: 12px;
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
.lang{
  margin-left: 10px;
  font-size: 14px;
}
</style>
