<script setup lang="ts">
import { LinkedinIcon, GithubIcon } from 'vue3-simple-icons';
import { isFormal } from '../utils/formal';
import { LinkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
	<div class="grid grid-cols-[auto,auto] font-['Monaco'] text-[0.8rem]">
		<div class="col-start-1 row-start-1 flex flex-row">
			leon@leonsilicon.com ~<span class="text-gray-200">/</span>Canada/Toronto
			<span class="text-gray-200">&nbsp;% open</span>
		</div>
		<span class="col-start-2 row-start-1 flex flex-row items-center">
			<span>--linkedin&nbsp;</span>
			<a
				class="flex flex-row items-center"
				href="https://linkedin.com/in/leonsilicon"
			>
				<span class="underline">https://linkedin.com/in/leonsilicon</span>
				&nbsp;
				<LinkedinIcon size="16" :class="!isFormal && 'fill-[#0077b5]'" />
			</a>
			<span class="text-gray-200">&nbsp;\</span>
		</span>
		<div class="col-start-1 row-start-2 flex flex-row">
			<div class="flex flex-row items-center">
				<span>--github&nbsp;</span>
				<a
					class="flex flex-row items-center"
					href="https://github.com/leonsilicon"
				>
					<span class="underline">https://github.com/leonsilicon</span>
					&nbsp;
					<GithubIcon size="16" />
				</a>
			</div>
		</div>
		<div class="col-start-2 row-start-2 flex flex-row items-center">
			<span>--website&nbsp;&nbsp;</span>
			<a class="flex flex-row items-center" href="https://leonsilicon.com">
				<span class="underline">https://leonsilicon.com</span>
				&nbsp;
				<span v-if="isFormal"><LinkIcon class="h-4 w-4 text-black" /></span>
				<img
					v-else
					src="/assets/images/lion-profile.png"
					width="16"
					height="16"
					class="rounded-md"
				/>
			</a>
		</div>
	</div>
</template>
