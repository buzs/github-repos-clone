import { Suspense } from "react"
import Footer from "../components/Footer"
import Header, { HeaderProps } from "../components/Header"

const Layout: React.FC<HeaderProps> = ({children, isOn, handleToggle}) => {

    return (
        <>
            <Header isOn={isOn} handleToggle={handleToggle} />
                {children}
            <Footer />
        </>
    )
}

export default Layout