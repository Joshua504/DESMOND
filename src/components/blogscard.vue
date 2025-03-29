<template>
	<section class="blog" :class="{ 'light-mode': !isDarkMode }">
		<div class="title-con">
			<p class="date">{{ blog.date }}</p>
			<a :href="blog.blogUrl" target="_blank" class="title">{{ blog.title }}</a>
		</div>
		<div class="description-con">
			<p class="description">"{{ blog.description }}"</p>
			<h3 class="technology">{{ blog.technologies }}</h3>
		</div>
	</section>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";

defineProps({
	blog: {
		type: Object,
		required: true,
	},
});

const { isDarkMode } = useTheme();
</script>
<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin" as *;
.blog {
	margin: 0 0 24px 0;

	.title-con {
		display: flex;
		align-items: center;
		gap: 48px;
		margin-bottom: 16px;

		@include mobile {
			flex-direction: column;
			align-items: baseline;
			gap: 10px;
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
		.technology {
			font-family: Font2;
			font-size: $bodytxt;
			color: $secondary-color-1;
			text-transform: capitalize;
		}
	}

	&.light-mode{
    .title{
			color: var(--text-black);
		}

		.description{
			color: var(--text-black);
		}
	}
}
</style>
