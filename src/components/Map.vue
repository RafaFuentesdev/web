<script setup>
import { onMounted, ref, watch } from "vue";
import L from "leaflet";

const lat = ref(0);
const long = ref(0);
const map = ref();
const mapContainer = ref();
const loading = ref(true); // to determine if the location is being loaded

onMounted(() => {
    map.value = L.map(mapContainer.value).setView([36.717425675624035, -4.411479662934813], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value);

    getLocation();
    map.value.on('click', onMapClick);
});

const currentMarker = ref(null);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat.value = position.coords.latitude;
            long.value = position.coords.longitude;
            map.value.setView([lat.value, long.value], 15);

            if (currentMarker.value) {
                currentMarker.value.remove();
            }

            currentMarker.value = L.marker([lat.value, long.value])
                .addTo(map.value);
            loading.value = false; // location obtained, stop loading
        });
    } else {
        // Geolocation not available or error occurred
        loading.value = false;
    }
}

function onMapClick(e) {
    lat.value = e.latlng.lat;
    long.value = e.latlng.lng;

    if (currentMarker.value) {
        currentMarker.value.remove();
    }

    currentMarker.value = L.marker([lat.value, long.value])
        .addTo(map.value);
}

function reportFire() {
    if (currentMarker.value) {
        const { lat, lng } = currentMarker.value.getLatLng();
        // Store the reported fire in localStorage
        const userFires = JSON.parse(localStorage.getItem("userReportedFires") || "[]");
        userFires.push({ lat, lng });
        localStorage.setItem("userReportedFires", JSON.stringify(userFires));
    }
}

</script>

<template>
    <div class="flex flex-col items-center justify-center my-8 w-full sm:w-auto lg:w-3/4 xl:w-2/3">
        <div ref="mapContainer" class="w-full sm:w-96 lg:w-full h-96 lg:h-[50vh]"></div>
        <div v-if="loading" class="mt-4 flex items-center space-x-2">
            <span class="loader"></span> <!-- Loading spinner -->
            <span class="text-black">Obtaining your location...</span>
        </div>
        <transition name="fade">
            <button v-if="!loading" @click="reportFire"
                class="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-transform transform scale-90 hover:scale-100 font-bold text-lg">
                Submit Fire Location
            </button>
        </transition>
    </div>
</template>



<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-15px);
    }

    60% {
        transform: translateY(-7px);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.loader {
    border: 4px solid #f3f3f3;
    /* Increased border width */
    border-radius: 50%;
    border-top: 4px solid #f00;
    /* Increased border width */
    width: 50px;
    /* Increased width */
    height: 50px;
    /* Increased height */
    animation: spin 1s linear infinite;
}

.fade-enter-active {
    animation: bounce 1s, fadeIn 1s;
}

.fade-enter {
    opacity: 0;
}

/* The .buttonAppear styles are not being used in the template, but I've retained them here in case you need them in the future. */
.buttonAppear-enter-active,
.buttonAppear-leave-active {
    transition: opacity 1s, transform 1s;
}

.buttonAppear-enter,
.buttonAppear-leave-to

/* .buttonAppear-leave-active in <2.1.8 */
    {
    opacity: 0;
    transform: scale(0.7);
    /* Start at 70% of the original size */
}
</style>

