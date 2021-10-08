import { Suspense, lazy } from "react"
import Loading from "components/Loading"

const Dashboard = lazy(() => import("containers/Dashboard"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <usePageTop>
      <Dashboard />
    </usePageTop>
  </Suspense>
)

export default App
