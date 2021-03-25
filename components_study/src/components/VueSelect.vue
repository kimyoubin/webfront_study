<template>
    <div class="selectbox">
        <button @click="toggleEvent">{{ selected }}</button>
        <ul
            v-if="isActive"
            class="selectbox">
            <!-- li 클릭시 item.option data가 button에 bind 돼야함 -->
            <li 
                v-for="(item, key) in items"
                :key="key"
                @click="selectOption(item)">{{ item.option }}</li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'VueSelect',
	props: [
        'items', 'selected'
    ],
	data() {
		return {
			isActive: false
		}
	},
    methods: {
        toggleEvent: function () {
            
            this.isActive = !this.isActive
        },
        selectOption: function(item) {
            console.log(item);
            console.log(this.selected);
            item.option = this.selected
        }
    }
}
</script>

<style scoped>
.selectbox {
    width: 100%;    
}

.selectbox button, .selectbox li {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 18px;
    text-align: left;
	color: #333;	
}

.selectbox button {
    border: 1px solid #aeaeae;
}

.selectbox ul {

}

.selectbox ul li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid #aeaeae;
    border-top: 0;
    cursor: pointer;
}

</style>
