<template>

    <div class="CoreNavigation">

        <code>layouts/core/CoreNavigation.vue</code>

        <nav class="CoreNavigation__con">

            <router-link :to="{ name: 'people' }">People</router-link>

        </nav>

    </div>

</template>

<script>
    import Vue from "vue";
    export default Vue.extend({});
</script>
