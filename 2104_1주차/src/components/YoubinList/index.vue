<template>
  <div>   
    <!--       
      * v-bind:is="컴포넌트명" : vue에서 동적으로 컴포넌트를 생성하며 전환효과를 주기 위해 사용할 수 있다.
      * keep-alive : 비활성 컴포넌트 인스턴스를 파괴하지 않고 캐시한다. 
      * keep-alive 적용 전 : 전환이 일어날때마다 생성과 소멸을 반복하며 data가 유지되지 않음! 
        그래서 전환이 일어날때마다 번쩍거리는 느낌이 있음.
      * keep-alive 적용 후 : created에 캐시되어 다른 컴포넌트에 갔다와도 페이지의 새로고침이 발생하기 전까지 data가 유지 된다.
        그래서 전환이 일어날때마다 번쩍거리지 않는다!
    -->
    <keep-alive>
      <!-- 
        3. 자식에서 전달해준 input이벤트를 @input으로 받아 modalData와 함께 부모로 전달한다. 
      -->
      <youbin-gallery 
        v-model="modalData"
        @input="$emit('input', modalData)"
        :items="items"
        v-if="type === 'gallery'"
        @click="$emit('click')" />

      <youbin-table
        v-model="modalData"
        @input="$emit('input', modalData)"
        :items="items"
        v-else-if="type === 'table'"
        @click="$emit('click')" />

      <youbin-webzine
        v-model="modalData"
        @input="$emit('input', modalData)"
        :items="items"
        v-else-if="type === 'webzine'"
        @click="$emit('click')" />
    </keep-alive> 
  </div>
</template>

<script>
import YoubinGallery from '@/components/YoubinList/YoubinGallery.vue'
import YoubinTable from '@/components/YoubinList/YoubinTable.vue'
import YoubinWebzine from '@/components/YoubinList/YoubinWebzine.vue'

export default {
  components: { YoubinGallery, YoubinTable, YoubinWebzine },
  name: 'YoubinList',
  props: {   
    type: {
      type: String,
    },
    items: {
      type: Array,
    }
  },
  data() {
    return {
      modalData: {}
    }
  },
  methods: {
    
  },
  mounted() {
    console.log('modalData :: ',this.modalData);
  }
}
</script>

<style scoped lang="scss">

</style>
