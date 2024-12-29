<script setup lang="ts">
import HeaderSection from '#components/header-section.vue';
import MembershipsSection from '#components/memberships-section.vue';
import ExperiencesSection from '#components/experiences-section.vue';
import AwardsSection from '#components/awards-section.vue';
import FooterSection from '#components/footer-section.vue';
</script>

<template>
	<div class="flex flex-col m-[0.5in] absolute inset-0">
        <div class='mb-4'>
            <HeaderSection />
        </div>

        <div class="flex flex-row gap-x-10">
            <ExperiencesSection />

            <div class="flex flex-col gap-y-4 w-3xl">
                <MembershipsSection />
                <div class="flex-1"></div>
                <AwardsSection />
            </div>
        </div>

		<div class="flex-1"></div>
        <FooterSection />
	</div>
</template>

<style>
@font-face {
	font-family: 'Monaco';
	src: url('/assets/fonts/monaco-regular.ttf') format('truetype');
}

@font-face {
	font-family: 'Consolas';
	src: url('/assets/fonts/consolas-regular.ttf') format('truetype');
}
</style>
