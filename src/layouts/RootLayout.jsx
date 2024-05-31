import { Outlet } from "react-router-dom"
import Footer from "../components/footer"

function RootLayout() {

    return(

        <>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>

    )

}

export default RootLayout