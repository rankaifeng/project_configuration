import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function Login(props) {
  return (
    <NavLink to='/home'>登录</NavLink>
  )
})