<script setup>
import Hero from '../components/Hero.vue'
</script>

<template>
    <div class="bg-white">
        <!-- Hero Section -->
        <Hero />

        <!-- Content Section -->
        <div class="container mx-auto px-4 text-black">
            <h2 class="font-bold mb-6 text-center text-4xl">Wilting Point Forecast - 08/10/2023</h2>
            <p class="text-xl mb-6">
                Wildfires are a pressing issue in Andalucía, particularly during the arid months. A key metric aiding in
                wildfire prediction is the wilting point of the soil, which relates to soil moisture and vegetation health.
            </p>

            <!-- Image of the Wilting Point -->
            <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img src="/wiltingpoint.png" alt="Wilting Point Map" width="2432" height="1442"
                    class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
            </div>

            <p class="p-8 text-lg">
                The map illustrates the number of days until each plot in Andalucía reaches its wilting point. When this
                value is near 0, it indicates that the soil moisture is critically low, making the region more susceptible
                to wildfires. Regularly monitoring these values empowers us to anticipate potential fire risks and implement
                preventive measures.
            </p>
    </div>
</div></template>
