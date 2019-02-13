<template>
    <div>
        <h1 class="animated flash">{{msg}}</h1>
        <div class="hh animated bounce">

        </div>
    </div>
</template>
<script>
  export default {
    name: 'two',
    data() {
      return {
        msg: 'animated 测试'
      }
    },
    components: {

    }
  }

</script>

<style scoped>
  .hh{
    width:100px;
    height:100px;
    border:solid 1px red;
  }
</style>
