<template>

  <div class='common_layout common_layout_color_EE3127'>


    <div class="login_title_box">
      <span class="font_white">로그인</span>
      <img src="../assets/icon/white_close_btn.svg" v-on:click="history_back">
    </div>


    <div class="login_content_box common_layout_color_FFFFFF">

      <div class="login_form_box">
        <span>이메일 주소</span>
        <div>
          <img src="../assets/icon/login_form_id.svg">
          <input v-model="id" placeholder="이메일을 입력해주세요.">
        </div>
      </div>

      <div class="login_form_box">
        <span>비밀번호</span>
        <div>
          <img src="../assets/icon/login_form_pw.svg">
          <input v-model="pw" type="password" placeholder="비밀번호를 입력해주세요.">
        </div>
      </div>


      <div class="submit_btn common_layout_color_EE3127" v-on:click="login_btn">
        <span class="font_white">로그인</span>
      </div>


      <div class="login_option_box">
        <span v-on:click="find_id_btn">계정 찾기</span>
        <div></div>
        <span v-on:click="find_pw_btn">비밀번호 찾기</span>
        <div></div>
        <span v-on:click="sign_up_btn">회원가입</span>
      </div>

      <div class="login_btn_box">
        <span class="font_grey">간편 로그인</span>
        <div class="login_btn">
          <img src="../assets/icon/kakao_button.svg" v-on:click="kakao_login_btn">
          <img src="../assets/icon/naver_button.svg" v-on:click="naver_login_btn">
          <img src="../assets/icon/facebook_button.svg" v-on:click="facebook_login_btn">
          <img src="../assets/icon/apple_button.svg" v-on:click="apple_login_btn">
        </div>
      </div>

    </div>


  </div>


</template>

<script>

export default {
  name: "login",
  data() {
    return {
      id: '',
      pw: '',
      kakao_init_status: true
    }
  },
  created(){
    this.kakao_init_status = true;

    window.fbAsyncInit = function() {
      window.FB.init({
        appId : '887116815503093',
        cookie : true,
        xfbml : true,
        version : 'v11.0'
      });
      window.FB.AppEvents.logPageView();
    };

  },
  methods:{

    history_back:function(){
      this.$router.replace('/home');
    },
    login_btn:function(){
      this.$router.replace('/home');
    },
    sign_up_btn:function(){
      this.$router.push('/sign_up');
    },
    find_id_btn:function(){
      this.$router.push('/find_id');
    },
    find_pw_btn:function(){
      this.$router.push('/find_pw');
    },

    /* 카카오 로그인 */
    kakao_login_btn:function(){
      // const self = this; //다른 method 사용하기 위해 사용

      if (this.kakao_init_status === true) { //최초로 카카오 로그인 클릭 시 -> kakao init 실행
        //카카오 로그인 설정
        window.Kakao.init('98a20b8f4f441dc2b96596584d8d3d4c');
        this.kakao_init_status = false
      }

      window.Kakao.Auth.login({
        success: function () {

          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async function (response) {

              const kakaoemail = response.kakao_account.email;

              alert("kakao email : " + kakaoemail);

            },
            fail: function (error) {
              alert("kakao fail" + error);
            },
          })
        },
        fail: function (error) {
          alert("kakao error" + error);
        },
      })
    },

    /* 네이버 로그인 */
    naver_login_btn:function(){
      var client_id = 'a9KG52d0CxmhPZfzW_Jh';
      var callbackUrl = 'http://49.247.147.158/app/login';
      var url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + callbackUrl + '&state=1234';
      //window.location.replace(url);
      window.location = url;
      //console.log('네이버 로그인 버튼')
    },

    /* 페이스북 로그인 */
    facebook_login_btn:function(){
      window.FB.login(function(response) {
        if (response.status === 'connected') {
          window.FB.api('/me', 'get', {fields: 'name,email'}, function(r) {
            const facebook_email = r.email;
            const facebook_name = r.name;
            alert("facebook email : " + facebook_email+"\r"+"facebook name : "+facebook_name);
          })
        } else if (response.status === 'not_authorized') {
          // 사람은 Facebook에 로그인했지만 앱에는 로그인하지 않았습니다.
          alert('앱에 로그인해야 이용가능한 기능입니다.');
        } else {
          // 그 사람은 Facebook에 로그인하지 않았으므로이 앱에 로그인했는지 여부는 확실하지 않습니다.
          alert('페이스북에 로그인해야 이용가능한 기능입니다.');
        }
      }, {scope: 'public_profile,email'});
    },

    /* 애플 로그인 */
    apple_login_btn:function(){

    }


  }
}
</script>

<style scoped>

.login_title_box{ width:100%; height:30px; margin:30px 0 20px; padding:0 20px; display:flex; align-items: center; }
.login_title_box span{ font-size:18px; font-weight:700; font-family: NotoSansKR Light, sans-serif; }
.login_title_box img{ margin-left:auto; cursor:pointer; width:26px; height:26px; }

.login_content_box{ width:100%; min-height:calc(100% - 80px); height:auto; border-top-left-radius: 50px; padding:30px 20px 0 20px; }
.login_form_box{ width:100%; height:65px; border-bottom:1px #E7E7E7 solid; margin-top:20px; }
.login_form_box span{ font-size:13px; font-weight:700; width:100%; display:flex; align-items: center; margin-bottom:15px; }
.login_form_box div{ width:100%; display:flex; }
.login_form_box div img{ width:24px; height:24px; margin-right:4px; }
.login_form_box div input{ width:100%; font-size:14px; height:24px; margin:0; padding:0; outline: none; border:0; font-weight:500; }
.login_form_box div input::placeholder{ font-weight:400; }

.submit_btn{ width:100%; height:45px; margin:34px 0 30px 0; display:flex; justify-content: center; align-items: center; }
.submit_btn span{ font-size:14px; font-weight:600; }

.login_option_box{ width:100%; height:16px; display:flex; align-items: center; }
.login_option_box span{ font-weight:600; font-size:12px; width:calc(100% / 3 - 2px); text-align: center; }
.login_option_box div{ width:1px; height:15px; background-color:#C4C4C4; }

.login_btn_box{ position:absolute; left:0; bottom:45px; width:100%; }
.login_btn_box span{ width:100%; margin-bottom:15px; height:16px; text-align: center; display:flex; justify-content: center; align-items: center; font-size:12px; font-weight:600; }
.login_btn{ width:100%; display:flex; align-items: center; justify-content: center; height:40px; }
.login_btn img{ width:40px; height:40px; margin:0 3%; }
</style>
