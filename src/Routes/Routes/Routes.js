import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home"
import Courses from "../../Pages/Courses/Courses/Courses"
import FAQ from "../../Pages/FAQ/FAQ/FAQ"

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
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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