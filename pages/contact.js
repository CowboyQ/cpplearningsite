import Link from 'next/link'
import Layout from '../components/Layout';

const Contact = () => {
    return(
        <Layout>
            <div>
                <p>CowboyQ Testing Inc.</p>
                <p>Name: -</p>
                <p>Adress: -</p>
                <p>Phone: -</p>
                <Link href = "/">
                    Powrót do Strony Głównej
                </Link>
            </div>
        </Layout>
    )
}

export default Contact;