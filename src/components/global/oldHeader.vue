<template>
    <header>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <router-link to="/" class="nav-link">Home</router-link> |
            <router-link to="/about" class="nav-link">About</router-link> |
            <router-link to="/members" class="nav-link">Members</router-link> |
            <router-link to="/workgroups" class="nav-link">Workgroups</router-link>
            <router-link to="/member/1620" class="nav-link">Member</router-link> |
            <router-link to="/workgroup/420" class="nav-link">Workgroup</router-link>
        </nav>
    </header>
</template>

<style scoped>
header {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
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
