import Link from 'next/link'
import styles from '../../styles/Courses.module.css'
import Layout from '../../components/Layout';

export const getStaticProps = async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/Jason.json?alt=media');
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
            <div className={styles.title}>
            Witajcie na kursie!<br/>
            Jeśli jesteście doświadczonymi programistami i potrzebujecie drobnego przypomnienia, możecie od razu przejść do którejkolwiek lekcji: wszystkie są dla was otwarte!<br/>
            Jeśli jednak dopiero zaczynacie przygodę z C++ (lub nawet z programowaniem) to proponuję wam zacząć od wprowadzenia: poznacie programowanie od podszewki i
            będziecie mogli przejść do C++ z całą potrzebną na start wiedzą :)
            </div>
            <div>
                <div>
                    <h1>Część wprowadzająca</h1>
                </div>
                {
 
                    courses.map(course => (
                        course.type == 1 ?
                        <Link href={'/courses/' + course.id} key={course.id}>
                            <a className={styles.single}>
                                <h3>{course.postNo}. {course.title}</h3>
                            </a>
                        </Link>
                            :
                            
                        <>
                        
                        </>
                    ))
                }
                <h1>Część podstawowa</h1>
                {
                    courses.map(course => (
                        course.type == 2 ?
                        <Link href={'/courses/' + course.id} key={course.id}>
                            <a className={styles.single}>
                                <h3>{course.postNo}. {course.title}</h3>
                            </a>
                        </Link>
                            :
                            
                        <>
                        
                        </>
                    ))
                }
                <h1>Część zaawansowana</h1>
                {
                    courses.map(course => (
                        course.type == 3 ?
                        <Link href={'/courses/' + course.id} key={course.id}>
                            <a className={styles.single}>
                                <h3>{course.postNo}. {course.title}</h3>
                            </a>
                        </Link>
                            :
                            
                        <>
                        
                        </>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Courses;