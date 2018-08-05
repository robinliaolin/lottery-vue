<template>
  <div >
    <div v-for="item in list">
      <!--每注详细情况-->
      <div class="row" style="height: 71px;margin-top: 5px;border: 1px solid gainsboro;">
        <div class="col-xs-1" style="line-height: 71px;padding: 0;text-align: center;">
          <div class="glyphicon glyphicon-remove-circle"></div>
        </div>
        <div class="col-xs-10" style="padding-left: 0px;padding-right: 0px;">
          <div >
            <div style="margin-left: 4.5%;margin-right: 4.5%;" >
              <div>
                <div class="div_item" v-for="redStr in item.red.split(',')">
                  <div class="div_box_item" >{{redStr}}</div>
                </div>
              </div>

              <div class="div_item">
                <div class="div_box_item_blue" >{{item.blue}}</div>
              </div>
            </div>
          </div>
          <div style="clear: both;"></div>
          <p style="margin-left: 4.5%;margin-top: 5px;">
            单式 1注 2元
          </p>
        </div>
        <div class="col-xs-1" style="line-height: 71px;padding-left: 0px;padding-right: 0;">
          <div class="glyphicon glyphicon-chevron-right" style="padding-right: 5px"></div>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SelectedItemList",
        props:['list'],
    }
</script>

<style scoped>

</style>
