<template>
	<Navbar />
	<section class="blog-con" :class="{ 'light-mode': !isDarkMode }">
		<div class="title-con title-mod">
			<h2><span>/</span>Blog</h2>
			<p>Some of my published blogs</p>
		</div>

		<section class="blog-sec">
			<div class="tab-con">
				<div
					class="tabs tabs-mod"
					:class="{
						'active-tab': activeTab === 'mine',
						'tabs-mod': activeTab === 'mine',
					}"
					@click="setActiveTab('mine')"
				>
					<h2><span>#</span>Mine</h2>
				</div>
				<div
					class="tabs"
					:class="{ 'active-tab': activeTab === 'twilio' }"
					@click="setActiveTab('twilio')"
				>
					<h2><span>#</span>Twilio</h2>
				</div>
				<div
					class="tabs"
					:class="{ 'active-tab': activeTab === 'resilis' }"
					@click="setActiveTab('resilis')"
				>
					<h2><span>#</span>Resilis</h2>
				</div>
				<div
					class="tabs"
					:class="{ 'active-tab': activeTab === 'other' }"
					@click="setActiveTab('other')"
				>
					<h2><span>#</span>Others</h2>
				</div>
			</div>
			<div>
				<Blogcard
					v-for="(blog, index) in displayedBlogs"
					:key="index"
					:blog="blog"
				/>
			</div>
		</section>

		<Footer />
	</section>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import Blogcard from "../components/blogscard.vue";

import { ref, computed } from "vue";
import { useTheme } from "../composables/useTheme";
import { blogData } from "../composables/blogData.js";

const { isDarkMode } = useTheme();

const activeTab = ref("mine");
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const { selfBlog, twilio, resilis, others } = blogData;

const displayedBlogs = computed(() => {
  switch (activeTab.value) {
    case "mine":
      return selfBlog;
    case "twilio":
      return twilio;
    case "resilis":
      return resilis;
    case "other":
      return others;
    default:
      return selfBlog;
  }
});
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;
@use "../styles/mixin" as *;


.blog-con {
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
			border-right: 1px dashed $secondary-color-3;

			h2 {
				font-family: Font2;
				font-size: 20px;

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
		}
	}

	&.light-mode {
		.title-con {
			h2 {
				color: var(--text-black);
			}
		}

		.tab-con {
			.tabs {
				color: $secondary-color-2;
			}

			.active-tab {
				color: var(--text-black);
			}
		}
	}
}
</style>
