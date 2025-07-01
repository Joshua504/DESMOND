<template>
	<Navbar />
	<section class="home" :class="{ 'light-mode': !isDarkMode }">
		<section class="banner-sec">
			<h1>Hi there!!</h1>
			<p class="descript">
				I'm <span>Desmond Obisi,</span> a developer advocate at Cloudflare,
				focusing on the developer platform. My role involves simplifying complex
				technical concepts and empowering developers to build applications with
				Workers. My goal is to make technology accessible and comprehensible to
				everyone. This website serves as my digital garden, a space where I
				share my learnings and document my professional journey.
			</p>
			<section class="social">
				<div class="social-link">
					<div><p>Find me on -</p></div>
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
				<div class="resume">
					<a
						href="../assets/images/avatar-CoGdC8ty.jpg"
						download="Desmond_Obisi_Resume.pdf">
						Resume
						<div>
							<img
								v-if="isDarkMode"
								src="../assets/icons/uil-arrow-to-bottom.png"
								alt="" />
							<img
								v-else
								src="../assets/icons/uil-arrow-to-bottom-1.png"
								alt="" />
						</div>
					</a>
				</div>
			</section>
			<div class="quote">
				<img v-if="isDarkMode" src="../assets/icons/quote.png" alt="" /><img
					v-else
					src="../assets/icons/quote-1.png"
					alt="" />
			</div>
		</section>

		<section class="project-sec">
			<section class="title-con">
				<div class="txt-con">
					<h2>
						<span class="hashtag">#</span
						><span class="title-txt">Projects</span>
					</h2>
					<div class="line"></div>
				</div>
				<div class="view-con">
					<router-link to="/project">view all</router-link>
					<img src="../assets/icons/right-arrow.png" alt="" />
				</div>
			</section>
			<div class="card-con">
				<Projectcard
					v-for="(project, index) in projects"
					:key="index"
					:project="project" />
			</div>
		</section>

		<section class="latest-blog">
			<section class="title-con">
				<div class="txt-con txt-con-mod">
					<h2 class="title-txt">
						<span class="hashtag">#</span
						><span class="title-txt">Latest Blogs</span>
					</h2>
					<div class="line"></div>
				</div>
				<div class="view-con">
					<router-link to="/blog">view all</router-link>
					<img src="../assets/icons/right-arrow.png" alt="" />
				</div>
			</section>
			<div>
				<Blogcard
					v-for="(blog, index) in blogs.slice(0, 3)"
					:key="index"
					:blog="blog" />
			</div>

			<div class="quote">
				<img v-if="isDarkMode" src="../assets/icons/quote(1).png" alt="" /><img
					v-else
					src="../assets/icons/quote-2.png"
					alt="" />
			</div>
		</section>

		<Footer />
	</section>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import Projectcard from '../components/projectcard.vue';
import Blogcard from '../components/blogscard.vue';
import Footer from '../components/footer.vue';
import { useTheme } from '../composables/useTheme';

import { ref } from 'vue';

const { isDarkMode } = useTheme();

const projects = ref([
	{
		title: ' Ai-summarizer',
		description:
			"AI tool that summarizes text from documents using VertexAI and/or Langchain's Open AI implementation. ",
		technologies: 'JavaScript CSS',
		imageUrl: '/src/assets/images/Cover(1).jpg',
		projectUrl: '#',
		githubUrl: 'https://github.com/DesmondSanctity/ai-summarizer',
	},
	{
		title: 'Tyche-nomisma',
		description:
			'An AI tool that you can use to get currency pair update via Whatsapp. Built with Twilio and Cloudflare Workers AI. ',
		technologies: 'JavaScript',
		imageUrl: '/src/assets/images/currency.png',
		projectUrl: '#',
		githubUrl: 'https://github.com/DesmondSanctity/tyche-nomisma',
	},
	{
		title: ' Ip_sniffer',
		description:
			'A CLI tool to check open ports in a given IP address built with Rust. ',
		technologies: 'Rust',
		imageUrl: '/src/assets/images/AI.png',
		projectUrl: '#',
		githubUrl: 'https://github.com/DesmondSanctity/ip_sniffer',
	},
]);

const blogs = ref([
	{
		title: 'Multi-factor authentication in Go using Twilio Verify API',
		date: 'Nov 26, 2024',
		description:
			"In this article, we'll explore how to implement MFA in a Go fullstack application using the Twilio Verify API and integrate it with a Vue.js frontend.",
		blogUrl:
			'https://www.twilio.com/en-us/blog/multi-factor-authentication-go-twilio-verify',
		technologies: 'Twilio',
	},
	{
		title: 'Understanding Database Transactions with Postgres and Twilio',
		date: 'Aug 22, 2024',
		description:
			'This blog post dives into the world of database transactions using PostgreSQL, a powerful and popular open-source relational database management system.',
		blogUrl:
			'https://www.twilio.com/en-us/blog/understanding-database-transactions-postgres-twilio',
		technologies: 'Twilio',
	},
	{
		title: 'Running Twilio Serverless Functions Using Database Events',
		date: 'Jun 06, 2024',
		description:
			'In this article, we will explore how to leverage event-driven architecture to trigger Twilio Functions based on data change in a MongoDB database.',
		blogUrl:
			'https://www.twilio.com/en-us/blog/running-twilio-serverless-functions-database-events',
		technologies: 'Twilio',
	},
	{
		title:
			'Authenticating Users with the Twilio Authy App and Verify in Next.js',
		date: 'Apr 08, 2024',
		description:
			'In this tutorial, you will learn how to implement Two Factor Authentication (2FA) in a Next.js application using the Twilio Authy app and the Verify API.',
		blogUrl:
			'https://www.twilio.com/en-us/blog/authenticating-users-twilio-authy-app-verify-nextjs',
		technologies: 'Twilio',
	},
	{
		title:
			'Build an Incident Alert Bot with Twilio WhatsApp, Winston and Node.js',
		date: 'Nov 02, 2023',
		description:
			"Through this tutorial, you will learn how to integrate Twilio's WhatsApp API and Winston to a Node.js API, making incident/error reporting and troubleshooting as easy as possible.",
		blogUrl:
			'https://www.twilio.com/en-us/blog/incident-alert-bot-twilio-whatsapp-winston-node-js',
		technologies: 'Twilio',
	},
	{
		title: 'Build a Translation Bot using Twilio WhatsApp and AWS Translate',
		date: 'Sep 19, 2023',
		description:
			"Through this tutorial, you will learn how to integrate Twilio's WhatsApp API and AWS Translate, unlocking a realm of endless possibilities for seamless communication.",
		blogUrl:
			'https://www.twilio.com/en-us/blog/build-translation-bot-twilio-whatsapp-aws-translate',
		technologies: 'Twilio',
	},
]);
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixin' as *;

