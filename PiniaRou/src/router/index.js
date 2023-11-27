import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
  {
    path:'/RegEmp_adm',
    name:'AggEmp',
    component:()=>import('../views/RegEmp_adm.vue')

  },
  {
    path:'/Proveedores',
    name:'proveedor',
    component:()=>import('../views/Proveedores.vue')
  }
  ]
})

export default router
