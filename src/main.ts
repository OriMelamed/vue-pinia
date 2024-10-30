// main.ts or main.js
import { createApp } from 'vue';
import App from './App.vue';

// Import Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Global CSS has to be imported
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Optional: Import a theme icon font or icon pack like Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
});

// Initialize Vue app with Vuetify
const app = createApp(App);
app.use(vuetify);
app.mount('#app');
