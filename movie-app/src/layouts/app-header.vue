<template>
    <nav class="nav-bar nav-bar-dark bg-primary">
        <a href="" class="navbar-brand">
            <img src="../assets/logo-white.png" height="30" width="30" alt="LCO Logo" />
        </a>
        <span class="navbar-text text-white">
            {{ title }}
        </span>
    </nav>
</template>

<script>

export default {
    name: 'App-Header',
    props: [
        "title"
    ]
}
    
</script>

<style>

</style>