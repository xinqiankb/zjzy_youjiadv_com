import Hello from '@/components/Hello'
import NotFound from '@/components/notfound'
// 首页
import Home from '@/pages/home/home'
// 列表页
import List from '@/pages/article/list'
import Detail from '@/pages/article/detail'
// 联系我们，公司地址相关
import About from '@/pages/connect/about'
import Address from '@/pages/connect/address'
// 留言
import Message from '@/pages/message/message'

const routes = {
  routes: [
    {
    	path: '*',
    	name: '404',
    	component: NotFound
    }, {
    	path: '/',
    	name: 'home',
    	component: Home
    }, {
    	path: '/list',
    	name: 'list',
    	component: List
    }, {
    	path: '/detail',
    	name: 'hello',
    	component: Detail
    }, {
    	path: '/about',
    	name: 'about',
    	component: About
    }, {
    	path: '/address',
    	name: 'address',
    	component: Address
    }, {
    	path: '/message',
    	name: 'message',
    	component: Message
    }
  ]
}

export default routes
