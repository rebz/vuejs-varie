<template>

    <div class="Core Container">

        <div class="Core__con">

            <code>layouts/core.vue</code>

            <core-header></core-header>

            <core-body></core-body>

            <!--<router-view name="module"></router-view>-->

            <p>notifications component goes here</p>

            <p>global ui elements go here</p>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    import CoreHeader from './core/CoreHeader.vue'
    import CoreBody from './core/CoreBody.vue'

    export default Vue.extend({

        components: {
            CoreHeader,
            CoreBody
        }

    });
</script>
