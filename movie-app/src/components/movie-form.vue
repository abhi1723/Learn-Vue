<template>
    <form @submit.prevent="onSubmit" class="text-center">
        <input 
            type="text"
            class="form-control mb-2"
            placeholder="Awesome Movie name"
            name="name"
            v-model="name"
        >
        <input 
            type="text"
            class="form-control mb-2"
            placeholder="Movie URL"
            name="url"
            v-model="url"
        >
        <button class="btn btn-info btn-block" type="submit">Add Movie</button>
    </form>

</template>

<script>

import { v4 as uuidv4 } from 'uuid';
export default {
    name: 'Movie-Form',
    props: {
        addMovie: Function
    },
    data(){
        return {
            name: "",
            url: ""
        }
    },
    methods: {
        onSubmit: function() {
            this.addMovie({
                name: this.name,
                url: this.url,
                uid: uuidv4(),
                date: Date.now()
            });
            this.name = '';
            this.url = '';
        }       
    },
}

</script>

<style>

</style>