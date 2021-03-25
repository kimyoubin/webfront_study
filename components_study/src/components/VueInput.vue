<template>
	<input 
		:type="type"
		:placeholder="placeholder"
		:name="name"
		:id="id"
		:value="value">
</template>

<script>
export default {
	name: 'VueInput',
	props: [
		'type', 'placeholder', 'name', 'id', 'value', 
	],
	data() {
		return {
			
		}
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
	border: 1px solid #aeaeae;
}

input::placeholder {
	font-size: 16px;
	color: #aeaeae;
}

</style>
