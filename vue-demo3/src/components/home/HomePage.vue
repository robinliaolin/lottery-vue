<template>
  <div>
    <title-bar :title="titleStr" :needback="false"></title-bar>
    <item-bar></item-bar>
  </div>
</template>

<script>
  import TitleBar from "../common/TitleBar"
  import ItemBar from "../common/ItemBar"
    export default {
        name: "HomePage",
        components: {ItemBar, TitleBar},
        data(){
          return {
            titleStr:"首页"
          }
        }
    }
</script>

<style scoped>

</style>
