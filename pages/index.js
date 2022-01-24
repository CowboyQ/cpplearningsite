import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>
        <Link href="/courses/">
          <a className={styles.btn}>Przejdź do kursu</a>
        </Link>
      </div>
    </Layout>
  )
}
