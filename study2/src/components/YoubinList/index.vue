<template>
  <div class="index">   
    <ul class="btn-area">
      <li>
        <button
        @click="changeList('YoubinGallery')"
        >갤러리형</button>
      </li>
      <li>
        <button
        @click="changeList('YoubinTable')"
        >테이블형</button>
      </li>
      <li>
        <button
        @click="changeList('YoubinWebzine')"
        >웹진형</button>
      </li>
    </ul>   
    <!--       
      1. v-bind:is="컴포넌트명" : vue에서 동적으로 컴포넌트를 생성하며 전환효과를 주기 위해 사용할 수 있다.
      2. keep-alive : 비활성 컴포넌트 인스턴스를 파괴하지 않고 캐시한다. 
      3. keep-alive 적용 전 : 전환이 일어날때마다 생성과 소멸을 반복하며 data가 유지되지 않음! 
        그래서 전환이 일어날때마다 번쩍거리는 느낌이 있음.
      4. keep-alive 적용 후 : created에 캐시되어 다른 컴포넌트에 갔다와도 페이지의 새로고침이 발생하기 전까지 data가 유지 된다.
        그래서 전환이 일어날때마다 번쩍거리지 않는다!
    -->
    <keep-alive>
      <component 
        :is="component" 
        :items="listData" />
    </keep-alive> 
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
          views: '12314',
          src: require('@/assets/images/1.jpg'),
          alt: '하연이1',
          mark: '1'
        },
        {
          number: '2',
          title: '뷰를 공부하고있습니당',
          writer: '유빈',
          date: '2021-07-05',
          views: '2445',
          src: require('@/assets/images/2.jpg'),
          alt: '하연이2',
          mark: '2'
        },
        {
          number: '3',
          title: '이번 과제는 너무 어렵네요ㅠㅠ',
          writer: '유빈',
          date: '2021-10-06',
          views: '765',
          src: require('@/assets/images/3.jpg'),
          alt: '하연이3',
          mark: '3'
        },
        {
          number: '4',
          title: '배움은 끝이 없어요...',
          writer: '유빈',
          date: '2021-10-30',
          views: '45678',
          src: require('@/assets/images/4.jpg'),
          alt: '하연이4',
          mark: '4'
        },
        {
          number: '5',
          title: '졸립다ㅠㅠ',
          writer: '유빈',
          date: '2021-05-05',
          views: '67',
          src: require('@/assets/images/5.jpg'),
          alt: '하연이5',
          mark: '5'
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
.index {
  padding: 30px;
}
.btn-area {
  display: flex;
  margin-bottom: 30px;
  li {
    button {
      width: 100px;
      height: 35px;
      margin-right: 15px;
      color: #fff;
      font-weight: bold;
      border-radius: 13px;
    }
    &:nth-child(1) {
      button {
        background-color: #ffb819;
      }
    }
    &:nth-child(2) {
      button {
        background-color: #ec2e51;
      }
    }
    &:nth-child(3) {
      button {
        background-color: #199fff;
      }
    }
  }
}
</style>
