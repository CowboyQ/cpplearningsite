import React, {useState, useEffect} from 'react'
import { getSortedPostsData, getPostData } from '../../lib/posts';
import Lecture from '../../components/Lecture';

export const getStaticPaths = async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/Jason.json?alt=media');
    const data = await res.json();

    const paths = data.map(course => {
        return {
            params: { id: course.id.toString() }
        }
    })

    const courseInfo = data.map(course => {
        return {
            params: {course: data}
        }
    })
    return{
        paths: paths, //this path is equal to 'const paths' up above
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/Jason.json?alt=media');
    const data = await res.json();
    //console.log(data);
    const allPostsData = await getPostData(id);
    return{
        props: {courseInfo: data, siteContent: allPostsData}
    }
}

const Details = ({ courseInfo, siteContent }) => {  
    //const importantData = courseInfo;
    //console.log("Important data: " + courseInfo);
    return (
        <Lecture info = { courseInfo } content = {siteContent} />
    ); 
}

export default Details;