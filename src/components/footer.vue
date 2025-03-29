<template>
	<section class="footer" :class="{ 'light-mode': !isDarkMode }">
		<div class="email-sec">
			<div><h2>anonx.shop@gmail.com</h2></div>
			<div>
				<ul>
					<li>
						<a href="#"
							><span class="hashtag">#</span
							><span class="social-txt">linkedin</span></a
						>
					</li>
					<li>
						<a href="#"
							><span class="hashtag">#</span
							><span class="social-txt">twitter</span></a
						>
					</li>
					<li>
						<a href="#"
							><span class="hashtag">#</span
							><span class="social-txt">github</span></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<p>© Copyright {{ currentYear }}. Made by Josh</p>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();

const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin" as *;

div {
	.footer {
		margin: 48px 0 8px;

		.email-sec {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 32px;

			@include mobile {
				flex-direction: column;
				justify-content: center;
				gap: 16px;
			}

			h2 {
				font-family: Font1;
				font-size: $subheading;
				color: $secondary-color;

				@include mobile {
					font-size: $bodytxt;
				}
			}

			ul {
				display: flex;
				gap: 28px;

				li {
					text-transform: capitalize;
					font-family: Font2;
					font-size: $bodytxt-2;

					@include mobile {
						font-size: $bodytxt-2;
					}

					.hashtag {
						color: $secondary-color-3;
					}
					.social-txt {
						color: $secondary-color-1;
					}
				}
			}
		}

		div {
			p {
				font-family: Font1;
				font-size: $bodytxt-2;
				text-align: center;
				color: $secondary-color-1;
			}
		}
		
		&.light-mode {
			.email-sec {
				h2 {
					color: var(--text-black);
				}
			}
		}
	}
}
</style>
