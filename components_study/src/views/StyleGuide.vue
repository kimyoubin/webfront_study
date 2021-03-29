<template>
	<div class="styleGuide">
		<h1>StyleGuide</h1>
		<div class="wrap">
			<h2>input text type</h2>
			<vue-input 		
				v-model="inputId"	
				type="text"
				name="input-text"
				id="input-text"
				value=""
				placeholder="ID를 입력해주세요."/>
			<vue-input 
				v-model="inputPw"	
				type="password"				
				name="input-pw"
				id="input-pw"
				value=""
				placeholder="PASSWORD를 입력해주세요."/>
			<vue-input 
				v-model="inputEmail"	
				type="email"				
				name="input-email"
				id="input-email"
				value=""
				placeholder="E-mail을 입력해주세요."/>
			
			<p>ID : {{ inputId }}</p>
			<p>PW : {{ inputPw }}</p>
			<p>Email : {{ inputEmail }}</p>
		</div>

		<div class="wrap">
			<h2>selectbox</h2>
			<vue-select 
				:items="listData"
				:selected="selectedValue"/>
		</div>

		<div class="wrap">
			<h2>textarea</h2>
			<vue-textarea 
				v-model="textarea"
				id="textarea"
				name="textarea"/>
			<p>Textarea : {{ textarea }}</p>
		</div>
	</div>
</template>

<script>
import VueInput from '../components/VueInput.vue'
import VueSelect from '../components/VueSelect.vue'
import VueTextarea from '../components/VueTextarea.vue'
export default {
    components: { VueInput, VueSelect, VueTextarea },
	name: 'StyleGuide',
	data() {
		return {
			inputId: '',
			inputPw: '',
			inputEmail: '',
			textarea: '',
			selectedValue: '선택해주세요.',
			listData: [
				{
					option: 'all',
				},
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
					option: 'option5',
				},
				{
					option: 'option6',
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
