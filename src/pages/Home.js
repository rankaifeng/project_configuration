import { memo } from "react";
import { renderRoutes } from "react-router-config";
import HeaderTitle from '@components/HeaderTitle';
export default memo(function Home(props) {
  const { route } = props
  return <div>
    <HeaderTitle />
    {renderRoutes(route.routes)}
  </div>
})