<!-- 默认路由页面布局 -->
<template>
  <section class="wrap">
    <el-tabs v-model="tabValue" type="card" closable @tab-click="toPath" @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in tabLists"
        :key="item.path"
        :name="item.path"
        :label="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <i class="iconfont icon-close" @click="removeAllTab"></i>
    <div class="wrap-head">
      <!-- <slot></slot> -->
      <div class="wrap-help">
        <i class="iconfont icon-settings"></i>
      </div>
    </div>
    <div class="wrap-container">
      <div v-if="!netWork">
        <h2>断网了</h2>
        <el-button @click="refresh">刷新</el-button>
      </div>
      <div v-else-if="dataError">
        数据出错了
        <el-button @click="doRefresh">刷新</el-button>
      </div>
      <template v-else>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :key="$route.path" @error="handleDataError"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="$route.path" @error="handleDataError"></router-view>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dataError: false,
      tabLists: [],
      tabValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'netWork', 'sub'
    ])
  },
  created () {
    this.handleTabsEdit()
  },
  watch: {
    $route () {
      this.handleTabsEdit()
    },
    tabValue (val) {
      this.$router.push(val)
    }
  },
  methods: {
    refresh () {
      if (navigator.onLine) {
        this.$store.dispatch('changeNetwork', true)
        this.$router.replace('/other/refresh')
      } else {
        this.$message.error({
          info: '错误',
          message: '未连接到互联网'
        })
      }
    },
    doRefresh () {
      this.$router.replace('/other/refresh')
    },
    handleDataError (val) {
      this.dataError = val
    },
    handleTabsEdit () {
      this.tabValue = this.$route.path
      let flag = true
      this.tabLists.forEach(element => {
        if (element.path === this.tabValue) {
          flag = false
          return true
        }
      })
      if (flag) {
        this.tabLists.splice(this.tabLists.length, 1, this.$route)
      }
    },
    toPath (tab, event) {
      this.$router.push(tab.name)
      // console.log(tab)
    },
    removeTab (targetName) {
      let tabs = this.tabLists
      let activeName = this.tabValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.path === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.path
            }
          }
        })
      }
      this.tabValue = activeName
      this.tabLists = tabs.filter(tab => tab.path !== targetName)
    },
    removeAllTab () {
      this.tabLists = []
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  &-head {
    position: relative;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 14px;
    padding: 17px 21px;
    color: #333;
  }
  &-container {
    margin: 10px;
    padding: 15px;
    min-width: 750px;
    background: #fff;
  }
  &-help{
    position: absolute;
    right: 20px;
    top: 8px;
    width: 42px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bbb;
    border-radius: 2px;
    cursor: pointer;
  }
  .letf{
    left: 90px;
  }
  .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: red;
  }
}
</style>
