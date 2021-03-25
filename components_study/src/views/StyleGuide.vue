<template>
	<div class="styleGuide">
		<h1>StyleGuide</h1>
		
		<div class="wrap">
			<h2>input text type</h2>
			<vue-input 
				type="text"
				name="input-text"
				id="input-text"
				value=""
				placeholder="ID를 입력해주세요."/>
			<vue-input 
				type="password"				
				name="input-pw"
				id="input-pw"
				value=""
				placeholder="PASSWORD를 입력해주세요."/>
			<vue-input 
				type="email"				
				name="input-email"
				id="input-email"
				value=""
				placeholder="E-mail을 입력해주세요."/>

		</div>

		<div class="wrap">
			<h2>selectbox</h2>
			<vue-select :items="listData"/>
		</div>
	</div>
</template>

<script>
import VueInput from '../components/VueInput.vue'
import VueSelect from '../components/VueSelect.vue'
export default {
    components: { VueInput, VueSelect },
	name: 'StyleGuide',
	data() {
		return {
			listData: [
				{
					option: '선택하세요',
				},
				{
					option: '선택하세요2',
				},
				{
					option: '선택하세요3',
				},
				{
					option: '선택하세요4',
				}
			]
		}
	}
}
</script>

<style scoped>
.styleGuide {
	padding: 30px;
	width: 500px;
}
.wrap {
	margin-bottom: 30px;
}
h1 {
	margin-bottom: 50px;
}
h2 {
	margin-bottom: 10px;
}
</style>
