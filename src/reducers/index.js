import { combineReducers } from "redux"
const tabsReducer = () =>{
    return [
        {
            name:'dashboard',
            route:'dahsboard'
        },
        {
            name:'contact-us',
            route:'contact-us'
        }
    ]
}

const selectedTabReducer = (selectedTab=null,action) =>{
    if(action.type== 'NEW_TAB_SELECT'){
        return action.payload
    }
    return selectedTab
}

export default combineReducers({
    tabs:tabsReducer,
    selectedTab:selectedTabReducer
})