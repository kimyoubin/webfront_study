<template>
  <ul>
    <!-- 
      1. 각 컴포넌트에 v-for를 사용하여 app.vue에 있는 data를 불러온다. 
    -->

    <!-- 
      5. 클릭할때마다 modal을 띄우기 위한 @click이벤트를 $emit으로 걸어준다.        
        - 'input' : input이벤트를 부모에게 item과 함께 전달해준다. 
        - 'click' : modal을 띄위기 위한 이벤트를 부모에게 전달시킨다.
    -->
    <li 
      v-for="(item, key) in items"
      :key="key"
      @click="$emit('input', item); $emit('click')">
      <span class="mark">{{ item.mark }}</span>
      <div class="img-area">
        <img :src="item.src" :alt="item.alt">
      </div>
      <dl>
        <dt>제목 : {{ item.title }}</dt>
        <dd class="date">날짜 : {{ item.date }}</dd>
        <dd class="views">조회수 : {{ item.views }}</dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'YoubinGallery',
  props: {
    items: {
      type: Array
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
  },
  created() {
    console.log('Gallery component');
  },
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  li {
    position: relative;
    width: calc((100% - 100px) / 5);
    border: 1px solid #c6c6c6;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    .mark {
      position: absolute;
      top: 0;
      left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 45px;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      background-color: #f5c53b;
      z-index: 1;
    }
    .img-area { 
      height: 70%;
      overflow: hidden;
      img {
        width: 100%;       
        height: 100%; 
        transition: all .4s;
      }
    }
    
  }
}
dl {
  padding: 20px;
  dt { 
    margin-bottom: 10px;
    font-size: 18px; 
    font-weight: bold;
  }
  dd {
    &.date {
      margin-bottom: 20px;
    }
    &.views {
      text-align: right;
    }
  }
}
</style>
