<template>

  <div class='common_layout common_layout_color_FFFFFF'>

    <div class="find_success_content">
      <img src="../../assets/icon/success_icon_r.svg">
      <span>
        해당 이메일로 신규 비밀번호가 전송됬습니다.<br>마이페이지에서<br>비밀번호를 수정해주세요.
      </span>
    </div>

    <div class="submit_btn common_layout_color_000000" v-on:click="login_btn">로그인</div>


  </div>


</template>

<script>

export default {
  name: "find_pw_success",
  data() {
  },
  methods:{

    login_btn:function(){
      this.$router.replace('/login');
    }

  }
}
</script>

<style scoped>

.find_success_content{ width:100%; height:calc(100% - 120px); display:flex; justify-content: center; align-items: center; flex-direction: column; padding:0 20px; }
.find_success_content img{ width:60px; height:60px; margin-bottom:10px; }
.find_success_content span{ margin-top:5px; font-size:13px; font-weight:600; text-align: center; }
.submit_btn{ position:absolute; width:calc(100% - 40px); margin:0 20px; font-size:14px; font-weight:600; bottom:64px; height:45px; display:flex; justify-content: center; align-items: center; color:white; }

</style>
