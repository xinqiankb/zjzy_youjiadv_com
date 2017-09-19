export default {
	memuList:sessionStorage.getItem('memuList') === null ? [] : JSON.parse(sessionStorage.getItem('memuList')),
	// 导航激活状态
	activeIndex: sessionStorage.getItem('activeIndex') === null ? 0 : Number(sessionStorage.getItem('activeIndex'))
}