export default {
	menuList:sessionStorage.getItem('menuList') === null ? [] : JSON.parse(sessionStorage.getItem('menuList')),
	// 导航激活状态
	activeIndex: sessionStorage.getItem('activeIndex') === null ? 0 : Number(sessionStorage.getItem('activeIndex'))
}