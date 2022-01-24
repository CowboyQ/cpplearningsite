import Link from 'next/link'
import Layout from '../components/Layout';

const Contact = () => {
    return(
        <Layout>
            <div>
                <p>CowboyQ Testing Inc.</p>
                <p>Name: you wish</p>
                <p>Adress: lmao</p>
                <p>Phone: kekw</p>
                <Link href = "/">
                    Back to home page
                </Link>
            </div>
        </Layout>
    )
}

export default Contact;