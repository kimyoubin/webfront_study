<template>
  <ul>
    <li 
      v-for="(item, key) in items"
      :key="key">
      <img :src="item.src" :alt="item.alt">
      <dl>
        <dt>{{ item.title }}</dt>
        <dd>{{ item.date }}</dd>
        <dd>{{ item.views }}</dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'YoubinWebzine',
  props: {
    items: Array,
    src: String,
    alt: String,
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
    width: calc((100% - 50px) / 5);
    padding: 10px;
    border: 1px solid #000;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
dl {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  dt { font-size: 15px; font-weight: bold;}
  dd {}
}
</style>
