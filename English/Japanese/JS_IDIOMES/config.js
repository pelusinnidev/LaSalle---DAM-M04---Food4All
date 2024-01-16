import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messagesEs from './translations-es';
import messagesCa from './translations-ca';
import App from './App.vue';

Vue.use(VueI18n);

// Configuración de Vue I18n
const i18n = new VueI18n({
    locale: 'en', // Establecemos el idioma por defecto a inglés
    messages: {
        es: messagesEs, // Traducciones en español
        ca: messagesCa, // Traducciones en catalán
    },
});


new Vue({
    el: '#app',
    render: h => h(App),
    i18n,
});
