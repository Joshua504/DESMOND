import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/project",
		name: "Project",
		component: () => import("../views/Project.vue"),
	},
	{
		path: "/blog",
		name: "Blog",
		component: () => import("../views/Blog.vue"),
	},
	{
		path: "/speakings",
		name: "Speakings",
		component: () => import("../views/Speakings.vue"),
	},
	,
	{
		path: "/youtube",
		name: "Youtube",
		component: () => import("../views/Youtube.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
