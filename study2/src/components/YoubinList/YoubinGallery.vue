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
  name: 'YoubinGallery',
  props: {
      items: Array,
      src: String,
      alt: String,
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  li {
    width: calc((100% - 50px) / 5);
    padding: 10px;
    border: 1px solid #000;
    img {
      width: 100%;
      height: 70%;
      margin-bottom: 10px;
    }
  }
}
dl {
  padding-top: 10px;
  border-top: 1px solid #000;
  dt { font-size: 15px; font-weight: bold;}
  dd {}
}
</style>
