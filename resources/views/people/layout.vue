<template>

    <div class="People Container">

        <div class="People__con">

            <code>people/layout.vue</code>

            <router-view name="sidebar"></router-view>

            <router-view></router-view>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    export default Vue.extend({});
</script>
