import Footer from "./Footer";
import Navbar from "./Navbar";
import LectureNavbar from "./lectureComponents/LectureNavbar";
import LectureProgressBar from "./lectureComponents/LectureProgressBar";
import styles from "../styles/global.css"


//import { getPostData } from '../lib/posts';

const Lecture = ( props ) => {
    //getNavData( lessonData );
    console.log(Object.keys(props.info).length);
    console.log(props.info);
    return(
        <div>
            <LectureNavbar/>
            <LectureProgressBar  len = {props.info}/>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: props.content.contentHtml }} />
                </div>
            <Footer/>
        </div>
        
    )
}

export default Lecture;