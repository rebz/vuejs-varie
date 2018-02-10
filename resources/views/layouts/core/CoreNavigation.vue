<template>

    <div class="CoreNavigation">

        <code>layouts/core/CoreNavigation.vue</code>

        <div class="CoreNavigation__con">

            <div class="CoreNavigation__actions">

                <button @click="navBackward">
                    Back
                </button>

                <button>
                    Settings
                </button>

                <button @click="navForward">
                    Forward
                </button>

            </div>

            <nav>

                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>

                <router-link :to="{ name: 'events' }">Events</router-link>

                <router-link :to="{ name: 'people' }">People</router-link>

                <router-link :to="{ name: 'places' }">Places</router-link>

            </nav>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    export default Vue.extend({

        mounted() {
            console.info(this.$router)
        },

        methods: {

            navBackward() {
                this.$router.go(-1)
            },

            navForward() {
                this.$router.go(1)
            }

        }
    });
</script>
