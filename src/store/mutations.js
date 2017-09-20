export default {
	// 一级导航栏
	GET_MENUDATA: (state, data) => {
    state.menuList = data
	},	
	// 二级导航栏
	GET_CHILDRENDATA: (state, data) => {
    state.childrenList = data
	}
}