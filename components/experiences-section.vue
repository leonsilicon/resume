<script setup lang="ts">
import SectionTitle from './section-title.vue';
import ExperienceListing from './experience-listing.vue';
import { isFormal } from '../utils/formal';
</script>

<template>
	<div class="flex flex-col items-stretch">
		<SectionTitle
			emoji="🦄"
			:title="isFormal ? 'Experiences' : 'experiences'"
		/>
		<div class="flex flex-col gap-y-4">
			<ExperienceListing
				imageSrc="/assets/images/endex-logo.jpg"
				:headline="
					isFormal ? 'Founding Engineer @ Endex' : 'founding engineer @ endex'
				"
				:dateString="isFormal ? 'May 2024 - November 2024' : 'may 2022 - november 2024'"
				:tagline="`${
					isFormal ? 'Endex' : 'endex'
				} is building AI-enabled financial infrastructure`"
				:link="{ href: 'https://endex.ai', text: 'www.endex.ai' }"
			>
				<template #description>
					<div>
						-
						{{
							isFormal
								? 'Was the 2nd engineering hire at Endex, which raised a $12 million seed round from OpenAI at a $60 million valuation'
								: 'was the 2nd engineering hire at endex, which raised a $12 million seed round from openai at a $60 million valuation'
						}}
					</div>
					<div>
						-
						{{
							isFormal
								? "Unified separate frontend/backend repos into a monorepo and set up the core CI/CD pipelines, and integrated app-wide database-backed persistence"
								: "unified separate frontend/backend repos into a monorepo, set up the core ci/cd pipelines, and integrated app-wide database-backed persistence"
						}}
					</div>
				</template>
			</ExperienceListing>
			<ExperienceListing
				imageSrc="/assets/images/tunnel-logo.jpg"
				:headline="
					isFormal ? 'Co-Founder @ Tunnel' : 'co-founder @ tunnel'
				"
				:dateString="isFormal ? 'April 2023 - May 2024' : 'apr 2023 - may 2024'"
				:tagline="`${
					isFormal ? 'Tunnel' : 'tunnel'
				} transforms localhost into the collaborative workspace for product development`"
				:link="{ href: 'https://tunnel.dev', text: 'www.tunnel.dev' }"
			>
				<template #description>
					<div>
						-
						{{
							isFormal
								? "Built and maintained Tunnel's backend, CLI, and cloud infrastructure, scaling it to over 1,000 users"
								: "built and maintained tunnel's backend, cli, and cloud infrastructure, scaling it to over 1,000 users"
						}}
					</div>
					<div v-if="isFormal">
						- Raised ~$750k in pre-seed funding; investors include
						<a class="underline" href="https://neo.com">Neo</a> (as part of the
						Neo Accelerator) and
						<a class="underline" href="https://av.vc">Alumni Ventures</a>
					</div>
					<div v-else>
						- raised ~$750k in pre-seed funding; investors include
						<a class="underline" href="https://neo.com">neo</a> (as part of the
						neo accelerator) and
						<a class="underline" href="https://av.vc">alumni ventures</a>
					</div>
				</template>
			</ExperienceListing>
			<ExperienceListing
				imageSrc="/assets/images/dialect-logo.jpg"
				:headline="isFormal ? 'Co-Founder @ Dialect' : 'co-founder @ dialect'"
				:dateString="isFormal ? 'May 2022 - April 2023' : 'may 2022 - apr 2023'"
				:tagline="`${
					isFormal ? 'Dialect' : 'dialect'
				} helps you fix programming bugs by connecting you with a professional in a one-on-one video call`"
			>
				<template #description>
					<span>
						-
						{{
							isFormal
								? 'Served as the primary mentor on the platform, spending 100+ hours helping users solve complex bugs with a 97% success rate'
								: 'served as the primary mentor on the platform, spending 100+ hours helping users solve complex bugs with a 97% success rate'
						}}
					</span>
					<span>
						-
						{{
							isFormal
								? 'Prepared and presented a pitch deck live to Jason Calacanis which led to a $25k investment offer'
								: 'prepared and presented a pitch deck live to jason calacanis which led to a $25k investment offer'
						}}
					</span>
				</template>
			</ExperienceListing>
			<ExperienceListing
				image-src="/assets/images/tabulo-logo.jpg"
				:headline="
					isFormal ? 'Co-Founder @ Tabulo' : 'co-founder @ tabulo'
				"
				:dateString="
					isFormal ? 'April 2020 - September 2021' : 'apr 2020 - sep 2021'
				"
				:tagline="`${
					isFormal ? 'Tabulo' : 'tabulo'
				} lets teachers use their phone or tablet's touchscreen as a drawing tablet for virtual lessons`"
			>
				<template #description>
					<span v-if="isFormal">
						- Developed the initial prototype of Tabulo at a week-long online
						hackathon; awarded 1<sup>st</sup> place by a panel of judges
						including Steve Chen, co-founder of YouTube
					</span>
					<span v-else>
						- developed the initial prototype of tabulo at a week-long online
						hackathon; awarded 1<sup>st</sup> place by a panel of judges
						including steve chen, co-founder of youtube
					</span>
					<span>
						-
						{{
							isFormal
								? "Built and scaled Tabulo's backend and cloud infrastructure to support hundreds of concurrent users, including by teachers in Maryland's largest school district"
								: "built and scaled tabulo's backend and cloud infrastructure to support hundreds of concurrent users, including by teachers in maryland's largest school district"
						}}
					</span>
				</template>
			</ExperienceListing>
		</div>
	</div>
</template>
