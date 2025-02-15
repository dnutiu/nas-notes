/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Notes from "@/pages/notes.vue";
import Default from "@/layouts/default.vue";
import Todo from "@/pages/todo.vue";

const routes = [
  {
    path: '/',
    component: Default,
    redirect: to => {
      return { name: 'notes' }
    },
  },
  {
    path: "/notes",
    component: Default,
    children: [
      {
        name: "notes",
        path: "",
        component: Notes
      },
    ]
  },
  {
    path: "/todo",
    component: Default,
    children: [
      {
        name: "todo",
        path: "",
        component: Todo
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
