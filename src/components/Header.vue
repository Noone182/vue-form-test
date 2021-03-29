<template>
	<nav>
		<h1>Тестовое задание</h1>
		<img src="@/assets/logo.svg" alt="" class="logo">
	</nav>
</template>

<script>
	export default {
		name: 'Header'

	}
</script>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		padding: 0 30px;
	}
	h1 {
		margin: 0;
		font-size: 34px;
		font-weight: normal;
	}
</style>
