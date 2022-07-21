<template>

  <div class='common_layout common_layout_color_FFFFFF'>


    <img class="common_back_btn" src="../../assets/icon/arrow_left.svg" v-on:click="history_back">

    <div class="common_layout_title_box">
      <span>PW 찾기</span>
      <p>가입 시 입력했던 이메일, 이름, 휴대폰 번호를 입력해주세요. 가입 당시 이메일로 임시 비밀번호를 발송합니다.</p>
    </div>

    <div class="find_pw_form">
      <span class="start">이메일</span>
      <input v-model="email" placeholder="이메일을 입력해주세요.">
    </div>

    <div class="find_pw_form">
      <span class="start">닉네임</span>
      <input v-model="nick" placeholder="닉네임을 입력해주세요.">
    </div>

    <div class="find_pw_form">
      <span class="start">성별</span>
      <div v-on:click="bottom_layout = true">
        <input v-model="sex" placeholder="성별을 입력해주세요." disabled>
        <img src="../../assets/icon/black_down_arrow.svg">
      </div>
    </div>

    <div class="find_pw_btn common_layout_color_000000" v-on:click="find_pw_btn">
      PW 찾기
    </div>


    <!-- 하단 레이아웃 -->
    <div class="bottom_layout_background" :class="bottom_layout ? 'opened' : 'closed'">
      <div class="bottom_back_btn" v-on:click="bottom_layout = false"></div>
      <div class="bottom_layout" :class="bottom_layout ? 'bottom_layout_opened' : 'bottom_layout_closed'">
        <div :class="{'selected':sex==='남자' }" v-on:click="sex='남자'">남자 <img src="../../assets/icon/red_check.svg" v-show="sex==='남자'"> </div>
        <div :class="{'selected':sex==='여자'}" v-on:click="sex='여자'">여자 <img src="../../assets/icon/red_check.svg" v-show="sex==='여자'"> </div>
        <button class="bottom_choose_btn" v-on:click="bottom_layout = false">선택 완료</button>
      </div>
    </div>

  </div>


</template>

<script>

export default {
  name: "find_pw",
  data() {
    return {
      email: '',
      nick: '',
      sex: '',
      bottom_layout:false
    }
  },
  methods:{

    /* 뒤로가기 */
    history_back:function(){
      history.go(-1);
    },

    find_pw_btn:function(){
      this.$router.replace('/find_pw_success');
    }

  }
}
</script>

<style scoped>

.find_pw_btn{ position:absolute; width:calc(100% - 40px); margin:0 20px; font-size:14px; font-weight:600; bottom:64px; height:45px; display:flex; justify-content: center; align-items: center; color:white; }

.find_pw_form{ width:100%; padding:0 20px; margin-top:20px; height:57px; position:relative; }
.find_pw_form span{ font-size:13px; font-weight:700; width:100%; height:20px; }
.find_pw_form .start:after{ content: "*"; margin-left:1px; color:#F44438; }
.find_pw_form input{ border:0; outline: none; padding:0 0 4px 0; margin:8px 0 0 0; width:100%; height:32px; border-bottom:1px #E7E7E7 solid; font-size:14px; }
.find_pw_form img{ position:absolute; right:20px; bottom:-1px; width:25px; height:25px; }



.bottom_layout_background{ background-color: rgba(0, 0, 0, 0.3); transition: all .4s ease; -webkit-animation-duration: .4s; animation-duration: .4s; -webkit-animation-fill-mode: both; animation-fill-mode: both; position:fixed; top:0; left:0; height:100vh; }
.opened{ top:0; left:0; width:100%; height:100vh; opacity: 0; animation-name: open_bottom_layout; visibility: visible; }
.closed{ visibility: hidden; width:100%; }
@keyframes open_bottom_layout { 0% { opacity: 0; } 100% { opacity: 1; } }
.bottom_layout_opened{ bottom:0; transition: all .4s ease; transition-delay: .2s; }
.bottom_layout_closed{ bottom:-300px; transition: all .3s ease; }
.bottom_layout_background .bottom_back_btn{ position:absolute; width:100%; height:100%; z-index:0; top:0; left:0; }
.bottom_layout_background .bottom_layout{ position:absolute; width:100%; height:200px; border-radius: 15px 15px 0 0; background-color:white; left:0; padding-top:20px; }
.bottom_layout_background .bottom_layout div{ width:100%; padding:0 20px; margin:10px 0 15px 0; height:40px; display:flex; justify-content: center; align-items: center; font-size:16px; font-weight:600; }
.bottom_layout_background .bottom_layout .selected{ color:#EE3127; font-weight:700; }
.bottom_layout_background .bottom_layout .selected img{ position:absolute; left:calc(50% + 20px); width:22px; height:22px; }
.bottom_choose_btn{ width:calc(100% - 40px); border:0; padding:0; outline: none; margin:10px 20px; height:50px; background-color: #EE3127; display:flex; justify-content: center; align-items: center; font-size:16px; color:white; font-weight:600; border-radius: 10px; }

</style>
