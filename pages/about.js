import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => {
    return(
        <Layout>
            <div>
                <p>Kurs został stworzony jako część pracy inżynierskiej.</p>
                <Link href = "/">
                    Powrót do Strony Głównej
                </Link>
            </div>
        </Layout>
    )
}

export default About;