Vue.component('top-menu', {
    props: {
        isCollapse: {
            default: () => false,
            type: Boolean,
        },
        defaultAvatar: {
            default: () => '',
            type: String,
        },
    },
    template: `
      <div class="top-menu flex-row flex-center flex-s-b" :class="{closeMenu:isCollapse}">
      <div class="icon-wrap">
        <i class="el-icon-s-fold pointer" v-if="!isCollapse" @click="changeCollapse"></i>
        <i class="el-icon-s-unfold pointer" v-else @click="changeCollapse"></i>
      </div>
      <div class="menu-wrap flex-row flex-center flex-start">
        <el-badge :value="12" class="item pointer">
          <i class="el-icon-bell"></i>
        </el-badge>
        <div class="user-wrap flex-row flex-center flex-start">
          <div class="user-name">代理</div>
          <el-avatar :size="30" :src="defaultAvatar"></el-avatar>
        </div>
        <el-dropdown split-button type="primary" size="small">
          用户名
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户名(代理)</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>资料修改</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="logout-wrap pointer">
          <i class="el-icon-switch-button"></i>
        </div>
      </div>
      </div>`,
    data: vm => ({}),
    methods: {
        changeCollapse() {
            this.$emit('change-collapse', !this.isCollapse)
        },
    },
})