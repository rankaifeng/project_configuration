import { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router'
import { Spin } from "antd";
export default memo(function App(props) {
  return (
    <Router>
      <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
    </Router>
  )
})