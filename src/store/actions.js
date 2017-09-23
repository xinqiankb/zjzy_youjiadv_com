import menudata from '@/data/menudata'
import axios from 'axios'
export default {
	// 获取一级导航
	get_menulist: ({commit}, params) => {
    axios.get('/catagory')
    .then(res => {
    	let data = res.data.data
    	let path = ''
    	data.shift()
    	for (let i in data) {
    		let type = data[i]['list_type']
    		switch(type){
    			case '0': path = '/detail/';break;
    			case '1': path = '/list/';break;
          case '2': path = '/list/';break;
    			case '3': path = '/list/';break;
    			case '4': path = '/message/';break;
    		}
    		data[i]['path'] = path
    	}
			let menuList = data
			let menuListString = JSON.stringify(menuList)
			sessionStorage.setItem('menuList',menuListString)
	    commit('GET_MENUDATA',data)
    }).catch(res => {
    	console.log(res)
    })
	},

	// 二级导航
	get_childrenMenu: ({commit}, params) => {
      let ids = params
      let path
      if(ids){
        axios.get('/catagorychild',{params:{
          'id': ids
        }}).then(res => {
          let data = res.data.data
          for (let i in data) {
            let type = data[i]['list_type']
            switch(type){
              case '0': path = '/detail/';break;
              case '1': path = '/list/';break;
              case '2': path = '/list/';break;
              case '3': path = '/list/';break;
              case '4': path = '/message/';break;
            }
						if (data[i]['id'] === '106') {
							path = '/address/'
						}
            data[i]['path'] = path
          }
          let childrenList = data
          let childrenListString = JSON.stringify(childrenList)
          sessionStorage.setItem('childrenList',childrenListString)
          commit('GET_CHILDRENDATA',childrenList)
        }).catch(res => {
          console.log(res)
        })
      }
	},

	getPlaceName: ({commit}, params) => {
		let ids = params
		if (ids) {
			axios.get('/newslist', {params:{
				'id': ids
			}})
			.then(res => {
				let data = res.data.catagory
				commit('GET_FIRSTNAME',data.name)
				sessionStorage.setItem('nowplacesecond', data.name)
				sessionStorage.setItem('parentsname', data.name)
			}).catch(res => {
				console.log(res)
			})
		}
	},
	getSlideBarName: ({commit}, params) => {
		let ids = params
		if (ids) {
			axios.get('/newslist', {params:{
				'id': ids
			}})
			.then(res => {
				let data = res.data.catagory
				commit('GET_SLIDEBARNAME',data.name)
				sessionStorage.setItem('nowplacefirst', data.name)
			}).catch(res => {
				console.log(res)
			})
		}
	}
}
