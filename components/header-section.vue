<script setup lang="ts">
import { isFormal } from '../utils/formal.js';
</script>

<template>
	<div class="flex flex-col items-center font-['Consolas']">
		<div class="text-3xl font-bold">
			{{ isFormal ? 'Leon Si' : 'leon si' }}
		</div>
		<span>
			{{
				isFormal
					? "Delusional Hacker-Entrepreneur / Co-founder @ Tunnel (Neo '23)"
					: "delusional hacker-entrepreneur / co-founder @ tunnel (neo '23)"
			}}
		</span>
	</div>
</template>
