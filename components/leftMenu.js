Vue.component('left-menu', {
    props: {
        defaultMenu: {
            default: [],
            type: Array,
        },
        activeMenu: {
            default: '1-1',
            type: String,
        },
        isCollapse: {
            default: () => false,
            type: Boolean,
        },
    }
    ,
    template: `
      <div class="left-menu" :class="{closeMenu:isCollapse}">
      <div class="logo-wrap">
        <img src="../images/logo.png" alt="">
      </div>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo"
               :collapse="isCollapse">
        <el-submenu :index="item.index" v-for="(item,index) in defaultMenu" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <el-menu-item :index="item.index+'-'+itm.index" v-for="(itm,ind) in item.children" :key="ind">
            <el-link :underline="false" :href="itm.path">{{ itm.title }}</el-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      </div>`,
    methods: {},
})