@include fadeIn;

.home {
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
		animation: fadeIn 1s ease-out forwards;

		@include mobile {
			margin: $body-margin-mobile 0;
		}

		h1 {
			font-family: Font4;
			font-size: $heading;
			color: $secondary-color;
			margin-bottom: 32px;

			@include mobile {
				font-size: $subheading-1;
				margin-bottom: 24px;
			}
		}

		.descript {
			font-family: Font2;
			font-size: $bodytxt;
			color: $secondary-color;
			margin-bottom: 24px;

			@include mobile {
				font-size: $bodytxt-3;
			}

			span {
				color: $secondary-color-1;
			}
		}

		.social {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 112px;

			@include mobile {
				flex-direction: column;
				gap: 16px;
				margin-bottom: 32px;
			}

			.social-link {
				display: flex;
				gap: 32px;

				@include mobile {
					gap: 5px;
				}

				div {
					p {
						font-family: Font2;
						font-size: $bodytxt;
						color: $secondary-color;

						@include mobile {
							font-size: $bodytxt-2;
						}
					}
				}
				div {
					ul {
						display: flex;
						gap: 28px;

						@include mobile {
							gap: 10px;
						}

						li {
							text-transform: capitalize;
							font-family: Font2;
							font-size: $bodytxt-2;
							transition: 0.5s ease-in-out;

							&:hover {
								scale: 1.2;
							}

							@include mobile {
								font-size: $bodytxt-3;
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
			}

			.resume {
				a {
					padding: 8px 16px;
					border: 1px solid $secondary-color-1;
					color: $secondary-color;
					font-family: Font2;
					font-size: $bodytxt-2;
					cursor: pointer;
					display: flex;
					gap: 10px;
					align-items: center;
					transition: 0.5s ease-in-out;

					&:hover {
						scale: 0.9;
						background: $secondary-color-1;
					}
				}
			}
		}
	}

	.quote {
		display: grid;
		place-items: center;
		margin: 24px 0;

		@include mobile {
			img {
				width: 100%;
			}
		}
		@include tablet {
			img {
				width: 100%;
			}
		}
	}

	.project-sec {
		margin: $body-margin-up 0;

		@include mobile {
			margin: $body-margin-up-mobile 0;
		}

		.card-con {
			display: flex;
			justify-content: space-between;

			@include mobile {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 10px;
			}
			@include tablet {
				flex-wrap: wrap;
				gap: 20px;
			}
		}
	}

	.latest-blog {
		margin: $body-margin-up 0;

		@include mobile {
			margin: $body-margin-up-mobile 0;
		}
	}

	.title-con {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 64px;

		@include mobile {
			margin-bottom: 30px;
		}
		@include tablet {
			// flex-direction: column;
		}

		.txt-con {
			display: flex;
			align-items: center;
			gap: 16px;

			@include mobile {
				gap: 4px;
			}
			@include tablet {
				gap: 4px;
			}

			h2 {
				font-family: Font4;
				font-size: $heading;

				@include mobile {
					font-size: $subheading-1;
				}

				.hashtag {
					color: $secondary-color-1;
				}
				.title-txt {
					color: $secondary-color;
				}
			}

			.line {
				height: 1px;
				width: 512px;
				background: $secondary-color-3;

				@include mobile {
					width: 100px;
					display: none;
				}
				@include tablet {
					width: 300px;
				}
			}
		}

		.view-con {
			display: flex;
			align-items: center;
			gap: 8px;

			@include mobile {
				gap: 2px;
			}

			a {
				font-family: Font2;
				font-size: $bodytxt;
				color: $secondary-color;

				@include mobile {
					font-size: 12px;
				}
			}

			img {
				@include mobile {
					width: 20%;
				}
			}
		}
	}

	&.light-mode {
		.title-con {
			.txt-con {
				h2 {
					.title-txt {
						color: var(--text-black);
					}
				}
			}
			.view-con {
				a {
					color: var(--text-black);
				}
			}
		}

		.banner-sec {
			h1 {
				color: var(--text-black);
			}
			.descript {
				color: $primary-color;
			}
			.social {
				.social-link {
					div {
						p {
							color: $primary-color;
						}
					}
					div {
						ul {
							li {
								.hashtag {
									color: $primary-color;
								}
								.social-txt {
									color: $primary-color;
								}
							}
						}
					}
				}
			}
			.resume {
				a {
					border: 1px solid $primary-color;
					color: $primary-color;
				}
			}
		}
	}
}
</style>
