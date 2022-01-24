import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(-1);
            router.push('/');
        }, 3000)
        //console.log("Use Effect ran");
    }, [])

    return (
        <Layout>
            <div className="not-found">
                <h1>Ooooops...</h1>
                <h2>This page cannot be found.</h2>
                <Link href="/">
                    <a>Go back to the Home Page</a>
                </Link>
            </div>
        </Layout>   
    );
}

export default NotFound;