<template>
  <div>
    <youbin-gallery 
      :items="listData"/>
    <youbin-table 
      :items="listData"/>
    <youbin-webzine
      :items="listData"/>
  </div>
</template>

<script>
import YoubinGallery from './YoubinGallery.vue'
import YoubinTable from './YoubinTable.vue'
import YoubinWebzine from './YoubinWebzine.vue'


export default {
  components: { YoubinGallery, YoubinTable, YoubinWebzine },
  name: 'YoubinList',  
  props: {
      
  },
    data() {
    return {
      listData: [
        {
          number: '1',
          title: '유빈 리스트입니다',
          writer: '유빈',
          date: '2021-04-01',
          views: '조회수',
          src: require('@/assets/images/1.jpg'),
          alt: '하연이1'
        },
        {
          number: '2',
          title: '뷰를 공부하고있습니당',
          writer: '유빈',
          date: '2021-07-05',
          views: '조회수',
          src: require('@/assets/images/2.jpg'),
          alt: '하연이2'
        },
        {
          number: '3',
          title: '이번 과제는 너무 어렵네요ㅠㅠ',
          writer: '유빈',
          date: '2021-10-06',
          views: '조회수',
          src: require('@/assets/images/3.jpg'),
          alt: '하연이3'
        },
        {
          number: '4',
          title: '배움은 끝이 없어요...',
          writer: '유빈',
          date: '2021-10-30',
          views: '조회수',
          src: require('@/assets/images/4.jpg'),
          alt: '하연이4'
        },
        {
          number: '5',
          title: '졸립다ㅠㅠ',
          writer: '유빈',
          date: '2021-05-05',
          views: '조회수',
          src: require('@/assets/images/5.jpg'),
          alt: '하연이5'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
