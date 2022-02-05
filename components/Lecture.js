import Footer from "./Footer";
import Navbar from "./Navbar";
import LectureNavbar from "./lectureComponents/LectureNavbar";
import LectureProgressBar from "./lectureComponents/LectureProgressBar";


//import { getPostData } from '../lib/posts';

const Lecture = ( props ) => {
    //getNavData( lessonData );
    console.log(Object.keys(props.info).length);
    console.log(props.info);
    console.log(props.content.id);
    return(
        <div>
            <LectureNavbar/>
            <div style={{position: "static"}}>
                <LectureProgressBar  len = {props.info} current = {props.content.id}/>
            </div>
                <div style={{position: "relative"}} className="content">
                    <div dangerouslySetInnerHTML={{ __html: props.content.contentHtml }} />
                </div>
            <Footer/>
        </div>
        
    )
}

export default Lecture;