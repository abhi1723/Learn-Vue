const App = {
    data() {
        return {
            name : "Kumar Abhishek"
        }
    }
}

const oneMoreApp = {
    data() {
        return {
            name : "Sethu"
        }
    }
}

Vue.createApp(oneMoreApp).mount('#one-more-app');
Vue.createApp(App).mount('#app'); 