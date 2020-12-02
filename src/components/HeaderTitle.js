import { memo } from "react";
import { headerLinks } from '@common/local-data'
import { NavLink } from "react-router-dom";
export default memo(function HeaderTitle(props) {
  return <div>
    {headerLinks.map((item, index) => {
      return <NavLink
        key={item.title}
        to={item.link} >
        <em>{item.title}</em>
      </NavLink>
    })}
  </div>
})