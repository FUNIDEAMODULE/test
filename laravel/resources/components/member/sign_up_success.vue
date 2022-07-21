<template>

  <div class='common_layout common_layout_color_EE3127'>

    <div class="sign_up_success_content">
      <img src="../../assets/icon/success_icon.svg">
      <h1>환영합니다!</h1>
      <span>
        퍼니디어님, 회원가입을 축하합니다.<br>PSG 스토리의<br>모든 기능을 사용하실 수 있습니다.
      </span>
    </div>

    <div class="submit_btn common_layout_color_FFFFFF" v-on:click="login_btn">로그인</div>


  </div>


</template>

<script>

export default {
  name: "sign_up",
  data() {
    return {
    }
  },
  methods:{

    login_btn:function(){
      this.$router.replace('/login');
    }

  }
}
</script>

<style scoped>

.sign_up_success_content{ width:100%; height:calc(100% - 120px); display:flex; justify-content: center; align-items: center; flex-direction: column; }
.sign_up_success_content img{ width:60px; height:60px; }
.sign_up_success_content h1{ margin-top:12px; font-size:15px; font-weight:600; color:white; }
.sign_up_success_content span{ margin-top:14px; font-size:13px; font-weight:600; color:white; text-align: center; }
.submit_btn{ position:absolute; width:calc(100% - 40px); margin:0 20px; font-size:14px; font-weight:600; bottom:64px; height:45px; display:flex; justify-content: center; align-items: center; }

</style>
