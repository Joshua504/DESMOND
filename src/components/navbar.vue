<template>
	<nav :class="{ 'light-mode': !isDarkMode }">
		<section class="logo-con">
			<div class="logo">
				<h1>Desmond Obisi</h1>

				<section class="hamburger" @click="toggleMenu">
					<div class="bars"></div>
					<div class="bars bars-mod"></div>
				</section>
			</div>
			<div class="icon-con">
				<div class="icons">
					<!-- <img src="../assets/icons/uil-search.png" alt="search" /> -->
				</div>
				<div class="icons mode-icon" @click="toggleTheme">
					<img
						v-if="isDarkMode"
						src="../assets/icons/uil-sun.png"
						alt="Switch to light mode" />
					<img
						v-else
						src="../assets/icons/uil-moon-1.png"
						alt="Switch to dark mode" />
				</div>
			</div>
		</section>
		<section class="nav-links">
			<ul class="link-con" :class="{ active: isMenuOpen }">
				<li>
					<router-link to="/" exact-active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">home</span></router-link
					>
				</li>
				<li>
					<router-link to="/about" active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">about</span></router-link
					>
				</li>
				<li>
					<router-link to="/project" active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">project</span></router-link
					>
				</li>
				<li>
					<router-link to="/blog" active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">blog</span></router-link
					>
				</li>
				<li>
					<router-link to="/speakings" active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">speaking</span></router-link
					>
				</li>
				<li>
					<router-link to="/youtube" active-class="active-link"
						><span class="hashtag">#</span
						><span class="nav-txt">youtube</span></router-link
					>
				</li>
			</ul>
		</section>
	</nav>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from '../composables/useTheme';

const isMenuOpen = ref(false);
const { isDarkMode, toggleTheme } = useTheme();

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixin' as *;
nav {
	background: $primary-color;
	padding: 24px $body-margin;
	transition: all 0.3s ease;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	display: grid;
	align-items: center;

	@include macbookpro {
		padding: 24px $body-margin-macpro;
	}
	@include macbook {
		padding: 24px $body-margin-mac;
	}
	@include mobile {
		border-bottom: 1px solid $secondary-color-2;
		padding: 15px $body-margin-mobile;
		width: 100%;
		left: 0;
	}

	@include tablet {
		padding: 24px $body-margin-tab;
	}

	.logo-con {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $secondary-color;
			font-size: $heading;
			font-family: Font4;
			width: 100%;

			@include mobile {
				font-size: $subheading-1;
				width: 100%;
			}

			.hamburger {
				display: flex;
				flex-direction: column;
				cursor: pointer;
				visibility: collapse;

				@include mobile {
					visibility: visible;
					align-items: end;
				}

				.bars {
					height: 3px;
					width: 30px;
					background: $secondary-color;
					margin-bottom: 5px;
					border-radius: 20px;
				}

				.bars-mod {
					width: 20px;
				}
			}
		}

		.icon-con {
			display: flex;
			gap: 52px;

			@include mobile {
				gap: 0;
				display: none;
			}

			.mode-icon {
				cursor: pointer;
				transition: transform 0.3s ease;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}

	.nav-links {
		ul {
			display: flex;

			@include mobile {
				position: fixed;
				width: 100%;
				padding: 16px 0;
				top: 65px;
				height: 0;
				left: 0;
				// flex-direction: column;
				flex-wrap: wrap;
				overflow: hidden;
				visibility: collapse;
				transition: all 0.5s ease-in-out;
				border-bottom: 1px solid $secondary-color-2;
				border-bottom-right-radius: 20px;
				border-bottom-left-radius: 20px;
				background: $primary-color;

				&.active {
					height: fit-content;
					visibility: visible;
				}
			}

			li {
				font-family: Font1;
				font-size: 16px;
				text-transform: capitalize;
				padding: 6px 25px;
				border-right: 1px dashed $secondary-color-3;

				@include mobile {
					padding: 16px;
					// border: none;
					height: fit-content;
				}

				.hashtag {
					color: $secondary-color-3;
				}
				.nav-txt {
					color: $secondary-color-1;
				}
				.active-link {
					.nav-txt {
						color: white;
					}
				}
			}

			li:nth-child(1) {
				padding: 6px 25px 6px 0px;

				@include mobile {
					padding: 16px;
				}
			}
			li:nth-child(6) {
				border: none;
			}
		}
	}

	&.light-mode {
		background-color: $secondary-color;
		border-bottom: 1px solid $secondary-color-1;

		.logo-con {
			.logo {
				color: var(--text-black);
			}

			.hamburger {
				.bars {
					background: var(--text-black);
				}
			}
		}

		.nav-links ul li {
			.active-link .nav-txt {
				color: $primary-color;
			}
		}
	}
}
</style>
