import Vue from 'vue';
import Element from 'element-ui';

import VueI18n from 'vue-i18n';
import messages from './localeMessages';

Vue.use(VueI18n);
const navLang = navigator.language;
const localLang = navLang === 'zh-CN' || navLang === 'en-US' ? navLang : false;
let lang = window.localStorage.lang || localLang || 'zh';
lang = lang.substr(0,2);


const i18n = new VueI18n({
    locale: lang, // set locale
    messages, // set locale messages
    silentTranslationWarn: true// set locale messages
});

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
});

export default i18n;