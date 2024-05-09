;(function () {
  window._browserType = function () {
    var u = navigator.userAgent
    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      return 'IOS'
    }

    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
      return 'Android'
    }
  }
  window._JCA = {
    action: function (_fn, params) {
      switch (_browserType()) {
        case 'IOS':
          window.webkit.messageHandlers[_fn].postMessage(params)

          break
        case 'Android':
          window.messageHandlers[_fn](JSON.stringify(params))
          break
      }
    },

    _getMethod: function (obj, cb) {
      window['_' + obj.callBack] = function (r) {
        cb(JSON.parse(r))
      }
      var _GlobalConfigObj = _GlobalConfig[_GlobalConfig.currentEnv]
      var params = {
        project: _GlobalConfigObj.projectName,
        website: window.location.origin,
        walletAddress: localStorage.getItem('tophis_walletAddress'),
        instanceId: _GlobalConfigObj.projectInstanceId,
        instanceName: _GlobalConfigObj.projectInstanceName,
        tokenId: _GlobalConfigObj.nacTokenId,
        tokenName: _GlobalConfigObj.nacTokenName,
      }


      params = Object.assign(params, obj)
      _JCA.action(obj.callBack, params)
    },
  }

  window._switchWalletBridge = function (data) {
    var res = JSON.parse(data)

    if (res.flag) {
      if (localStorage.getItem('tophis_walletAddress') != res.walletAddress) {
        localStorage.removeItem('faqlistArr')
        localStorage.removeItem('faqlistArr')
        localStorage.removeItem('Gat_Mining_Pool_total_coinPrice')
        localStorage.removeItem('arrArticlelist')
        localStorage.removeItem('Gat_Mining_Pool_tokenBalance')
        localStorage.removeItem('bindlistContent')
        
        localStorage.removeItem('arrContent')
        localStorage.removeItem('Gat_Mining_Pool_walletName')
        localStorage.removeItem('Gat_Mining_Pool_total_value')
        localStorage.removeItem('accountinfoSet')
        localStorage.setItem('tophis_walletAddress',res.walletAddress)
        history.go(0)
      }
    }
  }


  window._getLangBridge = function (data) {
    var res = JSON.parse(data)
 
    if (res.flag) {
      if(!localStorage.getItem("Gat_Mining_Pool_language")){
        if(res.data==1){
          localStorage.setItem("Gat_Mining_Pool_language","en_US")
        }else  if(res.data==2){
          localStorage.setItem("Gat_Mining_Pool_language","zh_CN")

        }  else  if(res.data==3){
          localStorage.setItem("Gat_Mining_Pool_language","zh_TW")
        }  else if(res.data==4){
          localStorage.setItem("Gat_Mining_Pool_language","en_US")

        }else{
          localStorage.setItem("Gat_Mining_Pool_language","en_US")
        }
        history.go(0)
      }
     
     
    }
  }
})()
