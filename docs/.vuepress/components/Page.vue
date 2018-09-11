<!-- 评论组件，需要请在博客底部添加<Page /> -->
<template>
  
</template>

<script type='text/ecmascript-6'>
  import Valine from 'valine'
  import leancloudStorage from 'leancloud-storage'
  export default {
    mounted: function() {
    // require window 
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = leancloudStorage

    }
    const vcomments = document.createElement('div')
    vcomments.id = 'vcomments'
    vcomments.style.margin = '1em 4em 0 4em'
    const $page = document.querySelector('.page')
    if ($page) {
      $page.appendChild(vcomments)
      new Valine({
        el: '#vcomments' ,
        appId: '168tL70jbqq81fD0oGioMpiH-gzGzoHsz',// your appId
        appKey: 'LjkVyO0EBM1UhNEY3CzJMTzB', // your appKey
        notify:true, // 邮件提醒 
        verify:false, // 验证码
        avatar:'mm', 
        placeholder: '说点什么吧' 
      });
    }
    
    
  },
  }
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
</style>