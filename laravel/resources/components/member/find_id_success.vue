<template>

  <div class='common_layout common_layout_color_FFFFFF'>

    <div class="find_success_content">
      <img src="../../assets/icon/success_icon_r.svg">
      <span>
        {{nick}}님의 아이디는
      </span>
      <span class="bold_span">
        {{email}}
      </span>
      <span>
        입니다.
      </span>
    </div>

    <div class="submit_btn common_layout_color_000000" v-on:click="login_btn">로그인</div>


  </div>


</template>

<script>

export default {
  name: "find_id_success",
  data() {
    return {
      nick: '홍길동',
      email: 'funidea2020@naver.com'
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

.find_success_content{ width:100%; height:calc(100% - 120px); display:flex; justify-content: center; align-items: center; flex-direction: column; }
.find_success_content img{ width:60px; height:60px; margin-bottom:10px; }
.find_success_content span{ margin-top:5px; font-size:13px; font-weight:600; text-align: center; }
.find_success_content .bold_span{ font-weight:700; font-size:15px; }
.submit_btn{ position:absolute; width:calc(100% - 40px); margin:0 20px; font-size:14px; font-weight:600; bottom:64px; height:45px; display:flex; justify-content: center; align-items: center; color:white; }

</style>
