<script>
import Map from './Map.vue';

export default {
    components: {
        Map
    },
    data() {
        return {
            showMap: false
        }
    },
    methods: {
        displayMap() {
            this.showMap = true;
        }
    }
}
</script>


<template>
    <div class="bg-white">
        <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seen a Fire in Malaga?<br />Alert Us
                    Immediately!</h2>
                <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Your vigilance can safeguard our community.
                    Report fires in real-time for rapid response.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <button @click="displayMap"
                        class="w-full sm:w-auto rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Report
                        Malaga Fire Now</button>
                </div>
                    <Map v-if="showMap" />
            </div>
        </div>
</div></template>
