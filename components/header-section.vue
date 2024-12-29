<script setup lang="ts">
import { isFormal } from '#utils/formal.ts';
</script>

<template>
	<div class="flex flex-col items-center font-['Consolas']">
		<div class="text-3xl font-bold" @click="isFormal = !isFormal">
			{{ isFormal ? 'Leon Si' : 'leon si' }}
		</div>
		<span>
			{{
				isFormal
					? "Prev. Co-Founder & CTO @ Tunnel (Neo '23) | Influencer (@leonsilicon)"
					: "prev. co-founder & cto @ tunnel (neo '23) | influencer (@leonsilicon)"
			}}
		</span>
	</div>
</template>
