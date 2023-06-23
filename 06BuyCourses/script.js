
const App = {
    data() {
        return {
            courseList: [
                {
                    id: "LCO1",
                    courseName: "Django Full Stack",
                    subtitle: "Learn Django to become freelance ready",
                    price: 199,
                    courseImage: "django.png",
                    url: "https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready"
                },
                {
                    id: "LCO2",
                    courseName: "Interview Preparation",
                    subtitle: "Cracking the Tech Interview",
                    price: 999,
                    courseImage: "interview.png",
                    url: "https://courses.learncodeonline.in/learn/Cracking-the-Tech-Interview"
                },
                {
                    id: "LCO3",
                    courseName: "React Native",
                    subtitle: "React Native Design",
                    price: 799,
                    courseImage: "rn.png",
                    url: "https://courses.learncodeonline.in/learn/react-native-design"
                }
            ],
            selectedCourses: []
        }
    },
    computed: {
        // Whenever totalPrice() is invoked, it always has the latest value for this.selectedCoursesd
        totalPrice(){
            return this.selectedCourses.reduce((acc, curr)=>{
                return acc + curr.price;
            },0);
        }
    },
    methods: {
        openCourseDetail (url){
            console.log(`url ${url}`);
            window.open(url);
        },
        addToCart(course){
            this.selectedCourses.push(course);
        }
    },
}

Vue.createApp(App).mount('#vue-app')