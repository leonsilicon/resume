<script setup lang="ts">
import MembershipListing from './membership-listing.vue';
import SectionTitle from './section-title.vue';
import { isFormal } from '#utils/formal.ts';

const neoLinks = [
	{
		text: isFormal.value ? 'Website' : 'website',
		href: 'https://neo.com/accelerator'
	}
];

const founderUniversityLinks = [
	{
		text: isFormal.value ? 'Website' : 'website',
		href: 'https://founder.university'
	},
	{
		text: isFormal.value ? 'Live Pitch' : 'live pitch',
		href: 'https://www.youtube.com/watch?v=ZYN0xdP4ORQ&t=1549s'
	}
];

const replitLinks = [
	{
		text: isFormal.value ? 'Announcement' : 'announcement',
		href: 'https://blog.replit.com/RV-teams'
	}
];
</script>

<template>
	<div class="flex flex-col">
		<SectionTitle
			emoji="🌱"
			:title="isFormal ? 'Memberships' : 'memberships'"
		/>

		<div class="flex flex-col gap-y-2">
			<MembershipListing
				:name="isFormal ? 'Neo Accelerator \'23' : 'neo accelerator \'23'"
				imageSrc="/assets/images/neo-logo.jpg"
				:links="neoLinks"
				:description="
					isFormal
						? 'Accepted as one of 20 teams (out of over 2,000 applications) into Neo Accelerator\'s second startup batch'
						: 'accepted as one of 20 teams (out of over 2,000 applications) into neo accelerator\'s second startup batch'
				"
			/>
			<MembershipListing
				:name="
					isFormal
						? 'Founder.University Cohort 3'
						: 'founder.university cohort 3'
				"
				imageSrc="/assets/images/founder-university-logo.jpg"
				:links="founderUniversityLinks"
				:description="
					isFormal
						? 'Selected as one of 20 startups (out of ~200 startups) to pitch live to Jason Calacanis and offered $25k in funding'
						: 'selected as one of 20 startups (out of ~200 startups) to pitch live to jason calacanis & offered $25k in funding'
				"
			/>
			<MembershipListing
				:name="isFormal ? 'Replit Ventures 2022' : 'replit ventures 2022'"
				imageSrc="/assets/images/replit-logo.jpg"
				:links="replitLinks"
				:description="
					isFormal
						? 'Selected alongside 12 other teams (out of 150+ applications) to participate in a 12-week startup incubator and received $1k of non-dilutive funding'
						: 'selected alongside 12 other teams (out of 150+ applications) to participate in a 12-week startup incubator and received $1k of non-dilutive funding'
				"
			/>
		</div>
	</div>
</template>
