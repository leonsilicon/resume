<script setup lang="ts">
import HeaderSection from '../components/header-section.vue';
import MembershipsSection from '../components/memberships-section.vue';
import ExperiencesSection from '../components/experiences-section.vue';
import AwardsSection from '../components/awards-section.vue';
import FooterSection from '../components/footer-section.vue';
</script>

<template>
	<div class="flex flex-col h-full">
		<div class="px-4 py-8">
			<HeaderSection />

			<div class="flex flex-row gap-x-10 px-4 mt-10">
				<ExperiencesSection />

				<div class="flex flex-col gap-y-4 w-3xl">
					<MembershipsSection />
					<div class="flex-1"></div>
					<AwardsSection />
				</div>
			</div>
		</div>

		<div class="flex-1"></div>

		<div class='p-4'>
			<FooterSection />
		</div>
	</div>
</template>

<style>
@font-face {
	font-family: 'Monaco';
	src: url('fonts/monaco-regular.ttf') format('truetype');
}

@font-face {
	font-family: 'Consolas';
	src: url('fonts/consolas-regular.ttf') format('truetype');
}
</style>
