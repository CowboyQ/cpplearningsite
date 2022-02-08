import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>CowboyQ's Learning Playground</h1>
            </div>
            <div className="nav_elements">
                <Link href="/">
                    Strona Główna
                </Link>
                <Link href="/about">
                    O kursie
                </Link>
                <Link href="/contact">
                    Kontakt
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;