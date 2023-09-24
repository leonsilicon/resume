<script setup lang="ts">
import { isFormal } from '../utils/formal.js';

const { name, description } = defineProps<{
	name: string;
	imageSrc: string;
	links?: {
		text: string;
		href: string;
	}[];
	description: string;
}>();
</script>

<template>
	<div class="flex flex-row">
		<img
			v-if="!isFormal"
			:src="imageSrc"
			class="mt-1.5 mr-3 w-12.5 h-12.5 rounded-md"
		/>
		<div class="flex flex-col">
			<div class="flex flex-row">
				<div class="font-bold text-lg">{{ name }}</div>
			</div>
			<div
				v-if="links !== undefined"
				class="flex flex-row items-center text-xs"
			>
				<template v-for="(link, index) in links">
					<a :href="link.href" class="underline text-blue-500">{{
						link.text
					}}</a>
					<span v-if="index < links.length - 1" class="text-gray-300"
						>&nbsp;|&nbsp;</span
					>
				</template>
			</div>
			<div class="mt-1 text-sm">{{ description }}</div>
		</div>
	</div>
</template>
