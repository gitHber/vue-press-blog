<!--  -->
<template>
  <div class="container">
    <left></left>
    <right></right>
    <skill :skills="skills"></skill>
  </div>
</template>

<script type='text/ecmascript-6'>
import Skill from './Skill'
import Left from './Left'
import Right from './Right'

export default {
  data() {
    return {
      skills: [{
        name: 'React', percent: 80
      },{
        name: 'Vue', percent: 60
      },{
        name: 'Java', percent: 60
      },{
        name: 'Python', percent: 50
      },{
        name: 'node', percent: 55
      }]
    }
  },
  components:{
    Skill,
    Left,
    Right
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .container
    overflow hidden
    height: calc(100vh - 3.6rem)
    position relative
</style>