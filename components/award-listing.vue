<script setup lang="ts">
const { title } = defineProps<{
	title: string;
	links?: {
		text: string;
		href?: string;
	}[];
}>();
</script>

<template>
	<div class="flex flex-col">
		<div class="font-bold text-lg leading-5">
			{{ title }}
		</div>
		<div
			v-if="links !== undefined"
			class="flex flex-row items-center text-xs mt-1"
		>
			<template v-for="(link, index) in links">
				<a
					v-if="link.href !== undefined"
					:href="link.href"
					class="underline text-blue-500"
					>{{ link.text }}</a
				>
				<span v-else class='text-gray-500'>{{ link.text }}</span>
				<span v-if="index < links.length - 1" class="text-gray-300"
					>&nbsp;|&nbsp;</span
				>
			</template>
		</div>
	</div>
</template>
