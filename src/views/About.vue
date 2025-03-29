<template>
	<Navbar />
	<section class="about" :class="{ 'light-mode': !isDarkMode }">
		<section class="about-me">
			<div class="title-con title-mod">
				<h2><span>/</span>About-me</h2>
				<p>Who am i?</p>
			</div>
			<div class="about-me-con">
				<h1>Hi, I’m Desmond!!👋</h1>
				<p>
					I’m a tech enthusiast, content creator, and Nigerian expat living in
					the Netherlands. My journey has taken me across continents, careers,
					and creative pursuits. I started this blog to share my experiences,
					insights, and passions with a wider audience, hoping to inspire and
					empower others along the way.
				</p>

				<div class="img-con">
					<img src="../assets/images/avatar-CoGdC8ty.jpg" alt="" />
				</div>
			</div>
		</section>

		<section class="skills">
			<div class="title-con">
				<h2><span>#</span>Skills</h2>
				<div class="line"></div>
			</div>
			<section class="skills-con">
				<div class="skillcard">
					<div class="stacks">
						<p>Languages</p>
					</div>
					<div class="techs">
						<p>Typescript Golang Node.js</p>
						<p>Rust Python</p>
					</div>
				</div>
				<div class="skillcard card-1">
					<div class="stacks">
						<p>Databases</p>
					</div>
					<div class="techs">
						<p>MYSQL SQLite PostgreSQL</p>
						<p>QuestDB</p>
					</div>
				</div>
				<div class="skillcard card-2">
					<div class="stacks">
						<p>Frameworks</p>
					</div>
					<div class="techs">
						<p>Next.js NestJs Actix Web</p>
					</div>
				</div>
			</section>
		</section>

		<section class="working-exp">
			<div class="title-con">
				<h2><span>#</span>What I’m Working On</h2>
				<div class="line"></div>
			</div>
			<div>
				<p>
					This past year has been transformative. After facing burnout, I’m
					rediscovering my passion for creating content, engaging with the tech
					community, and sharing stories that matter. I’m currently preparing
					new video tutorials, exploring creative collaborations, and building
					projects that excite me.
				</p>
			</div>
		</section>
		<Footer />
	</section>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin" as *;

.about {
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

		.line {
			height: 1px;
			width: 512px;
			background: $secondary-color-3;
		}
	}

	.about-me {
		margin: $body-margin-up 0;

		@include mobile {
			font-size: $bodytxt-3;
		}

		.title-mod {
			@include heading-mod;
		}

		.about-me-con {
			h1 {
				font-size: $heading;
				font-family: Font2;
				color: $secondary-color;
				margin-bottom: 40px;

				@include mobile {
					font-size: $subheading-1;
					margin-bottom: 16px;
				}
			}

			p {
				font-family: Font2;
				font-size: $bodytxt;
				color: $secondary-color;

				@include mobile {
					font-size: $bodytxt-3;
				}
			}
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

				@include mobile {
				}
			}
		}
	}

	.skills {
		margin: $body-margin-up 0;

		.skills-con {
			display: flex;
			justify-content: space-between;

			@include mobile {
				flex-direction: column;
				gap: 32px;
			}

			@include tablet {
				flex-wrap: wrap;
				gap: 10px;
			}

			.skillcard {
				width: 355px;
				height: 188px;
				border: 1px solid $secondary-color;

				.stacks {
					padding: 15px 10px;
					border-bottom: 1px solid $secondary-color;

					p {
						font-family: Font2;
						font-size: $bodytxt;
						color: $secondary-color;
					}
				}

				.techs {
					padding: 16px;

					p {
						font-family: Font5;
						font-size: $bodytxt-2;
						color: $secondary-color;
						margin-bottom: 8px;
					}
				}
			}

			.card-1 {
				height: 148px;
			}

			.card-2 {
				height: 120px;
			}
		}
	}

	.working-exp {
		margin: $body-margin-up 0;

		div {
			p {
				font-family: Font2;
				font-size: $bodytxt;
				color: $secondary-color;

				@include mobile {
					font-size: $bodytxt-3;
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

		.about-me-con {
			h1 {
				color: var(--text-black);
			}
			p {
				color: var(--text-black);
			}
		}
		.skills-con {
			.skillcard {
				border-color: var(--text-black);

				.stacks {
					border-color: var(--text-black);
					p {
						color: var(--text-black);
					}
				}

				.techs{
					p {
						color: var(--text-black);
					}
				}
			}
		}
		.working-exp {
			div {
				p {
					color: var(--text-black);
				}
			}
		}
	}
}
</style>
