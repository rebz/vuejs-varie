<template>

    <div class="CoreBody Container">

        <div class="CoreBody__con">

            <code>layouts/core/CoreBody.vue</code>

            <transition :name="transitionName">

                <router-view></router-view>

            </transition>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";

    export default Vue.extend({

        created() {
            this.$router.options.routes.forEach(route => {
                console.info({
                    name: route.name
                    , path: route.path
                })
            })
        },

        data() {
            return {
                transitionName: 'test'
            }
        },

        watch: {

            '$route' (to, from) {

                console.info(to)
                console.info(from)

                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length

                Vue.set(this, 'transitionName', toDepth < fromDepth ? 'slide-right' : 'slide-left')

            }

        }

    });
</script>
