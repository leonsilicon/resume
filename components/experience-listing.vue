<script setup lang="ts">
import { isFormal } from '#utils/formal.ts';

const { headline, dateString, link } = defineProps<{
	imageSrc: string;
	headline: string;
	dateString: string;
	link?: {
		text: string;
		href: string;
	};
	tagline: string;
}>();
</script>

<template>
	<div>
		<div class="flex flex-row items-start">
			<img
				v-if="!isFormal"
				:src="imageSrc"
				class="mt-1.5 mr-3 w-12 h-12 rounded-md"
			/>
			<div>
				<h2 class="text-lg font-bold">{{ headline }}</h2>
				<div class="text-sm italic w-sm leading-4.5">
					{{ tagline }}
				</div>
				<div class="text-xs mt-1 mb-2">
					<span class="text-gray-700 font-light">{{ dateString }}</span>
					<template v-if="link !== undefined">
						<span class="text-gray-300">&nbsp;|&nbsp;</span>
						<a :href="link.href" class="underline text-blue-500">{{
							link.text
						}}</a>
					</template>
				</div>
			</div>
		</div>

		<div class="flex flex-col text-sm gap-y-2">
			<slot name="description"></slot>
		</div>
	</div>
</template>
