<template>
 <main>
  <appHeader title="Movie List App"/>
  <div class="container mt-3">
    <div class="row">
      <div class="offset-md-3 col-lg-6 p-2">
        <div class="card card-body mb-2">
          <movie-form :addMovie="addMovie"/>
          <movie-list :movies="movies" :deleteMovie="deleteMovie"/>
        </div>
      </div>
    </div>
  </div>
 </main>
</template>

<script>

import appHeader from './layouts/app-header.vue';
import movieForm from './components/movie-form.vue';
import movieList from './components/movie-list.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    movieForm,
    movieList
  },
  data() {
    return {
      movies: JSON.parse(localStorage.getItem('@movies')) || []
    }
  },
  methods: {
    deleteMovie: function (id) {
      const index = this.movies.findIndex(movie => movie.id === id);
      this.movies.splice(index, 1);
      localStorage.setItem("@movies",JSON.stringify(this.movies));
      // this.movies = this.movies.filter(movie => movie.id !== id);
    },
    addMovie: function(movie) {
      this.movies.push(movie);
      localStorage.setItem("@movies",JSON.stringify(this.movies));
    }
  }
}
</script>

<style>
* {
  padding: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  background-image: url("./assets/lco-movie.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>

