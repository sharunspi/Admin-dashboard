import React, { Component } from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  //import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
export default class Sidemenu extends Component {
    constructor(props){
        super(props)
        this.state ={
            menuCollapse:false
        }
    }
    render() {

        return (
            <div id="sidemenu">
                 <ProSidebar >
          <SidebarHeader>
        

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true}>
                Home
              </MenuItem>
              <MenuItem >Category</MenuItem>
              <MenuItem >Favourite</MenuItem>
              <MenuItem >Author</MenuItem>
              <MenuItem >Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem >Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
            </div>
        )
    }
}
