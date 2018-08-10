<!--  -->
<template>
  <div class="left" ref="left">
    <div class="content" :style="leftStyle">
      <div class="logo">
       <img src="img/logo.png" />
      </div>
      <p style="font-weight:bold;color:#271b1b;font-family:KaiTi">李坤</p>
      <p style="font-weight:bold;color:#618855;font-family:FangSong">天行健，君子以自强不息</p>
      <div class="links">
        <a title="https://blog.csdn.net/qq_22672291" href="https://blog.csdn.net/qq_22672291">
          <img class="csdn" src="img/csdn.png">
        </a>
        <a title="https://segmentfault.com/u/likun_segmentfault" href="https://segmentfault.com/u/likun_segmentfault">
          <img class="segment" src="img/logo-b.svg">
        </a>
      </div>
    </div>
    <div class="operator" @click="changeShow">{{icon}}</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data(){
    return {
      isShow: true,
      leftStyle: {
        background: `url(${require('../public/img/bg-left.png')}) no-repeat`,
        backgroundSize: '100% 100%'
      }
    }
  },
  computed:{
    icon(){
      return this.isShow ? '<' : '>'
    }
  },
  watch:{
    isShow(newValue){
      console.log(this.$refs.content)
      let width = this.$refs.left.clientWidth
      newValue ? this.$refs.left.style.left='0vw':this.$refs.left.style.left=`-${width-30}px`
    }
  },
  methods: {
    changeShow(){
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .left
    font-family: SimSun KaiTi NSimSun FangSong
    position: absolute
    padding: 0
    left: 0
    display: flex
    transition: all 1s

    .content
      position: relative
      box-sizing: border-box
      width: 20vw
      min-width: 200px
      background: #f5f5f5
      height: 100%
      box-shadow: 0px 0px 5px #888888
      text-align: center
      display: flex
      flex-direction: column
      justify-content: center

      .logo
        background: #fff
        box-shadow: 0 0 5px #b94806
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
    .operator
      cursor: pointer 
      width: 30px
      height: 20px
      background: #d2c8c8
      color: #2cca1a
      display: flex
      align-items: center
      justify-content: center
      font-size: 20px
      font-weight: bold
</style>