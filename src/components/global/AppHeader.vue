<template>
    <header>
        <h1>My Vue App</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/members">Members</router-link> |
            <router-link to="/workgroups">Workgroups</router-link>
            <router-link to="/member/1620">Member</router-link> |
            <router-link to="/workgroup/420">Workgroup</router-link>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #f4f4f4;
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
