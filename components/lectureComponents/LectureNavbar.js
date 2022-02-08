import Link from 'next/link'

const LectureNavbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>CowboyQs Learning Playground</h1>
            </div>
            <div className="nav_elements">
                <Link href="/">
                    Strona Główna
                </Link>
            </div>
            
        </nav>
    )
}

export default LectureNavbar;