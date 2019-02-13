<template>
  <el-container style=" border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <span>王小虎</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 50px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-scrollbar class="slider">
        <el-aside style="height:100vh;background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']" class="el-menu-vertical-demo"
            background-color="#FBFCFD" text-color="#666" active-text-color="purple" router>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <el-menu-item index="/">onePage</el-menu-item>
                <el-menu-item index="/two">twoPage</el-menu-item>
                <el-menu-item index="/three">threePage</el-menu-item>
                <el-menu-item index="/four">fourPage</el-menu-item>
                <el-menu-item index="/five">fivePage</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item index="/six">sixPage</el-menu-item>
              <el-menu-item index="/seven">sevenPage</el-menu-item>
              <el-menu-item index="/eight">eightPage</el-menu-item>
              <el-menu-item index="/nine">ninePage</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <el-menu-item index="/ten">tenPage</el-menu-item>
                <el-menu-item index="/eleven">elevenPage</el-menu-item>
                <el-menu-item index="/twelve">twelvePage</el-menu-item>
                <el-menu-item index="/thireen">thireenPage</el-menu-item>
                <el-menu-item index="/fourteen">fourteenPage</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Home Page.vue'
      }
    },
    components: {

    }
  }

</script>

<style scoped>
  .el-header {
    background: red;
    color: white;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    background-color: #f2e6f2;
  }

  .slider {
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 200px;
    height: 100%;
    min-height: 600px;
    margin-bottom: 50px;
    /* border-top: 1px solid #273140; */
    border-bottom: 1px solid #3e495a;
    /* overflow-y: auto; */
    overflow: hidden;
    z-index: 3;
    padding-bottom: 60px;
  }

  .slider::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .slider::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }

  .slider::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    border-radius: 0;
    background: #fff;
  }

  .slider::scrollbar {
    /*滚动条整体样式*/
    width: 0px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .slider::scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }

  .slider::scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    border-radius: 0;
    background: #fff;
  }

</style>
