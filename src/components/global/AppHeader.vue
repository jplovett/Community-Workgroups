<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Community-Workgroups</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/members" class="nav-link" href="#">Members</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/workgroups" class="nav-link" href="#">Workgroups</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}
.navbar-brand {
    text-decoration: none;
}
nav a {
    margin: 0 10px;
}

/* Add your active link styling here */
.router-link-active {
    font-weight: bold;
    color: #42b983;
    /* A nice green color for active links */
    border-bottom: 2px solid #42b983;
    padding-bottom: 2px;
}
</style>