<template>
  <div>   

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
      default: 'gallery'
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
  }
}
</script>

<style scoped lang="scss">

</style>
