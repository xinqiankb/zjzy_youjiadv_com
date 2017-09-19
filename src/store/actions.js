import menudata from '@/data/menudata'
export default {
	// 获取一级导航
	get_menulist: ({commit}, params) => {
		let menuList = menudata.menudata
		let menuListString = JSON.stringify(menuList)
		sessionStorage.setItem('memuList',menuListString)
    commit('GET_MENUDATA',menuList)
	}
}