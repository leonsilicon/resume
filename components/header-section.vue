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
					? "Developer/Creator, Co-founder @ Tunnel (Neo '23)"
					: "developer/creator, co-founder @ tunnel (neo '23)"
			}}
		</span>
	</div>
</template>
