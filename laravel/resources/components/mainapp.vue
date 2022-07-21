<template>
  <div class="app-layout">
    <div class="app-layout-shadow">
      <main>
        <transition :name="transitionName">
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      transitionName: ""  //화면 전환 효과
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.name);
      if(from.name === "login" && to.name === "sign_up"){
        this.transitionName = "next";
      }else if(from.name === "login" && to.name === "home"){
        this.transitionName = "fade";
      }else if((from.name === "home" || from.name === "sign_up") && to.name === "login"){
        this.transitionName = "prev";
      }else if(from.name === "sign_up" && to.name === "sign_up_success"){
        this.transitionName = "next";
      }else if((from.name === "find_id_success" || from.name === "find_pw_success" || from.name === "sign_up_success") && to.name === "login"){
        this.transitionName = "fade";
      }else if((from.name === "user_privacy" || from.name === "user_term") && to.name === "sign_up"){
        this.transitionName = "prev";
      }else if(from.name === "sign_up" && (to.name === "user_privacy" || to.name === "user_term")){
        this.transitionName = "next";
      }else if(from.name === "login" && (to.name === "find_id" || to.name === "find_pw")){
        this.transitionName = "next";
      }else if((from.name === "find_id" || from.name === "find_pw") && to.name === "login"){
        this.transitionName = "prev";
      }



    }
  }
}
</script>

<style>

/* 폰트 */

@font-face {  font-family: 'NotoSansKR Medium';  src: url("../assets/fonts/NotoSansKRMedium.otf");  font-weight: normal;  font-style: normal;  }
@font-face {  font-family: 'NotoSansKR Regular';  src: url("../assets/fonts/NotoSansKRRegular.otf");  font-weight: normal;  font-style: normal;  }
@font-face {  font-family: 'NotoSansKR Black';  src: url("../assets/fonts/NotoSansKRBlack.otf");  font-weight: normal;  font-style: normal;  }
@font-face {  font-family: 'NotoSansKR Bold';  src: url("../assets/fonts/NotoSansKRBold.otf");  font-weight: normal;  font-style: normal;  }
@font-face {  font-family: 'NotoSansKR Thin';  src: url("../assets/fonts/NotoSansKRThin.otf");  font-weight: 600;  font-style: normal;  }
@font-face {  font-family: 'NotoSansKR Light';  src: url("../assets/fonts/NotoSansKRLight.otf");  font-weight: normal;  font-style: normal;  }


/* 컴포넌트 공통 */

a{ text-decoration: none; outline: none; }
p{ padding:0; margin:0; }
* { box-sizing: border-box; font-family: "NotoSansKR Regular", sans-serif; }
html, body { height: 100vh; margin: 0; padding: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color:#ececec; }
main { height: 100vh; width:100%; display: grid; grid-template: "main"; flex: 1; position: relative; z-index: 0; overflow: hidden; }
main > * { grid-area: main; position: relative; }
main > :first-child { z-index: 1; }

.app-layout{ margin:0 auto; width:500px; }
.app-layout-shadow{ width:100%; height:100vh; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background:white; box-shadow: 0 0 20px rgba(0, 0, 0, 0.05); }

.common_layout{ height:100vh; position:relative; width:100%; padding-top:20px; overflow-y:auto; }
.common_layout_color_FFFFFF{ background-color:#fff; }
.common_layout_color_EE3127{ background-color:#EE3127; }
.common_layout_color_000000{ background-color:#000000; }

.font_white{ color:#fff; }
.font_black{ color:#000; }
.font_grey{ color:#939393; }

.common_back_btn{ margin-left:15px; padding:5px; width:35px; height:35px; }
.common_layout_title_box{ width:100%; height:65px; padding:0 20px; margin-top:8px; }
.common_layout_title_box span{ height:20px; width:100%; font-weight:700; font-size:17px; }
.common_layout_title_box p{ font-size:12px; font-weight:600; width:100%; height:30px; line-height:15px; margin-top:10px; letter-spacing: -0.7px; color:#222222; opacity: .95; }


/* 페이지 전환 효과 */

.next-leave-to { animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; position:relative; }
.next-enter-to { animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1000; position:relative; }
.prev-leave-to { animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1000; position:relative; }
.prev-enter-to { animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; position:relative; }

.fade-enter-active, .fade-leave-active { transition: opacity .6s; }
.fade-enter, .fade-leave-to { opacity: 0; }

@keyframes leaveToLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
}
@keyframes enterFromLeft {
  from { transform: translateX(-25%); }
  to { transform: translateX(0); }
}
@keyframes leaveToRight {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}
@keyframes enterFromRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@media(max-width:500px){
  .app-layout{ width:100%; }
}

</style>

