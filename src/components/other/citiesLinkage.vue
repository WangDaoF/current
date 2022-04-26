<template>
  <div>
    <el-form ref="shipping_address " :model="address" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="地址信息" prop="address">
        <el-cascader v-model="address.address" :options="addressOptions" :props="addressProps"
                     :style="{width: '100%'}" placeholder="请选择地址信息" clearable ></el-cascader>
      </el-form-item>
      <el-form-item label="详细地址" prop="detailed">
        <el-input v-model="address.detailed" type="textarea" placeholder="请输入详细地址"
                  :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}" ></el-input>
      </el-form-item>
      <el-form-item label="邮政编码" prop="postal_code">
        <el-input v-model="address.postal_code" placeholder="请输入邮政编码" clearable :style="{width: '100%'}" >
        </el-input>
      </el-form-item>
      <el-form-item label="收货人姓名" prop="name">
        <el-input v-model="address.name" placeholder="请输入收货人姓名" clearable :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="address.phone" placeholder="请输入手机号码" clearable :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button @click="cut">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name:'citiesLinkage',
  components: {},
  props: ['cut','editRow'],
  data() {
    return {
      address: {
        address: [],
        detailed: undefined,
        postal_code: undefined,
        name: "",
        phone: undefined,
      },
      rules: {
        address: [{
          required: true,
          type: 'array',
          message: '请至少选择一个地址信息',
          trigger: 'change'
        }],
        detailed: [{
          required: true,
          message: '请输入详细地址',
          trigger: 'blur'
        }],
        postal_code: [],
        name: [{
          required: true,
          message: '请输入收货人姓名',
          trigger: 'blur'
        }, {
          pattern: /^\S{1,25}$/,
          message: '长度不得超过25个字符',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '请输入手机号码',
          trigger: 'blur'
        }, {
          pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
          message: '不是正确的手机号格式',
          trigger: 'blur'
        }],
      },
      addressOptions: [{
        "label": "江苏省",
        "value": "江苏省",
        "id": 103,
        "children": [{
          "label": "徐州市",
          "value": "徐州市",
          "id": 104,
          "children": [{
            "label": "铜山区",
            "value": "铜山区",
            "id": 106,
            "children": [{
              "label": "黄集镇",
              "value": "黄集镇",
              "id": 117
            }]
          }, {
            "label": "鼓楼区",
            "value": "鼓楼区",
            "id": 107
          }, {
            "label": "泉山区",
            "value": "泉山区",
            "id": 108
          }, {
            "label": "贾汪区",
            "value": "贾汪区",
            "id": 109
          }, {
            "label": "九里区",
            "value": "九里区",
            "id": 110
          }, {
            "label": "云龙区",
            "value": "云龙区",
            "id": 111
          }, {
            "label": "沛县",
            "value": "沛县",
            "id": 112,
            "children": [{
              "label": "敬安镇",
              "value": "敬安镇",
              "id": 118
            }, {
              "label": "敬安镇",
              "value": "敬安镇",
              "id": 119
            }, {
              "label": "敬安镇",
              "value": "敬安镇",
              "id": 120
            }]
          }, {
            "label": "丰县",
            "value": "丰县",
            "id": 113,
            "children": []
          }, {
            "label": "新沂市",
            "value": "新沂市",
            "id": 114
          }, {
            "label": "睢宁县",
            "value": "睢宁县",
            "id": 115
          }, {
            "label": "邳州市",
            "value": "邳州市",
            "id": 116
          }]
        }, {
          "label": "南京市",
          "value": "南京市",
          "id": 105
        }]
      }],
      addressProps: {
        "multiple": false,
        "label": "label",
        "value": "value",
        "children": "children",
        "checkStrictly": false
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$bus.$on("refreshShippAddress",()=>{
      this.address.name=this.editRow.consigneeName
      this.address.phone=this.editRow.phone
      this.address.postal_code=this.editRow.postalCode
      this.address.detailed=this.editRow.detailed
      this.address.address=[]
      this.address.address.push(this.editRow.province)
      this.address.address.push(this.editRow.city)
      this.address.address.push(this.editRow.county)
      this.address.address.push(this.editRow.detailed)


      console.log(this.address.address[4])
    })

  },
  methods: {
    submitForm() {
      this.$refs['shipping_address '].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['shipping_address '].resetFields()
    },
  }
}

</script>
<style>
</style>
