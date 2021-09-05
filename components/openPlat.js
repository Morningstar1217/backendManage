Vue.component('open-plat', {
    props: {
        //这里是组件可以接受的参数，也就是相当于面向原型写组件时的配置参数，用户可以传递不同参数，自己定义组件
        formTitle: {
            type: String,
            default: () => '',
        },
        platType: {
            type: Number,
            default: () => 0,
        },
    },
    template: `
      <div class="form-wrap" style="width: 450px">
      <div class="open-plat-title font-weight">{{ formTitle }}</div>
      <el-form inline label-width="90px" label-position="right">
        <el-form-item label="APP_key:">
          <el-input size="small" v-model="form.key" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="APP_secret:">
          <el-input size="small" v-model="form.secret" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="回调网址:">
          <el-input size="small" v-model="form.url" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="素材时长:" v-if="platType===2">
          <el-input size="small" v-model="form.time" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="时长模式:" v-if="platType===2">
          <el-radio-group v-model="form.timeModel" style="width:300px">
            <el-radio :label="1">四舍五入</el-radio>
            <el-radio :label="2">向上取整</el-radio>
            <el-radio :label="3">向下取整</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      </div>
    `,
    methods: {
        //这里定义的组件的方法，利用$emit()进行父子组件通信，子组件通过点击事件告诉父组件触发一个自定义事件，$emit()方法第二个参数也可以用来传递数据
    },
    data: vm => ({
        form: {
            key: '',
            secret: '',
            url: '',
            time: '',
            timeModel: '',
        },
    }),
})