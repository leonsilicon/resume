<script setup lang="ts">
import { isFormal } from '#utils/formal.ts';

const { emoji, title } = defineProps<{
	emoji: string;
	title: string;
}>();
</script>

<template>
	<h1 class="text-2xl mb-4 flex flex-row">
		<div v-if="!isFormal" class='mr-1.5'>{{ emoji }}</div>
		<span class="font-black tracking-wide">{{ title }}</span>
	</h1>
</template>
