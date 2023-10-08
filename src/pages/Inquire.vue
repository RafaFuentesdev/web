<script setup>
import Hero from '../components/Hero.vue'

// Data for Málaga
const inquiries = [
    { Año: 1990, Conatos: 215, Incendios: 172, Total: 387 },
    { Año: 1991, Conatos: 167, Incendios: 147, Total: 314 },
    { Año: 1992, Conatos: 164, Incendios: 140, Total: 304 },
    { Año: 1993, Conatos: 149, Incendios: 123, Total: 272 },
    { Año: 1994, Conatos: 98, Incendios: 87, Total: 185 },
    { Año: 1995, Conatos: 69, Incendios: 50, Total: 119 },
    { Año: 1996, Conatos: 21, Incendios: 10, Total: 31 },
    { Año: 1997, Conatos: 37, Incendios: 16, Total: 53 },
    { Año: 1998, Conatos: 58, Incendios: 37, Total: 95 },
    { Año: 1999, Conatos: 53, Incendios: 23, Total: 76 },
    { Año: 2000, Conatos: 61, Incendios: 26, Total: 87 },
    { Año: 2001, Conatos: 73, Incendios: 40, Total: 113 },
    { Año: 2002, Conatos: 77, Incendios: 47, Total: 124 },
    { Año: 2003, Conatos: 71, Incendios: 24, Total: 95 },
    { Año: 2004, Conatos: 85, Incendios: 34, Total: 119 },
    { Año: 2005, Conatos: 78, Incendios: 42, Total: 120 },
    { Año: 2006, Conatos: 53, Incendios: 25, Total: 78 },
    { Año: 2007, Conatos: 57, Incendios: 23, Total: 80 },
    { Año: 2008, Conatos: 63, Incendios: 12, Total: 75 },
    { Año: 2009, Conatos: 68, Incendios: 28, Total: 96 },
    { Año: 2010, Conatos: 34, Incendios: 22, Total: 56 },
    { Año: 2011, Conatos: 51, Incendios: 20, Total: 71 },
    { Año: 2012, Conatos: 87, Incendios: 23, Total: 110 },
    { Año: 2013, Conatos: 79, Incendios: 31, Total: 110 },
    { Año: 2014, Conatos: 66, Incendios: 20, Total: 86 },
    { Año: 2015, Conatos: 57, Incendios: 30, Total: 87 },
    { Año: 2016, Conatos: 73, Incendios: 17, Total: 90 },
    { Año: 2017, Conatos: 79, Incendios: 32, Total: 111 },
    { Año: 2018, Conatos: 51, Incendios: 13, Total: 64 },
    { Año: 2019, Conatos: 85, Incendios: 25, Total: 110 },
    { Año: 2020, Conatos: 57, Incendios: 21, Total: 78 },
    { Año: 2021, Conatos: 34, Incendios: 18, Total: 52 }
];


</script>

<template>
    <Hero />
    <div class="px-4 sm:px-6 lg:px-8 bg-white">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="font-semibold leading-6 text-gray-900 text-xl">Inquiries</h1>
                <p class="mt-2 text-gray-700 text-m">A list of inquiries by year and province including the number of
                    conatos, incendios, and the total.</p>
            </div>
            <!-- You can add more controls here if needed -->
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-2 lg:-mx-4">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Year</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Conatos
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Incendios
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr v-for="inquiry in inquiries" :key="inquiry.Año" class="even:bg-gray-50">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{{
                                    inquiry.Año }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ inquiry.Conatos }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ inquiry.Incendios }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ inquiry.Total }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</div></template>
