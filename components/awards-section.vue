<script setup lang="ts">
import { isFormal } from '../utils/formal.js';
import SectionTitle from './section-title.vue';
import AwardListing from './award-listing.vue';

const hackathonLinks = [
	{
		text: isFormal ? 'Projects' : 'portfolio',
		href: 'https://devpost.com/leondreamed'
	}
];

const htnLinks = [
	{
		text: isFormal ? 'Website' : 'website',
		href: 'https://hackthenorth.com'
	}
];

const ulhacksLinks = [
	{
		text: isFormal ? 'Website' : 'website',
		href: 'https://ulhacks.com'
	}
];

const cacLinks = [
	{
		text: isFormal ? 'Website' : 'website',
		href: 'https://www.congressionalappchallenge.us/20-md08'
	}
];

const nebulaChallengeLinks = [
	{
		text: isFormal ? 'Website' : 'website',
		href: 'https://www.nebulachallenge.org/2020-nebula-challenge-summary'
	}
];

const typingLinks = [
	{
		text: '~160 wpm'
	},
	{
		text: isFormal ? 'Monkeytype' : 'monkeytype',
		href: 'https://monkeytype.com/profile/leondreamed'
	},
	{
		text: isFormal ? 'TypeRacer' : 'typeracer',
		href: 'https://data.typeracer.com/pit/profile?user=leondreamed'
	}
];
</script>

<template>
	<div class="flex flex-col">
		<SectionTitle
			emoji="💫"
			:title="isFormal ? 'Awards & Activities' : 'awards & activities'"
		/>
		<div class="flex flex-col gap-y-4">
			<AwardListing
				:title="
					isFormal ? '17-time Hackathon Winner' : '17-time hackathon winner'
				"
				:links="hackathonLinks"
			/>
			<AwardListing
				:links="htnLinks"
				:title="
					isFormal
						? 'Judge @ Hack the North 2023'
						: 'judge @ hack the north 2023'
				"
			/>
			<AwardListing
				:title="
					isFormal
						? 'Lead Organizer @ ULHacks 2021'
						: 'lead organizer @ ulhacks 2021'
				"
				:links="ulhacksLinks"
			/>
			<AwardListing
				:links="cacLinks"
				:title="
					isFormal
						? '2020 Congressional App Challenge Winner'
						: '2020 congressional app challenge winner'
				"
			/>
			<AwardListing
				:links="nebulaChallengeLinks"
				:title="
					isFormal
						? '3rd Place @ Nebula Challenge Entrepreneurship Competition'
						: '3rd place @ nebula challenge entrepreneurship competition'
				"
			/>
			<AwardListing
				v-if="!isFormal"
				:links="typingLinks"
				:title="
					isFormal
						? 'Top 250 Fastest Typists Worldwide'
						: 'top 250 fastest typists worldwide'
				"
			/>
		</div>
	</div>
</template>
