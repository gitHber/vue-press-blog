<!--  -->
<template>
  <div class="left">
    <div class="logo">
       <img src="img/logo.png" />
    </div>
    <p>李坤</p>
    <p>天行健，君子以自强不息</p>
    <div class="links">
      <a title="https://blog.csdn.net/qq_22672291" href="https://blog.csdn.net/qq_22672291">
        <img class="csdn" src="img/csdn.png">
      </a>
      <a title="https://segmentfault.com/u/likun_segmentfault" href="https://segmentfault.com/u/likun_segmentfault">
        <img class="segment" src="img/logo-b.svg">
      </a>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .left
    position: absolute
    left: 0
    width: 20vw
    min-width: 200px
    background: #f5f5f5
    height: 100%
    box-shadow: 5px 5px 5px #888888;
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    .logo
      background: #fff
      border-radius: 50%
      width: 70px
      height: 70px
      margin: 0 auto
      img 
        width: 50px
        margin: 10px
    .links
      display: flex
      justify-content: space-around
      img
        border: 1px solid #ebeef5
        border-radius: 5px
        height: 15px
        background: #fff
        padding: 2px
        box-shadow: 0px 0px 3px #888888;
      .csdn
        // width: 60px
      .segment
        // width: 130px
</style>