const App = {
    data() {
        return {
            selectedSuperHero : '',
            superHeroesList : [],
            favBond: "",
            bondList: [
                {name: 'James Bond', code: 7},
                {name: 'Jammy Bond', code: 8},
                {name: 'Valeria Bond', code: 9}
            ]
        }
    }
}

Vue.createApp(App).mount('#vue-app');