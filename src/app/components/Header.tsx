import Link from "next/link"
import React from "react"
import Navbar from "./Navbar"
import "./Header.css"

const Header = async () => {
    return (
        <>
            <header className="">
            <Link href="/"><h1>Survivor Rankings</h1></Link>
            <Navbar />
            </header>
        </>
    )
}

export default Header