<template>
  <div>
    
    
    <button
      @click="changeList('YoubinGallery')"
      >갤러리형</button>
    <button
      @click="changeList('YoubinTable')"
      >테이블형</button>
    <button
      @click="changeList('YoubinWebzine')"
      >웹진형</button>
    
    <!--       
      1. v-bind:is="컴포넌트명" : vue에서 동적으로 컴포넌트를 생성하며 전환효과를 주기 위해 사용할 수 있다.
    -->
      <component 
      :is="component" 
      :items="listData" />

    <!-- <youbin-gallery 
      :items="listData"/>
    <youbin-table 
      :items="listData"/>
    <youbin-webzine
      :items="listData"/> -->
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
      component: 'YoubinGallery',
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
  },
  methods: {
    changeList: function (componentName) {
      // 버튼을 클릭할때마다 컴포넌트 이름을 인자로 넘겨받는다.
      this.component = componentName
    }
  }
}
</script>

<style scoped lang="scss">
button {
  width: 100px;
  height: 50px;
  margin-right: 10px;
  color: #fff;
  background-color: #000;
}
</style>
