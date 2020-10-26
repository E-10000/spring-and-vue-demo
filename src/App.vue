<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>图书管理</template>
            <el-menu-item-group>

              <el-menu-item index="/">查看书籍</el-menu-item>
              <el-menu-item index="addbook">添加书籍</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>王小虎</span>
        </el-header>
        <br><br>
        <router-view></router-view>

      </el-container>
    </el-container>


  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>


<script>
  export default {
    data() {
      const item = {

      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>