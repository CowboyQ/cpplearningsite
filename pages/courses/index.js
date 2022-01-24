import Link from 'next/link'
import styles from '../../styles/Courses.module.css'
import Layout from '../../components/Layout';

export const getStaticProps = async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/Jason.json?alt=media&token=3b9dd2fe-f785-44f4-bec3-8a396a53a6d5');
    const data = await res.json();
    //console.log(data);
    //console.log(Object.keys(data).length);
    return {
        props: { courses: data }
    }
}
const Courses = ({ courses }) => {
    return(
        <Layout>
            <div>
                testing purrposes only
                {
                    courses.map(course => (
                        <Link href={'/courses/' + course.id} key={course.id}>
                            <a className={styles.single}>
                                <h3>{course.postNo}</h3>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Courses;