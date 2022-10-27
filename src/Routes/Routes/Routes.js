import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home"
import Courses from "../../Pages/Courses/Courses/Courses"
import FAQ from "../../Pages/FAQ/FAQ/FAQ"
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

// Create & export router as routes
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tech-with-seeker-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://tech-with-seeker-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    // Route for 404 page
    {
        path: '*',
        element:
            <div className='text-secondary mt-5 pt-5'>
                <h1 className='display-1'>404... Not Found!</h1>
                <p className='lead lead-text'>: : The server can not find the requested resource</p>
            </div>
    }
])