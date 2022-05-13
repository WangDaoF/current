<template>
<div  >
  <el-dialog
      :visible.sync="dialogVisible"
      width="1000px"
      :show-close="false"
      >

<!--<LoginForm :typeform="typeform"></LoginForm>-->
<div>

</div>
    <span slot="footer" class="dialog-footer">
  </span>
  </el-dialog>
</div>
</template>

<script>
// import LoginForm from "@/components/user/LoginForm";
export default {
  name: "SignInForm",
  // components: {LoginForm},
  data() {
    return {
      dialogVisible: false,
      typeform:1
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
    }
  },
  mounted() {
    this.$bus.$on("showSignForm",(typeform)=>{
      this.typeform=typeform
      this.dialogVisible=!this.dialogVisible
    })
  }
}
</script>

<style scoped>

</style>