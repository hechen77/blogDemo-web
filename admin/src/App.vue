<template>
	<div class="app">
		<router-view name="default"></router-view>
	</div>
</template>

<style lang="less">
&::-webkit-scrollbar {
	width: 0px;
}

&::-webkit-scrollbar-track {
}

&::-webkit-scrollbar-thumb {
	border-radius: 0.08rem;
	box-shadow: 0px 1px 3px 0px rgba(44, 47, 49, 0);
}

/*滚动条的上下两端的按钮*/
&::-webkit-scrollbar-button {
	height: 0px;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
	transition: all .5s;
}

.fade-transform-enter {
	opacity: 0;
	transform: translateX(-30px);
}

.fade-transform-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
	transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
	opacity: 0;
	transform: translateX(20px);
}

.breadcrumb-move {
	transition: all .5s;
}

.breadcrumb-leave-active {
	position: absolute;
}

@font-face {
	font-family: Hormony;
	src: url("./assets/fonts/HarmonyOS_Sans_Medium.ttf");
}

@font-face {
	font-family: Hormony_TC;
	src: url("./assets/fonts/HarmonyOS_Sans_TC_Medium.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_Condensed_Medium;
	src: url("./assets/fonts/HarmonyOS_Sans_Condensed_Medium.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_Condensed_Medium_Italic;
	src: url("./assets/fonts/HarmonyOS_Sans_Condensed_Medium_Italic.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_Medium_Italic;
	src: url("./assets/fonts/HarmonyOS_Sans_Medium_Italic.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_Naskh_Arabic_Medium;
	src: url("./assets/fonts/HarmonyOS_Sans_Naskh_Arabic_Medium.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_Naskh_Arabic_UI_Medium;
	src: url("./assets/fonts/HarmonyOS_Sans_Naskh_Arabic_UI_Medium.ttf");
}

@font-face {
	font-family: HarmonyOS_Sans_SC_Medium;
	src: url("./assets/fonts/HarmonyOS_Sans_SC_Medium.ttf");
}

* {
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
	box-sizing: border-box;
	font-family: Hormony, Hormony_TC, HarmonyOS_Sans_Condensed_Medium, HarmonyOS_Sans_Condensed_Medium_Italic, HarmonyOS_Sans_Medium_Italic, HarmonyOS_Sans_Naskh_Arabic_Medium, HarmonyOS_Sans_Naskh_Arabic_UI_Medium, HarmonyOS_Sans_SC_Medium, sans-serif;
}

.app{
	width: 100vw;
	height: 100vh;
}
</style>
