<template>
  <ul>
    <li 
      v-for="(item, key) in items"
      :key="key"
      @click="$emit('click', item)">
      <div
        :style="{ backgroundImage : 'url(' + item.src + ')' }" 
        class="img-area"
      ></div>
      <dl>
        <dt>{{ item.title }}</dt>
        <dd>{{ item.date }}</dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'YoubinWebzine',
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
    console.log('Webzine component');
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
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
    transition: all .4s;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 10px 10px 15px rgba(0,0,0,.3);
    }
    .img-area {
      width: 100%;
      height: 300px;
      background-size: cover;
      background-position: center;
    }
  }
}
dl {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  dt { 
    margin-bottom: 10px;
    font-size: 20px; 
    font-weight: bold;
  }
  dd {
    font-size: 15px;
    &.date {
      margin-bottom: 5px;
    }
  }
}
</style>
