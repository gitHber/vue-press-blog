<!--  -->
<template>
  <div class="container">
    <skill :skills="skills"></skill>
  </div>
</template>

<script type='text/ecmascript-6'>
import Skill from './Skill'

export default {
  data() {
    return {
      skills: [{
        name: 'React', percent: 80
      },{
        name: 'Vue', percent: 60
      }]
    }
  },
  components:{
    Skill
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .container
    overflow hidden
</style>