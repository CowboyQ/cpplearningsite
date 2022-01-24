import Link from 'next/link'

const LectureNavbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>Hello there</h1>
            </div>
            <div className="nav_elements">
                <Link href="/">
                    General Kenobi
                </Link>
            </div>
            
        </nav>
    )
}

export default LectureNavbar;