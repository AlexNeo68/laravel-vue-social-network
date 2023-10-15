<template>
    <h1 class="text-3xl font-bold underline">The App.vue component</h1>
    <h2>Hello people and come on go coding!!</h2>
    <div>
        <ul>
            <li><router-link to="/index">Index</router-link></li>
            <li><router-link to="/page">Page</router-link></li>
        </ul>
    </div>
    <router-view></router-view>
</template>
