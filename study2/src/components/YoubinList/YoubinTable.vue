<template>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>날짜</th>
        <th>조회수</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="(item, key) in items"
        :key="key">
        <td>{{ item.number }}</td>
        <td>{{ item.title }}</td>
         <td>{{ item.writer }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.views }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'YoubinTable',
  props: {
      items: Array   
  },

}
</script>

<style scoped lang="scss">

table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  th, td {
    padding: 10px;
    border-right: 1px solid #000; 
    border-bottom: 1px solid #000; 
  }
}
</style>
