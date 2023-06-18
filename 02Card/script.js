const App = {
    data() {
        return {
            title: "A Day in Japan",
            text: "This is how a day in Japan looks like",
            imgUrl: "https://picsum.photos/200/100"
        }
    }
}

Vue.createApp(App).mount('.container');