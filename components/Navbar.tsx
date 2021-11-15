import * as React from "react";
import {Menu} from 'antd'
import {useRouter} from "next/router";
import * as navStyle from '../styles/navbar.module.css'

export default function Navigationbar() {
  const router = useRouter()
  const [current,setCurrent] = React.useState()
  React.useEffect(() =>{console.log(current)},[current])
  React.useEffect(() => {console.log('Nav')},[])
  const handleClick = React.useCallback((e: any) => {
    let route;
    console.log(e.domEvent.preventDefault())
    switch(e.key){
      case "1": route = '/'; break
      case "2": route = '/contact'; break;
      case "3": route = '/skills'; break
      case "4": route = '/projects'; break
      default: route = '/'; break
    }
    setCurrent(e.key)
    router.push(route)
  },[])

  return (
      <>
      <Menu style={{justifyContent:'center',backgroundColor:'#f5f8fa'}} 
        selectedKeys={[current!]} 
        mode="horizontal" onClick={handleClick}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Contact</Menu.Item>
        <Menu.Item key="3">Skills</Menu.Item>
        <Menu.Item key="4">Project</Menu.Item>
      </Menu>
      </>
  );
};
