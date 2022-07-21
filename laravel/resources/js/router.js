import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import home from '../components/home'
import login from '../components/login'
import sign_up from '../components/member/sign_up'
import sign_up_success from '../components/member/sign_up_success'
import user_term from '../components/member/user_term'
import user_privacy from '../components/member/user_privacy'
import find_id from '../components/member/find_id'
import find_pw from '../components/member/find_pw'
import find_id_success from '../components/member/find_id_success'
import find_pw_success from '../components/member/find_pw_success'

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/home', name: 'home', component: home },
    { path: '/login', name: 'login', component: login },
    { path: '/sign_up', name: 'sign_up', component: sign_up },
    { path: '/sign_up_success', name: 'sign_up_success', component: sign_up_success },
    { path: '/user_term', name: 'user_term', component: user_term },
    { path: '/user_privacy', name: 'user_privacy', component: user_privacy },
    { path: '/find_id', name: 'find_id', component: find_id },
    { path: '/find_pw', name: 'find_pw', component: find_pw },
    { path: '/find_id_success', name: 'find_id_success', component: find_id_success },
    { path: '/find_pw_success', name: 'find_pw_success', component: find_pw_success },
]
export default new Router({mode: 'history', routes})
