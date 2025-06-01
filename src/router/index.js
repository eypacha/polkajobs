import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import SmartContractDetail from '../views/SmartContractDetail.vue'
import DesignDetail from '../views/DesignDetail.vue'
import PolkadotDemo from '../views/PolkadotDemo.vue'
import PolkadotTest from '../views/PolkadotTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/service/substrate-development',
    name: 'SubstrateService',
    component: ServiceDetail,
    props: { id: 'substrate-development' }
  },
  {
    path: '/service/smart-contracts',
    name: 'SmartContractService',
    component: SmartContractDetail,
    props: { id: 'smart-contracts' }
  },
  {
    path: '/service/ui-ux-design',
    name: 'DesignService',
    component: DesignDetail,
    props: { id: 'ui-ux-design' }
  },
  {
    path: '/polkadot-demo',
    name: 'PolkadotDemo',
    component: PolkadotDemo
  },
  {
    path: '/polkadot-test',
    name: 'PolkadotTest',
    component: PolkadotTest
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
