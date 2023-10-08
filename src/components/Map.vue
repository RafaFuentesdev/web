<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

const lat = ref(0);
const long = ref(0);
const map = ref();
const mapContainer = ref();

onMounted(() => {
    map.value = L.map(mapContainer.value).setView([36.6987387, -4.4390678], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value);
});
// Add a reference for the current marker
const currentMarker = ref(null);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            lat.value = position.coords.latitude;
            long.value = position.coords.longitude;
            map.value.setView([lat.value, long.value], 15);

            // If a marker already exists, remove it
            if (currentMarker.value) {
                currentMarker.value.remove();
            }

            // Now add the new marker and store it in the reference
            currentMarker.value = L.marker([lat.value, long.value], { draggable: true })
                .addTo(map.value)
                .on("dragend", (event) => {
                    console.log(event);
                });
        });
    }
}

</script>

<template>
    <button @click="getLocation()" >Get Location</button>
    <p>{{ lat }} , {{ long }}</p>
    <div ref="mapContainer" style="width: 400px; height: 400px"></div>
</template>
