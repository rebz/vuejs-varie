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

        data() {
            return {
                transitionName: 'test'
            }
        },

        methods: {

            getRouteIndex(string) {
                return _.findIndex(this.$router.options.routes[1].children, (route) => {
                    if(route.path == string) {
                        return route
                    }
                })
            }

        },

        watch: {

            '$route' (to, from) {

                const toDepth = this.getRouteIndex(to.path.split('/').filter( v => v != '')[0])
                const fromDepth = this.getRouteIndex(from.path.split('/').filter( v => v != '')[0])

                Vue.set(this, 'transitionName', toDepth < fromDepth ? 'slide-right' : 'slide-left')

            }
        }

    });
</script>
