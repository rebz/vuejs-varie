<template>

    <header class="CoreHeader Container">

        <div class="CoreHeader__con">

            <code>layouts/core/CoreHeader.vue</code>

            <core-navigation></core-navigation>

            <core-sub-navigation></core-sub-navigation>

        </div>

    </header>

</template>

<script>
    import Vue from "vue";
    import CoreNavigation from './CoreNavigation.vue'
    import CoreSubNavigation from './CoreSubNavigation.vue'

    export default Vue.extend({
        components: {
            CoreNavigation,
            CoreSubNavigation
        }
    });
</script>
