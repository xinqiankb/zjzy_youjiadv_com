import menudata from '@/data/menudata'
export default {
	// 获取一级导航
	get_menulist: ({commit}, params) => {
		let xx = sessionStorage.getItem('menuList')
		let menuList = menudata.menudata
		let menuListString = JSON.stringify(menuList)
		sessionStorage.setItem('menuList',menuListString)
		console.log(xx)
		console.log(menuList)
    commit('GET_MENUDATA',menuList)
	},

	// 二级导航
	get_childrenMenu: ({commit}, params) => {

	}
}