<template>
	<Navbar />
	<section class="speaking" :class="{ 'light-mode': !isDarkMode }">
		<section class="banner-sec">
			<div class="title-con title-mod">
				<h2><span>/</span>Speaking Engagements</h2>
				<p>Here's a list of my speaking engagements i have done so far</p>
			</div>
			<div class="img-con">
				<img src="../assets/images/City JS 16-tKABhX1v.jpg" alt="" />
			</div>
		</section>

		<section class="tab-sec">
			<div class="tab-con">
				<div
					class="tabs tabs-mod"
					:class="{ 'active-tab': activeYear === 2023 }"
					@click="activeYear = 2023"
				>
					<h2><span>#</span>2023</h2>
				</div>
				<div
					class="tabs"
					:class="{ 'active-tab': activeYear === 2024 }"
					@click="activeYear = 2024"
				>
					<h2><span>#</span>2024</h2>
				</div>
			</div>
			<section class="speaks-container">
				<div
					class="speaks-card"
					v-for="(speaking, index) in filteredSpeakings"
					:key="index"
				>
					<div class="logo-con">
						<img :src="speaking.logoSrc" alt="" />
					</div>
					<div class="stacks">
						<p>{{ speaking.organization }}</p>
					</div>
					<div class="txt-area">
						<h2>{{ speaking.title }}</h2>
						<p>{{ speaking.description }}</p>
						<a :href="speaking.link" target="_blank">
							<div>view</div>
							<img src="../assets/icons/uil-link-h.png" alt="" />
						</a>
					</div>
				</div>
			</section>
		</section>
		<Footer />
	</section>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import chaos from "../assets/images/chaos afr.png";

import { ref, computed, onMounted } from "vue";

import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();

const activeYear = ref(2023);

const speakings2023 = [
	{
		logoSrc: chaos,
		organization: "chaos africa",
		title: "Scalable, Performant Decentralized APIs.",
		description:
			"As APIs fuel the digital economy, apidays Helsinki & North explores how organizations can leverage APIs for scalable innovation, automation, and sustainability.",
		link: "https://example.com/2023-talk1",
	},
	{
		logoSrc: chaos,
		organization: "devfest lagos",
		title: "Building Resilient Web Applications",
		description:
			"A deep dive into strategies for creating web applications that can handle failures gracefully and maintain performance under stress.",
		link: "https://example.com/2023-talk2",
	},
	{
		logoSrc: chaos,
		organization: "jsconf africa",
		title: "The Future of JavaScript Frameworks",
		description:
			"Exploring emerging patterns and technologies in the JavaScript ecosystem and how they will shape the future of web development.",
		link: "https://example.com/2023-talk3",
	},
	{
		logoSrc: chaos,
		organization: "jsconf africa",
		title: "The Future of JavaScript Frameworks",
		description:
			"Exploring emerging patterns and technologies in the JavaScript ecosystem and how they will shape the future of web development.",
		link: "https://example.com/2023-talk3",
	},
	{
		logoSrc: chaos,
		organization: "jsconf africa",
		title: "The Future of JavaScript Frameworks",
		description:
			"Exploring emerging patterns and technologies in the JavaScript ecosystem and how they will shape the future of web development.",
		link: "https://example.com/2023-talk3",
	},
];

const speakings2024 = [
	{
		logoSrc: chaos,
		organization: "react summit",
		title: "State Management Patterns in React Applications",
		description:
			"An exploration of different state management approaches in modern React applications, from Context API to Redux and beyond.",
		link: "https://example.com/2024-talk1",
	},
	{
		logoSrc: chaos,
		organization: "vue conf",
		title: "Building Performant Vue 3 Applications",
		description:
			"Practical strategies for optimizing Vue 3 applications, leveraging the Composition API and other new features to create lightning-fast user experiences.",
		link: "https://example.com/2024-talk2",
	},
];

const filteredSpeakings = computed(() => {
	return activeYear.value === 2023 ? speakings2023 : speakings2024;
});
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixin" as *;

@include fadeIn;

.speaking {
	margin: 160px $body-margin 0;
	animation: fadeIn 1s ease-out forwards;

	@include mobile {
		margin: 100px $body-margin-mobile 0;
	}

	@include tablet {
		margin: 150px $body-margin-tab 0;
	}

	@include macbook {
		margin: 160px $body-margin-mac 0;
	}

	.banner-sec {
		margin: $body-margin-up 0;
	}

	.title-con {
		@include heading;
	}

	.title-mod {
		@include heading-mod;
	}

	.img-con {
		height: 700px;
		width: 100%;
		margin-top: 48px;

		@include mobile {
			margin-top: 24px;
			height: 230px;
		}

		img {
			width: 100%;
			height: 100%;
		}
	}

	.tab-sec {
		margin: $body-margin-up 0;

		.tab-con {
			display: flex;
			margin-bottom: 108px;

			@include mobile {
				margin-bottom: 34px;
			}

			.tabs {
				padding: 0 16px;
				cursor: pointer;
				color: $secondary-color-2;

				h2 {
					font-family: Font2;
					font-size: $subheading;

					@include mobile {
						font-size: $subheading-1;
					}

					span {
						color: $secondary-color-1;
					}
				}
			}

			.active-tab {
				text-decoration: underline;
				color: $secondary-color;
			}

			.tabs-mod {
				padding: 0 16px 0 0;
				border-right: 1px dashed $secondary-color-3;
			}
		}
	}

	.speaks-container {
		display: flex;
		gap: 35px;
		flex-wrap: wrap;
	}

	.speaks-card {
		border: 1px solid $secondary-color;
		width: 345px;

		.logo-con {
			height: 100px;
			display: grid;
			place-content: center;
		}

		.stacks {
			padding: 8px;
			border-top: 1px solid $secondary-color;
			border-bottom: 1px solid $secondary-color;

			p {
				font-family: Font2;
				font-size: $bodytxt;
				color: $secondary-color-2;
			}
		}

		.txt-area {
			padding: 16px 14px;

			h2 {
				font-family: Font4;
				font-size: $subheading-1;
				color: $secondary-color-1;
				margin-bottom: 16px;
			}

			p {
				font-family: Font2;
				font-size: $bodytxt-2;
				color: $secondary-color;
				margin-bottom: 16px;
			}

			a {
				width: 111px;
				padding: 8px 16px;
				font-family: Font2;
				font-size: $bodytxt;
				color: $secondary-color;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				border: 1px solid $secondary-color-1;
			}
		}
	}

	&.light-mode {
		.title-con {
			h2 {
				color: var(--text-black);
			}
		}

		.tab-con {
			.active-tab {
				color: var(--text-black);
			}
		}

		.speaks-card {
			border-color: var(--text-black);

			.stacks {
				border-color: var(--text-black);
			}

			.txt-area {
				p {
					color: var(--text-black);
				}
				a {
					color: var(--text-black);
					border-color: var(--text-black);
				}
			}
		}
	}
}
</style>
