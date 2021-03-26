<template>
	<input 				
		:type="type"
		:placeholder="placeholder"
		:name="name"
		:id="id"
		:value="value"
		@click="isActive = true"
		@blur="isActive = false"
		:class="{ 'on' : isActive }">
</template>

<script>
export default {
	name: 'VueInput',
	props: [
		'type', 'placeholder', 'name', 'id', 'value', 'checked'
	],
	data() {
		return {
			isActive: false,
		}
	},
	methods: {
	}
}
</script>

<style scoped>

input {
	width: 100%;
	height: 50px;
	padding: 10px;
	margin-bottom: 15px;
	font-size: 18px;
	color: #333;
	border: 1px solid #8e8e8e;
}

input::placeholder {
	font-size: 16px;
	color: #8e8e8e;
}

input.on {
	border: 1px solid #001ad7;
	transition: all .3s;
}

</style>
