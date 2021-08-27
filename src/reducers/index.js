import { combineReducers } from "redux"
import {list} from '../config/sideBarList'
const tabsReducer = () =>{
    console.log(list)
    return list.filter(item => item.admin)
}

const selectedTabReducer = (selectedTab=null,action) =>{
    if(action.type === 'NEW_TAB_SELECT'){
        return action.payload
    }
    return selectedTab
}

export default combineReducers({
    tabs:tabsReducer,
    selectedTab:selectedTabReducer
})