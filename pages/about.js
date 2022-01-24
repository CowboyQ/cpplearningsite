import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => {
    return(
        <Layout>
            <div>
                <p>My name is Monkey D Luffin and Im gonna be king of the-</p>
                <Link href = "/">
                    Back to home page
                </Link>
            </div>
        </Layout>
    )
}

export default About;