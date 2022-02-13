import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.title}>
        Witajcie na stronie głównej mojego autorskiego kursu do nauki języka C++! Bardzo miło mi was tu gościć :)<br/>
        Nie będę was zanudzał długimi wprowadzeniami: kliknijcie przycisk poniżej i zacznijcie swoją przygodę z programowaniem już teraz!
        <Link href="/courses/">
          <a className={styles.btn}>Przejdź do kursu</a>
        </Link>
      </div>
    </Layout>
  )
}
