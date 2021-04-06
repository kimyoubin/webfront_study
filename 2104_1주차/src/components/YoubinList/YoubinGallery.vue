<template>
  <ul>
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
  }
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
