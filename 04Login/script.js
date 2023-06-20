const App = {
    data() {
        return {
            isLoggedIn: true,
            otherBoolData: true
        }
    }
};

Vue.createApp(App).mount('#vue-app');