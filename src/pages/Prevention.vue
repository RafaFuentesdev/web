<script setup>
import Hero from '../components/Hero.vue'
</script>

<template>
    <div class="bg-white py-8">
        <!-- Hero Section -->
        <Hero title="Fire Prevention" />

        <!-- Content Section -->
        <div class="container mx-auto px-4 text-black">
            <h2 class="text-2xl font-bold mb-6 text-center">Fire Prevention in Andalucía</h2>
            <p class="text-lg mb-6">
                Wildfires are a significant concern, especially during the dry months in Andalucía. Here are some tips to
                help prevent fires and protect our beautiful region.
            </p>

            <!-- Image of the Wilting Point -->
            <div class="flex justify-center mb-6">
                <img src="/wiltingpoint.png" alt="Wilting Point in Andalucía" class="rounded-lg shadow-md">
            </div>

            <p class="text-lg">
                The image above shows the wilting point in Andalucía, a crucial metric in understanding soil moisture and
                vegetation health. Monitoring such metrics can aid in predicting potential fire outbreaks and taking
                preventive measures.
            </p>
        </div>
    </div></template>
