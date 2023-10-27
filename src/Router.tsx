import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/ignite-timer" element={<DefaultLayout />}>
        <Route path="/ignite-timer" element={<Home />} />
        <Route path="/ignite-timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
