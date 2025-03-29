<template>
	<Navbar />
	<section class="youtube" :class="{ 'light-mode': !isDarkMode }">
		<div class="title-con title-mod">
			<h2><span>/</span>Youtube</h2>
			<p>Some helpful videos from my youtube channel</p>
		</div>
		<section class="youtube-con">
			<section class="blog" v-for="(blog, index) in blogs" :key="index">
				<div class="title-con">
					<p class="date">{{ blog.date }}</p>
					<a href="/" class="title">{{ blog.title }}</a>
				</div>
				<div class="description-con">
					<p class="description">"{{ blog.description }}"</p>
					<div class="reactions">
						<div class="icons">
							<img v-if="isDarkMode" src="../assets/icons/uil-eye.png" alt="" /> 
							<img v-else src="../assets/icons/uil-eye-1.png" alt="" /> 
							<p class="technology">{{ blog.views }}k</p>
						</div>
						<div class="icons">
							<img v-if="isDarkMode" src="../assets/icons/uil-thumbs-up.png" alt="" />
							<img v-else src="../assets/icons/uil-thumbs-up-1.png" alt="" />
							<p class="technology">{{ blog.likes }}</p>
						</div>
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
import Blogcard from "../components/blogscard.vue";
import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();

import { ref } from "vue";

const blogs = ref([
	{
		title: "Building with Cloudflare Workers",
		date: "May 15, 2023",
		description:
			"This guide shows how to configure an Arch Linux machine for SSH access from a Mac using key-based authentication",
		blogUrl: "#",
		views: 10.5,
		likes: 200,
	},
	{
		title: "Understanding Web Performance",
		date: "June 2, 2023",
		description:
			"This guide shows how to configure an Arch Linux machine for SSH access from a Mac using key-based authentication",
		blogUrl: "#",
		views: 1000,
		likes: 200,
	},
	{
		title: "The Future of Edge Computing",
		date: "July 10, 2023",
		description:
			"This guide shows how to configure an Arch Linux machine for SSH access from a Mac using key-based authentication",
		blogUrl: "#",
		views: 1000,
		likes: 200,
	},
]);
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin" as *;

.youtube {
	margin: 160px $body-margin 0;

	@include mobile {
		margin: 100px $body-margin-mobile 0;
	}

	@include tablet {
		margin: 150px $body-margin-tab 0;
	}

	@include macbook {
		margin: 160px $body-margin-mac 0;
	}

	.title-con {
		@include heading;
	}

	.title-mod {
		@include heading-mod;
	}

	.youtube-con {
		.blog {
			margin: 0 0 24px 0;

			.title-con {
				display: flex;
				align-items: center;
				gap: 48px;
				margin-bottom: 16px;

				@include mobile {
					flex-direction: column;
					gap: 8px;
					align-items: baseline;
				}

				.date {
					font-family: Font2;
					font-size: $bodytxt-2;
					color: $secondary-color-1;
				}

				.title {
					font-family: Font2;
					font-size: $subheading-1;
					color: $secondary-color;
					text-decoration: underline;

					@include mobile {
						font-size: $bodytxt;
					}
				}
			}

			.description-con {
				.description {
					font-family: Font1;
					font-size: $bodytxt;
					color: $secondary-color;
					margin-bottom: 8px;

					@include mobile {
						font-size: $bodytxt-3;
					}
				}
				.reactions {
					display: flex;
					gap: 12px;

					.icons {
						display: flex;
						align-items: center;
						gap: 8px;

						img {
							width: 20%;
						}

						p {
							font-family: Font2;
							font-size: $bodytxt-2;
							color: $secondary-color-1;

							@include mobile {
								font-size: $bodytxt-3;
							}
						}
					}
				}
			}
		}
	}

	&.light-mode {
		.title-con {
			h2 {
				color: var(--text-black);
			}
		}

		.youtube-con {
			.blog {
				.title {
					color: var(--text-black);
				}
				.description {
					color: var(--text-black);
				}
			}
		}
	}
}
</style>
