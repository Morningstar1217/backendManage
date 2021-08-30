Vue.component('page-info', {
    props: {
        isCollapse: {
            default: false,
            type: Boolean,
        },
    },
    template: `
      <div class="page-info" :class="{closeMenu:isCollapse}">
      <div class="font-weight">使用说明：</div>
      <div class="info-content">
        本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说
      </div>
      </div>
    `,
})