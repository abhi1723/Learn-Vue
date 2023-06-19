
const App = {
    data() {
        return {
            courseList: [
                {
                    id: "LCO1",
                    courseName: "Django Full Stack",
                    subtitle: "Learn Django to become freelance ready",
                    price: "199",
                    courseImage: "django.png",
                    url: "https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready"
                },
                {
                    id: "LCO2",
                    courseName: "Interview Preparation",
                    subtitle: "Cracking the Tech Interview",
                    price: "999",
                    courseImage: "interview.png",
                    url: "https://courses.learncodeonline.in/learn/Cracking-the-Tech-Interview"
                },
                {
                    id: "LCO3",
                    courseName: "React Native",
                    subtitle: "React Native Design",
                    price: "799",
                    courseImage: "rn.png",
                    url: "https://courses.learncodeonline.in/learn/react-native-design"
                }
            ]
        }
    },
    methods: {
        openCourseDetail (url){
            console.log(`url ${url}`);
            window.open(url);
        }
    },
}

Vue.createApp(App).mount('#vue-app')