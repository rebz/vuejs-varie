<template>

    <header class="CoreHeader">

        <div class="CoreHeader__con">

            <code>layouts/core/CoreHeader.vue</code>

            <core-navigation></core-navigation>

        </div>

    </header>

</template>

<script>
    import Vue from "vue";
    import CoreNavigation from './CoreNavigation.vue'

    export default Vue.extend({
        components: {
            CoreNavigation
        }
    });
</script>
