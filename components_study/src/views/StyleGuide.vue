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
			<vue-select 
				:items="listData"
				:selected="selectedValue"/>
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
			selectedValue: '선택해주세요.',
			listData: [
				{
					option: 'option1',
				},
				{
					option: 'option2',
				},
				{
					option: 'option3',
				},
				{
					option: 'option4',
				},
				{
					option: 'option4',
				},
				{
					option: 'option4',
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
