// Vue
import { createApp } from 'vue'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
// Components
import App from './App.vue'

library.add(faPlay, faStop);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
