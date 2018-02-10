<template>

    <div class="Core">

        <div class="Core__con">

            <code>layouts/core.vue</code>

            <core-header></core-header>

            <router-view></router-view>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    import CoreHeader from './core/CoreHeader.vue'

    export default Vue.extend({
        components: {
            CoreHeader
        }
    });
</script>
