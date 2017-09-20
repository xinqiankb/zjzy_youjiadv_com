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
    			case '0': path = '/detail/' + data[i]['id'];break;
    			case '1': path = '/list/' + data[i]['id'];break;
          case '2': path = '/list/' + data[i]['id'];break;
    			case '3': path = '/list/' + data[i]['id'];break;
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
              case '0': path = '/detail/' + data[i]['id'];break;
              case '1': path = '/list/' + data[i]['id'];break;
              case '2': path = '/list/' + data[i]['id'];break;
              case '3': path = '/list/' + data[i]['id'];break;
              case '4': path = '/message/';break;
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
	}
}