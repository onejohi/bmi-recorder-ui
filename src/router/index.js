import { createRouter, createWebHistory } from 'vue-router'
import PatientListView from '../views/PatientListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PatientListView
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/vitals/:id',
      name: 'vitals',
      component: () => import('../views/VitalsView.vue')
    },
    {
      path: '/form-view/:type/:formId',
      name: 'form-view',
      component: () => import('../views/FormView.vue')
    }
  ]
})

export default router
