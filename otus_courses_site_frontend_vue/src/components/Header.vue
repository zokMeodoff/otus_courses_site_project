<template>
	<header class="header page__header">
		<div class="container header__container">
			<router-link class="header__router_link" to="/">OTUS</router-link>
			<router-link class="header__router_link" to="/#courses">Наши курсы</router-link>
			<router-link class="header__router_link" to="/#feedback">Напишите нам</router-link>
		</div>
	</header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css">
.header {
	width: 100%;
	height: 68px;
	position: fixed;
  	top: 0;
	display: flex;
	font-family: Roboto, sans-serif;
	background: linear-gradient(to right, #ba55d3, #6a5acd);
}
.header__container {
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 20px;
}
.header__router_link {
	height: 100%;
	padding: 0 18px;
	vertical-align: middle;
	line-height: 68px;
	color: #ffffff;
	font-size: 20px;
	text-decoration: none;
}
</style>
