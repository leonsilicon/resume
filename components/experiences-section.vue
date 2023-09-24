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
		<div class="flex flex-col gap-y-6">
			<ExperienceListing
				imageSrc="/images/tunnel-logo.jpg"
				:headline="
					isFormal ? 'Co-founder & CTO @ Tunnel' : 'co-founder & cto @ tunnel'
				"
				:dateString="isFormal ? 'April 2023 - Present' : 'apr 2023 - present'"
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
								? 'Developed the very first prototype of Tunnel'
								: 'developed the very first prototype of tunnel'
						}}
					</div>
					<div>
						-
						{{
							isFormal
								? "Built and maintains Tunnel's backend and cloud infrastructure, scaling it to over 1,000 users"
								: "built and maintains tunnel's backend and cloud infrastructure, scaling it to over 1,000 users"
						}}
					</div>
					<div>
						- Leads a team of three engineers using GitHub + Linear for
						collaboration
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
				imageSrc="/images/dialect-logo.jpg"
				:headline="isFormal ? 'Co-founder @ Dialect' : 'co-founder @ dialect'"
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
								? 'Became the primary mentor on the platform and spent dozens of hours helping users solve complex bugs with a 95% success rate'
								: 'became the primary mentor on the platform and spent dozens of hours helping users solve complex bugs with a 95% success rate'
						}}
					</span>
					<span>
						-
						{{
							isFormal
								? 'Integrated various developer tools and built custom tooling to improve developer productivity which is now used daily at Tunnel'
								: 'integrated various developer tools and built custom tooling to improve developer productivity which is now used daily at tunnel'
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
				image-src="/images/tabulo-logo.jpg"
				:headline="
					isFormal ? 'Co-founder & CTO @ Tabulo' : 'co-founder & cto @ tabulo'
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
								? "Used by teachers in live virtual classes at Maryland's largest school district"
								: "used by teachers in live virtual classes @ maryland's largest school district"
						}}
					</span>
					<span>
						-
						{{
							isFormal
								? "Scaled Tabulo's backend and cloud infrastructure to support hundreds of concurrent users"
								: "scaled tabulo's backend and cloud infrastructure to support hundreds of concurrent users"
						}}
					</span>
				</template>
			</ExperienceListing>
		</div>
	</div>
</template>
