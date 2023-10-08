<template>
    <div id="app">
        <div id="map" style="height: 500px;"></div>
    </div>
</template>


<script>
import axios from "axios";
import L from "leaflet";

export default {
    data() {
        return {
            MAP_KEY: "1c2b5af3e9e24b0e7349fe33ad064069",
            map: null,
            markers: [],
        };
    },
    async mounted() {
        const esp_url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${this.MAP_KEY}/MODIS_NRT/ESP/10`;
        try {
            const response = await axios.get(esp_url);
            const data = response.data.split("\n").slice(1); // Exclude header
            const pointsData = data.map(line => {
                const items = line.split(",");
                return {
                    lat: parseFloat(items[1]),
                    lon: parseFloat(items[2]),
                    brightness: parseFloat(items[3]),
                    confidence: parseInt(items[10], 10),
                };
            });

            this.initializeMap(pointsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },
    methods: {
        initializeMap(pointsData) {
            this.map = L.map("map").setView([40.4637, -3.7492], 6);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            pointsData.forEach(pointData => {
                const marker = L.marker([pointData.lat, pointData.lon])
                    .addTo(this.map)
                    .bindTooltip(`Brightness: ${pointData.brightness}, Confidence: ${pointData.confidence}`);

                marker.on("click", () => this.validatePoint(pointData));
                this.markers.push(marker);
            });
        },
        validatePoint(pointData) {
            const confirmMessage = `Do you want to validate the point at latitude: ${pointData.lat}, longitude: ${pointData.lon}? Brightness: ${pointData.brightness}, Confidence: ${pointData.confidence}`;
            if (window.confirm(confirmMessage)) {
                this.sendEmail(pointData);
            }
        },
        sendEmail(pointData) {
            // Mock sending an email - in a real scenario, you'd make an HTTP request to a server-side endpoint that handles sending emails.
            console.log(`Sending email about validation of point: ${JSON.stringify(pointData)} to fuegomalaga@gmail.com`);
        }
    }
};

</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
