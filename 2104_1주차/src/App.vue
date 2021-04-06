<template>
  <div id="app">

    <!-- 1. button을 클릭할때마다 listType을 string값으로 넘겨준다. -->
    <ul class="btn-area">
      <li><button @click="changeList('gallery')">갤러리형</button></li>
      <li><button @click="changeList('table')">테이블형</button></li>
      <li><button @click="changeList('webzine')">웹진형</button></li>
    </ul>   

    <!-- 
      2. Youbin에서 props으로 넘겨준 type을 listType값으로 바인딩해준다. 
      4. 자식에서 받은 modalData를 v-model="modalData"로 연결해준다.
    -->
    <youbin-list
      :type="listType" 
      :items="listData" 
      v-model="modalData" 
      @click="modalActive = true"
    ></youbin-list>
    
    <!-- 
      
    -->
    <youbin-modal
      v-if="modalActive"
      @close="modalClose">
      <dl>
        <dt>제목 : {{ modalData.title }}</dt>
        <dd>작성자 : {{ modalData.writer }}</dd>
        <dd><img :src="modalData.src"></dd>
      </dl>
    </youbin-modal>

  </div>
</template>

<script>
import YoubinList from '@/components/YoubinList/index.vue'
import YoubinModal from '@/components/YoubinModal/index.vue'

export default {
  components: { YoubinList, YoubinModal },
  name: 'app',  
  props: {
      
  },
  data() {
    return {
      listType: 'gallery',
      modalActive: false,
      modalData: {},
      columns: [
        {
          label: '번호',
          value: 'number'
        },
        {
          label: '제목',
          value: 'title'
        },
        {
          label: '글쓴이',
          value: 'writer'
        },
        {
          label: '날짜',
          value: 'date'
        },
        {
          label: '조회수',
          value: 'views'
        }
      ],

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
    changeList: function (type) {
      // 버튼을 클릭할때마다 string값을 넘겨준다.
      console.log('type ::', type);
      this.listType = type
    },
    // ModalOn: function () {
      
    // },
    modalClose: function () {
      this.modalActive = false
    },
    dataChange: function (value) {
      this.list = value;
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
