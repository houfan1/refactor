<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">获取store数据</template>
        <el-menu-item index="/StoreTest">读入数据</el-menu-item>
        <el-menu-item index="/getStoreData">获取数据</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">接口相关</template>
        <el-menu-item index="/ApiTest">接口测试</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect(val) {
      if (this.$route.path == val) return
      this.$router.push(`${val}`)
    }
  }
}
</script>
