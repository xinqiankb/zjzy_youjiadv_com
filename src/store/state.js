export default {
	menuList:[],
	childrenList:sessionStorage.getItem('childrenList') === null ? [] : JSON.parse(sessionStorage.getItem('childrenList')),
	// 导航激活状态
	activeIndex: sessionStorage.getItem('activeIndex') === null ? 0 : sessionStorage.getItem('activeIndex'),
	// 一级导航ID
	parentsId: sessionStorage.getItem('parentsId') === null ? 0 : Number(sessionStorage.getItem('parentsId')),
	parentsname: sessionStorage.getItem('parentsname') === null ? '' : sessionStorage.getItem('parentsname'),
	// 当前位置
	nowplacefirst: sessionStorage.getItem('nowplacefirst') || [],
	nowplacesecond: sessionStorage.getItem('nowplacesecond') || [],
	childrenIndex: sessionStorage.getItem('childrenIndex'),
}
