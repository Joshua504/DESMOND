<template>
	<Navbar />
	<section class="project" :class="{ 'light-mode': !isDarkMode }">
		<section class="project-sec">
			<div class="title-con title-mod">
				<h2><span>/</span>Projects</h2>
				<p>List of my projects</p>
			</div>
			<div class="card-con">
				<Projectcard
					v-for="(project, index) in projects"
					:key="index"
					:project="project"
				/>
			</div>
		</section>

		<section class="skills">
			<div class="title-con">
				<h2><span>#</span>Pet-project</h2>
				<div class="line"></div>
			</div>
			<section class="skills-con">
				<div class="skillcard">
					<div class="stacks">
						<p>CSS Express Node.js</p>
					</div>
					<div class="techs">
						<h3>Kahoot Answers Viewer</h3>
						<p>Rust Python</p>
						<div class="resume">
							<a>
								live
								<div>
									<img src="../assets/icons/uil-link-h.png" alt="" />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="skillcard">
					<div class="stacks">
						<p>CSS Express Node.js</p>
					</div>
					<div class="techs">
						<h3>Kahoot Answers Viewer</h3>
						<p>Rust Python</p>
						<div class="resume">
							<a>
								live
								<div>
									<img src="../assets/icons/uil-link-h.png" alt="" />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="skillcard">
					<div class="stacks">
						<p>CSS Express Node.js</p>
					</div>
					<div class="techs">
						<h3>Kahoot Answers Viewer</h3>
						<p>Rust Python</p>
						<div class="resume">
							<a>
								live
								<div>
									<img src="../assets/icons/uil-link-h.png" alt="" />
								</div>
							</a>
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
import Projectcard from "../components/projectcard.vue";
import { useTheme } from "../composables/useTheme";

const props = defineProps({
	project: Object,
});

const { isDarkMode } = useTheme();

import { ref } from "vue";

const projects = ref([
	{
		title: "Project 1",
		description: "Description for project 1",
		technologies: "Vue JavaScript CSS",
		imageUrl: "../assets/images/project1.jpg",
		projectUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Project 2",
		description: "Description for project 2",
		technologies: "React TypeScript SCSS",
		imageUrl: "../assets/images/project2.jpg",
		projectUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Project 3",
		description: "Description for project 3",
		technologies: "Node.js Express, MongoDB",
		imageUrl: "../assets/images/project3.jpg",
		projectUrl: "#",
		githubUrl: "#",
	},
]);
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixin" as *;

.project {
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

	.card-con {
		display: flex;
		justify-content: space-between;

		@include mobile {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 32px;
		}

		@include tablet {
			flex-wrap: wrap;
			gap: 20px;
		}
	}

	.skills {
		margin: $body-margin-up 0;

		.skills-con {
			display: flex;
			justify-content: space-between;

			@include mobile {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 32px;
			}
			@include tablet {
				flex-wrap: wrap;
				gap: 20px;
			}

			.skillcard {
				width: 355px;
				border: 1px solid $secondary-color;

				@include mobile {
					width: 345px;
				}

				.stacks {
					padding: 15px 10px;
					border-bottom: 1px solid $secondary-color;

					p {
						font-family: Font5;
						font-size: $bodytxt;
						color: $secondary-color;
					}
				}

				.techs {
					padding: 16px;

					h3 {
						font-family: Font2;
						font-size: $subheading;
						color: $secondary-color;
						margin-bottom: 16px;

						@include tablet {
							margin-bottom: 10px;
						}
					}

					p {
						font-family: Font2;
						font-size: $bodytxt-2;
						color: $secondary-color;
						margin-bottom: 8px;
					}

					.resume {
						a {
							padding: 8px 16px;
							width: 110px;
							border: 1px solid $secondary-color-1;
							color: $secondary-color;
							font-family: Font2;
							font-size: $bodytxt-2;
							text-transform: capitalize;
							cursor: pointer;
							display: flex;
							gap: 10px;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
		}
	}

	&.light-mode {
		.project-sec,
		.skills {
			.title-con h2 {
				color: var(--text-black);
			}
		}

		.skills {
			.skills-con .skillcard {
				border-color: var(--text-black);
			}
			.skills-con .skillcard .stacks {
				border-color: var(--text-black);
			}
			.skills-con .skillcard .techs h3 {
				color: $secondary-color-1;
			}
			.skills-con .skillcard .techs p {
				color: var(--text-black);
			}
			.skills-con .skillcard .techs a {
				color: var(--text-black);
				border-color: var(--text-black);
			}
			.skills-con .skillcard .stacks p {
				color: var(--text-black);
			}
		}
	}
}
</style>
