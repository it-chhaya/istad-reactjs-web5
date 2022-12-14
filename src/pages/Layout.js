import { Outlet } from "react-router-dom"
import MainFooter from "../components/MainFooter"
import MainNavbar from "../components/mainnavbar/MainNavbar"

const Layout = () => {
    return (
        <>
            <MainNavbar />
            <Outlet />
            <MainFooter />
        </>
    )
}

export default Layout