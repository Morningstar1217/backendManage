Vue.component('page-info', {
    props: {
        isCollapse: {
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
    template: `
      <div class="page-info" :class="{closeMenu:isCollapse,changeHeight:isOpen}">
      <div class="open-or-close">
        <i class="el-icon-arrow-up pointer" v-if="!isOpen" @click="isOpen = true"></i>
        <i class="el-icon-arrow-down pointer" v-if="isOpen" @click="isOpen = false"></i>
      </div>
      <div class="font-weight">使用说明：</div>
      <div class="info-content">
        本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说
      </div>
      </div>
    `,
})