<template>
	<Navbar />
	<section class="speaking" :class="{ 'light-mode': !isDarkMode }">
		<section class="banner-sec">
			<div class="title-con title-mod">
				<h2><span>/</span>Speaking Engagements</h2>
				<p>Here's a list of my speaking engagements i have done so far</p>
			</div>
			<div class="img-con">
				<img src="/images/City JS 16-tKABhX1v.jpg" alt="" />
			</div>
		</section>

		<section class="tab-sec">
			<div class="tab-con">
				<div
					class="tabs tabs-mod"
					:class="{ 'active-tab': activeYear === 2023 }"
					@click="activeYear = 2023">
					<h2><span>#</span>2023</h2>
				</div>
				<div
					class="tabs"
					:class="{ 'active-tab': activeYear === 2024 }"
					@click="activeYear = 2024">
					<h2><span>#</span>2024</h2>
				</div>
			</div>
			<section class="speaks-container">
				<div
					class="speaks-card"
					v-for="(speaking, index) in filteredSpeakings"
					:key="index">
					<iframe
						class="speakerdeck-iframe"
						style="
							border: 0px;
							background: rgba(0, 0, 0, 0.1) padding-box;
							margin: 0px;
							padding: 0px;
							border-radius: 6px;
							box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;
							/* width: 100%; */
							height: auto;
							aspect-ratio: 560 / 315;
						"
						frameborder="0"
						:src="speaking.link"
						:title="speaking.title"
						allowfullscreen="true"
						data-ratio="1.7777777777777777"></iframe>
				</div>
			</section>
		</section>
		<Footer />
	</section>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';

import { ref, computed, onMounted } from 'vue';

import { useTheme } from '../composables/useTheme';

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();

const activeYear = ref(2023);

const speakings2023 = [
	{
		title:
			'Exploring the Future of Web Development with WebAssembly and Javascript - CityJS Conf 2023',
		link: 'https://speakerdeck.com/player/d86bd6f7b4d244e2b516fe0ec26de3fa',
	},
	{
		title:
			'The Future of WebAssembly: Revolutionizing Computing Across Platforms and Industries',
		link: 'https://speakerdeck.com/player/b6afe575a64f4a2a8f0d36cfefea625b',
	},
	{
		title: 'Streamlining DevOps Workflows with Ansible AWX',
		link: 'https://speakerdeck.com/player/97bdf5df811346b0aad2f164fa6db239',
	},
	{
		title:
			'AWX Operator Documentation, What’s New? - Ansible Contributor Summit 2023',
		link: 'https://speakerdeck.com/player/a103967a0717473c931a6b99370f087c',
	},
	{
		title: 'Optimize, Learn Fast, Learn Smart : Focus and Discipline',
		link: 'https://speakerdeck.com/player/df53b073f85b45649cc3d52bd833b3a5',
	},
	{
		title:
			'From Data to Destinations:  A Hands-on Workshop with Google Places API and Twilio',
		link: 'https://speakerdeck.com/player/afd69789ef28468fb8334cc3b61c0374',
	},
	{
		title:
			'Accelerating your personal and professional growth through open source contributions: Standing out in a world full of talents.',
		link: 'https://speakerdeck.com/player/54bfab12b93c4e898aa121a695062d36',
	},
];

const speakings2024 = [
	{
		title:
			'Exploring the Future of Web Development with WebAssembly and Javascript - CityJS Conf 2023',
		link: 'https://speakerdeck.com/player/d86bd6f7b4d244e2b516fe0ec26de3fa',
	},
	{
		title:
			'Exploring the Future of Web Development with WebAssembly and Javascript - CityJS Conf 2023',
		link: 'https://speakerdeck.com/player/d86bd6f7b4d244e2b516fe0ec26de3fa',
	},
];

const filteredSpeakings = computed(() => {
	return activeYear.value === 2023 ? speakings2023 : speakings2024;
});
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixin' as *;

@include fadeIn;

.speaking {
	margin: 160px $body-margin 0;
	animation: fadeIn 1s ease-out forwards;

	@include macbookpro {
		margin: 160px $body-margin-macpro 0;
	}
	@include macbook {
		margin: 160px $body-margin-mac 0;
	}
	@include tablet {
		margin: 150px $body-margin-tab 0;
	}
	@include mobile {
		margin: 100px $body-margin-mobile 0;
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
		@include tablet {
			margin-top: 24px;
			height: fit-content;
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

		@include mobile {
			justify-content: center;
		}
	}

	.speaks-card {
		.speakerdeck-iframe {
			width: 540px;

			@include macbook {
				width: 468px;
			}

			@include tablet {
				width: 350px;
			}

			@include mobile {
				width: 300px;
			}
		}
	}

	&.light-mode {
		.tab-sec {
			.active-tab {
				text-decoration: underline;
				color: $primary-color;
			}
		}
	}
}
</style>
