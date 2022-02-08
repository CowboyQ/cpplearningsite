import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => {
    return(
        <Layout>
            <div>
                <p>[Insert opis kursu]</p>
                <Link href = "/">
                    Powrót do Strony Głównej
                </Link>
            </div>
        </Layout>
    )
}

export default About;