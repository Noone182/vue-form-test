import Vue from 'vue'
import VueRouter from 'vue-router'
import FormStepOne from '@/views/FormStepOne.vue'
import FormStepTwo from '@/views/FormStepTwo.vue';
import FormStepThree from '@/views/FormStepThree.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormStepOne',
    component: FormStepOne
	},
	{
    path: '/step-two',
    name: 'FormStepTwo',
    component: FormStepTwo
	},
	{
    path: '/thanks',
    name: 'FormStepThree',
    component: FormStepThree
  }
]

const router = new VueRouter({
  routes
})

export default router
