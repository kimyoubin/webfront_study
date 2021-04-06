<template>
  <div class="index">   

    <youbin-gallery 
      @click="$emit('click')" />

    <youbin-table
      @click="$emit('click')" />

    <youbin-webzine
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
  },
}
</script>

<style scoped lang="scss">

</style>
