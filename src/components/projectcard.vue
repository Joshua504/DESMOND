<template>
	<section class="card" :class="{ 'light-mode': !isDarkMode }">
		<div class="img-con">
			<img :src="project.imageUrl" alt="" />
		</div>
		<div class="stacks">
			<p>{{ project.technologies }}</p>
		</div>
		<div class="txt-area">
			<h2>{{ project.title }}</h2>
			<p>{{ project.description }}</p>
			<div class="links">
				<a :href="project.projectUrl" target="_blank">
					<div>Live</div>
					<div><img src="../assets/icons/uil-link-h.png" alt="" /></div>
				</a>
				<a class="live" :href="project.githubUrl" target="_blank">
					<div>Github</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: {
		type: Object,
		required: true,
		default: () => ({
			title: "",
			description: "",
			imageUrl: "",
			projectUrl: "#",
			technologies: [],
		}),
	},
});

const { isDarkMode } = useTheme();
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin.scss" as *;

.card {
	// position: relative;
	border: 1px solid $secondary-color;
	width: 345px;

	@include tablet {
		width: 340px;
	}

	.img-con {
		height: 292px;
		background: red;
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
		height: 240px;

		h2 {
			font-family: Font4;
			font-size: $subheading;
			color: $secondary-color;
			margin-bottom: 16px;

			@include tablet {
				margin-bottom: 12px;
			}
		}

		p {
			font-family: Font2;
			font-size: $bodytxt-2;
			color: $secondary-color-2;
			margin-bottom: 16px;

			@include tablet {
				margin-bottom: 12px;
			}
		}

		.links {
			display: flex;
			gap: 16px;
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
			cursor: not-allowed;
			transition: 0.5s ease-in-out;

			&:hover {
				scale: 0.8;
			}
		}

		.live {
			cursor: pointer;

			&:hover {
				scale: 1.1;
				background: $secondary-color-1;
				border: 1px solid $secondary-color-1;
			}
		}
	}

	&.light-mode {
		border: 1px solid $primary-color;

		.stacks {
			border-top: 1px solid $primary-color;
			border-bottom: 1px solid $primary-color;

			p {
				color: $primary-color;
			}
		}

		.txt-area {
			h2 {
				color: $secondary-color-1;
			}

			p {
				color: $primary-color;
			}

			a {
				color: $primary-color;
				border: 1px solid $primary-color;
			}
		}
	}
}
</style>
