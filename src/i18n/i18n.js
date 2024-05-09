
import Vue from 'vue';
import VueI18n  from 'vue-i18n';
import messages from './langs';
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale:  localStorage.getItem("Gat_Mining_Pool_language")|| 'zh_CN',
  messages, 
})
// lang=zh_CN | zh_TW | en_US | ms_MY | ko_KR
export default i18n
