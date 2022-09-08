import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/layouts/defaultLayout'
import { History } from './components/pages/History'
import { Home } from './components/pages/Home'

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route >
        </Routes >
    )
}