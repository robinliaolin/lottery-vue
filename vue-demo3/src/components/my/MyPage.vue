<template>
  <div>
    <title-bar :title="titleStr"></title-bar>
    <item-bar></item-bar>
  </div>
</template>

<script>

    import TitleBar from "../common/TitleBar";
    import ItemBar from "../common/ItemBar";
    export default {
        name: "MyPage",
        components: {ItemBar, TitleBar},
        data(){
          return {
            titleStr:"个人信息"
          }
        }
    }
</script>

<style scoped>

</style>
