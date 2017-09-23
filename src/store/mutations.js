export default {
	// 一级导航栏
	GET_MENUDATA: (state, data) => {
    state.menuList = data
	},
	// 二级导航栏
	GET_CHILDRENDATA: (state, data) => {
    state.childrenList = data
	},
	// 获取slideBar名称
	GET_SLIDEBARNAME: (state, data) => {
    state.nowplacesecond = data
	},
	// 获取当前位置一级导航
	GET_FIRSTNAME: (state, data) => {
    state.nowplacefirst = data
    state.parentsname = data
	}
}
