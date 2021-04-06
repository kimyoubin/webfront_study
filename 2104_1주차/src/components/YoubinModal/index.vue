<template>
  <div 
    class="modal">
    <div class="modal-content">
      <button
        @click="$emit('close')">닫기</button>
      <dl>
        <dt>제목 : {{ activeInfo.title }}</dt>
        <dd>작성자 : {{ activeInfo.writer }}</dd>
      </dl>
      <div 
        class="img-area"
        :style="{ backgroundImage : 'url(' + activeInfo.src + ')'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoubinModal',  
  props: {    
    items: {
      type: Array
    },
    activeInfo: {
      type: Object,
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .modal-content {
    position: relative;    
    padding: 50px 30px 30px;
    background-color: #fff;
    button {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 25px;
      height: 24px;
      background: url('~@/assets/images/close_btn.png');
      background-size: 100%;
      font-size: 0;
    }
    dl {
      margin-bottom: 30px;
      dt {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
      }
      dd {
        font-size: 14px;
      }
    }
    .img-area {
      width: 400px;
      height: 400px;
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
