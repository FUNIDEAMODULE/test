<template>

  <div class='common_layout common_layout_color_FFFFFF'>


    <img class="common_back_btn" src="../../assets/icon/arrow_left.svg" v-on:click="history_back">

    <div class="common_layout_title_box">
      <span>회원가입</span>
      <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요!</p>
    </div>

    <div class="sign_up_form bottom_expand">
      <span class="start">이메일</span>
      <input v-model="email" placeholder="이메일을 입력해주세요." v-on:focusout="email_check">
      <div class="email_check" v-show="email_ok">
        <div></div>
        <span>사용 가능한 이메일 입니다.</span>
      </div>
    </div>

    <div class="sign_up_form">
      <span class="start">비밀번호 입력</span>
      <input v-model="pw1" type="password" placeholder="비밀번호를 입력해주세요." v-on:focusout="pw_check">
    </div>

    <div class="sign_up_form">
      <span class="start">비밀번호 재입력</span>
      <input v-model="pw2" type="password" placeholder="비밀번호를 입력해주세요." v-on:focusout="pw_check">
    </div>

    <div class="sign_up_form">
      <span class="start">닉네임</span>
      <input v-model="nick" placeholder="닉네임을 입력해주세요.">
    </div>

    <div class="sign_up_form">
      <span class="start">성별</span>
      <div v-on:click="bottom_layout = true">
        <input v-model="sex" placeholder="성별을 입력해주세요." disabled>
        <img src="../../assets/icon/black_down_arrow.svg">
      </div>
    </div>

    <div class="sign_up_form bottom_expand">
      <span class="start">우측 별 없애려면 class="start" 없애주세요</span>
      <input placeholder="테스트">
    </div>

    <div class="sign_up_check_box_form">
      <img src="../../assets/icon/check_box_off.svg" v-on:click="check1 = true" v-if="!check1">
      <img src="../../assets/icon/check_box_on.svg" v-on:click="check1 = false" v-else>
      <div>서비스 이용 약관 (필수)</div>
      <span><router-link to="/app/user_term">전문보기</router-link></span>
    </div>

    <div class="sign_up_check_box_form">
      <img src="../../assets/icon/check_box_off.svg" v-on:click="check2 = true" v-if="!check2">
      <img src="../../assets/icon/check_box_on.svg" v-on:click="check2 = false" v-else>
      <div>개인정보 활용 약관 (필수)</div>
      <span><router-link to="/app/user_privacy">전문보기</router-link></span>
    </div>

    <div class="sign_up_check_box_form">
      <img src="../../assets/icon/check_box_off.svg" v-on:click="check3 = true" v-if="!check3">
      <img src="../../assets/icon/check_box_on.svg" v-on:click="check3 = false" v-else>
      <div>마케팅 관련 수신 동의 (선택)</div>
    </div>

    <p class="sign_up_content_subtext">
      모든 멤버십경험을 제공하기 위하여, xx개인정보처리방침에 따라 고객개인정보를 처리합니다.
    </p>

    <div class="sign_up_login_btn common_layout_color_000000" v-on:click="sign_up_btn">
      멤버십 가입하기
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
  name: "sign_up",
  data() {
    return {
      email: '',
      email_ok: false,
      pw1: '',
      pw2: '',
      pw_ok: false,
      nick: '',
      sex: '',
      check1: false,
      check2: false,
      check3: false,
      bottom_layout:false
    }
  },
  methods:{

    /* 뒤로가기 */
    history_back:function(){
      history.go(-1);
    },

    /* 이메일 정규식 */
    email_check:function(){
      const regEmail = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      if (regEmail.test(this.email)) {
        this.email_ok = true;
      }else{
        this.email_ok = false;
      }
    },

    /* 비밀번호 정규식 */
    pw_check:function(){
      /* 최소 8 자, 최소 하나의 문자 및 하나의 숫자 */
      const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if( !reg.test(this.pw1) ) {
        this.pw_ok = false;
        return;
      }
      if( this.pw1 !== this.pw2 ) {
        this.pw_ok = false;
        return;
      }
      this.pw_ok = true;
    },

    sign_up_btn:function(){
      this.$router.replace('/sign_up_success');
    }

  }
}
</script>

<style scoped>

.sign_up_form{ width:100%; padding:0 20px; margin-top:20px; height:57px; position:relative; }
.bottom_expand{ height:77px; }
.sign_up_form span{ font-size:13px; font-weight:700; width:100%; height:20px; }
.sign_up_form .start:after{ content: "*"; margin-left:1px; color:#F44438; }
.sign_up_form input{ border:0; outline: none; padding:0 0 4px 0; margin:8px 0 0 0; width:100%; height:32px; border-bottom:1px #E7E7E7 solid; font-size:14px; }
.sign_up_form img{ position:absolute; right:20px; bottom:-1px; width:25px; height:25px; }

.sign_up_form .email_check{ width:100%; margin-top:4px; height:20px; display:flex; align-items: center; }
.sign_up_form .email_check div{ background-color: #0086F2; width:4px; height:4px; border-radius: 2px; }
.sign_up_form .email_check span{ font-size:12px; color:#0086F2; margin-left:9px; font-weight:600; }

.sign_up_check_box_form{ width:100%; height:20px; padding:0 20px; margin-top:10px; display:flex; align-items: center; }
.sign_up_check_box_form img{ width:20px; height:20px; }
.sign_up_check_box_form div{ font-size:13px; color:#707070; margin-left:7px; height:20px; line-height: 20px; width:auto; font-weight: 600; display:flex; align-items: center; }
.sign_up_check_box_form span{ text-decoration: underline; margin-left:auto; font-size:13px; font-weight: 600; height:20px; line-height: 20px; color:#707070; }
.sign_up_check_box_form span a{ color:inherit; }

.sign_up_content_subtext{ width:100%; padding:0 20px; margin:17px 0 10px 0; font-size:12px; font-weight:600; }
.sign_up_login_btn{ width:calc(100% - 40px); margin:27px 20px; display:flex; align-items: center; justify-content: center; height:45px; font-weight:600; color:white; font-size:14px; }





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
