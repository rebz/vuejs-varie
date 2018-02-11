<template>

    <div class="PeopleIndex Container">

        <div class="PeopleIndex__con">

            <code>people/index.vue</code>

            <div class="PeopleIndex__list">

                <router-link :to="{ name: 'people-view', params: {person: item} }" v-for="(item, index) in users" :key="index">
                    {{ item }} - John Doe
                </router-link>

            </div>

        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    export default Vue.extend({

        data() {
            return {

                users: [1,2,3,4,5,6]

            }
        }

    });
</script>
