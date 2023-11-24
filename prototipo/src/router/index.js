// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  
  {
    path: '/',
    component: () => import('../views/Cliente/menu.vue'), 
    children: [
      {
        path: 'productos',
        component: () => import('../views/Cliente/productos.vue'),
      },
      {
        path: 'suplementos',
        component: () => import('../views/Cliente/productos.vue'),
      },
      {
        path: 'proteinas',
        component: () => import('../views/Cliente/proteinas.vue'),
      },
      {
        path: 'creatinas',
        component: () => import('../views/Cliente/creatinas.vue'),
      },
      {
        path: 'iniciosesion',
        component: () => import('../views/Cliente/iniciosesion.vue'),
      },
      {
        path: 'registro',
        component: () => import('../views/Cliente/registro.vue'),
      },
      {
        path: 'perfil',
        component: () => import('../views/Cliente/usuario.vue'),
      },
      {
        path: 'carrito',
        name: 'carrito',
        component: () => import('../views/Cliente/Carrito/carrito.vue'),
      },
      {
            path: 'direccion-entrega',
            name: 'direccion-entrega',
            component: () => import('../views/Cliente/Carrito/dirreccion.vue'),
      },
      {
            path: 'metodopago',
            name: 'metodopago',
            component: () => import('../views/Cliente/Carrito/metodopago.vue'),
      },
      
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
