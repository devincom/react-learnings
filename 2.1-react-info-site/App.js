import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const {darkMode, setDarkMode} = React.useState(false)

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
        console.log(darkMode);
    }

    return (
        <div className="container">
            <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
            <Main />
        </div>
    )
}