
import $ from 'jquery'
export function copySubmit(name, text) {
  if (!name) {
    return
  }
  $('.modal-body-success').html('复制成功')
  $('.clickDialogIconedSuccess').click()
  var copyContent = document.createElement('input')
  copyContent.value = name
  document.body.appendChild(copyContent)
  copyContent.select()
  document.execCommand('Copy')
  copyContent.remove()



}
export function interceptFn(text) {
  if (!text) {
    return ''
  }
  var startText = text.slice(0, 6)
  var endText = text.slice(text.length - 4, text.length)
  return startText + '...' + endText
}
export function interceptFn2(text) {
  if (!text) {
    return ''
  }
  var startText = text.slice(0, 5)
  var endText = text.slice(text.length - 4, text.length)
  return startText + '********' + endText
}

export function noTipFn() {


  $('.modal-title-info').html(this.$t("jsModule.coming_soon"))
  $('.clickDialogIconedInfo').click()
}
export function scientificToNumber(num_str) {
  num_str = num_str.toString();
  if (num_str.indexOf("+") != -1) {
    num_str = num_str.replace("+", "");
  }
  if (num_str.indexOf("E") != -1 || num_str.indexOf("e") != -1) {
    var resValue = "",
      power = "",
      result = null,
      dotIndex = 0,
      resArr = [],
      sym = "";
    var numStr = num_str.toString();
    if (numStr[0] == "-") {
      numStr = numStr.substr(1);
      sym = "-";
    }
    if (numStr.indexOf("E") != -1 || numStr.indexOf("e") != -1) {
      var regExp = new RegExp(
        "^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$",
        "ig"
      );
      result = regExp.exec(numStr);
      if (result != null) {
        resValue = result[2];
        power = result[5];
        result = null;
      }
      if (!resValue && !power) {
        return false;
      }
      dotIndex = resValue.indexOf(".") == -1 ? 0 : resValue.indexOf(".");
      resValue = resValue.replace(".", "");
      resArr = resValue.split("");
      if (Number(power) >= 0) {
        var subres = resValue.substr(dotIndex);
        power = Number(power);
        for (var i = dotIndex > 0 ? 1 : 0; i <= power - subres.length; i++) {
          resArr.push("0");
        }
        if (power - subres.length < 0) {
          resArr.splice(dotIndex + power, 0, ".");
        }
      } else {
        power = power.replace("-", "");
        power = Number(power);
        for (var i = 0; i < power - dotIndex; i++) {
          resArr.unshift("0");
        }
        var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex);
        resArr.splice(n, 0, ".");
      }
    }
    resValue = resArr.join("");
    return sym + resValue;
  } else {
    return num_str;
  }
}

export function roundingFn(num, length) {
  if (!length) {
    if (num) {
      if (
        num.toString().split('.')[1] &&
        num.toString().split('.')[1].indexOf('999') != -1
      ) {
        return Math.round(num)
      } else {
        return num.toString().split('.')[0]
      }
    } else {
      return num
    }
  } else {
    if (num) {
      var e = num * Math.pow(10, length)
      e = e.toString().split('.')[0] / Math.pow(10, length)
      return e
    }
  }
}

export function numberOnlyFn(num) {
  console.log(num)
  if (num == 0) {
    return ''
  }

  if (num) {
    num+=''
    num = num.replace(/\D/g, '')
    console.log(num)
    return Number(num)
  } else {
    return num
  }
}
