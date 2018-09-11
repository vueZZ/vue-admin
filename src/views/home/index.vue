<template>
  <div>
    <h2>首页</h2>
    <!-- <block title="z-img">
      <z-img src="www.baidu.com" @click="$preview($event.target.src)"></z-img>
    </block> -->
    <!-- <block title="geetest">
      <z-geetest src="https://resources.geetest.com/nerualpic/harley4/fa0c6c808df4f1b66fa2093892b778e9.jpg?challenge=4c90e9cbfdca65e0a848a5be5048d0f5"></z-geetest>
      <a href="/excel (38).xls" download="excel (38).xls" target="_blank">点击下载</a>
    </block> -->
    <!-- <block title="按钮">
      <div v-for="size in button.size" :key="size">
        <div v-for="type in button.type" :key="type">
          <z-button @click="handle" :type="type" :size="size" icon="icon-settings">确定</z-button>
          <z-button @click="handle" :type="type" :size="size">确定</z-button>
          <z-button @click="handle" :type="type" :size="size" :disabled="true">确定</z-button>
          <z-button @click="handle" :type="type" :size="size" :loading="true">确定</z-button>
          <span>element：</span>
          <el-button @click="handle" :type="type" :size="size" :loading="true">确定</el-button>
        </div>
      </div>
    </block> -->
    <!-- <block title="input">
      <div v-for="size in input.size" :key="size">
        <div v-for="type in input.type" :key="type">
          <z-input :type="type" :size="size" class="input dfsdfd"></z-input>
          <span>element：</span>
          <el-input :type="type" :size="size" class="input" clearable=""></el-input>
        </div>
      </div>
    </block> -->
    <block title="form">
      <!-- <z-form ref="form" :model="data" label-width="80px" size="mini">
        <z-form-item prop="name" label="姓名" required>
          <z-input v-model="data.name"></z-input>
        </z-form-item>
      </z-form> -->
      <el-form ref="form" :model="data" label-width="80px" size="samll">
        <el-form-item prop="user.name" label="姓名" required>
          <el-input v-model="data.user.name"></el-input>
        </el-form-item>
      </el-form>
    </block>
    <!-- <block title="事件">
      <transition-group name="flip-list" tag="div" mode='in-out'>
        <li v-for="(n, index) in arr" :key="index">{{ n }}</li>
      </transition-group>
      <el-button @click="add">排序</el-button>
    </block> -->
    <!-- <block title="防抖节流">
      <el-button @click="debounce">防抖</el-button>
    </block> -->
    <block title="放大镜" class="h1000">
      <z-magnifier src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1536310639&di=8763dea58fa9b1300d78f93b19462b08&src=http://a3.topitme.com/0/82/57/11302368668ab57820o.jpg"></z-magnifier>
    </block>
  </div>
</template>

<script>
import block from '@/components/block/index.vue'
export default {
  components: {
    block
  },
  data () {
    return {
      n: '',
      text: {},
      button: {
        type: ['default', 'primary', 'success', 'info', 'wraning', 'danger'],
        size: ['mini', 'small', 'medium', 'large']
      },
      input: {
        type: ['text'],
        size: ['mini', 'small', 'medium', 'large']
      },
      data: {
        user: {}
      },
      arr: [6, 1, 2, 3, 4, 5]
    }
  },
  methods: {
    handleExport () {
      let href = './index.vue'
      window.location.href = href
    },
    handle (string) {
      if (string || string === '') {
        console.log(string)
      } else {
        console.log('handle')
      }
    },
    change (e) {
      console.log(e)
    },
    log (e) {
      console.log(e)
    },
    sort () {
      this.arr.sort()
      // this.arr.splice(0, 1)
      // this.arr.splice(this.arr.length, 1, 's')
    },
    add () {
      this.arr.sort()
      // this.arr.splice(this.randomIndex(), 0, 3)
    },
    randomIndex () {
      return Math.floor(Math.random() * this.arr.length)
    },
    debounce () {
      console.log('start')
      this.$utils.throttle(this.log, 2000)
    }
  }
}
</script>

<style lang="scss">
.input{
  width: 100px;
}
.sort-arr-move {
  transition: all 1s;
}
.flip-list-enter-active,.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-move {
  transition: all 1s;
}
.flip-list-enter,.flip-list-leave-to {
  opacity:0;
  transform: translateX(50px);
}
/**
 * 要让删除的元素先脱离文档流，旁边的元素才能过渡过来
 */
.flip-list-leave-active {
  position:absolute;
}
.h1000{
  height: 1000px;
}
</style>
