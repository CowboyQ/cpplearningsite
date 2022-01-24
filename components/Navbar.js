import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>CowboyQs Testing Storage</h1>
            </div>
            <div className="nav_elements">
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;