import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));
const Commission = lazy(() => import("../pages/Commission"));
const Shops = lazy(() => import("../pages/Shops"));
const Orders = lazy(() => import("../pages/Orders"));
const Blogs = lazy(() => import("../pages/Blogs"));
const NewBlog = lazy(() => import("../pages/NewBlog"));
const Staff = lazy(() => import("../pages/Staff"));
const Notifications = lazy(() => import("../pages/Notifications"));
const Memberships = lazy(() => import("../pages/Memberships"));
const Milestones = lazy(() => import("../pages/Milestones"));
const Login = lazy(() => import("../pages/Login"));
const Provinces = lazy(() => import("../pages/Provinces"));
const NewProvince = lazy(() => import("../pages/NewProvince"));
const Cities = lazy(() => import("../pages/Cities"));
const NewCity = lazy(() => import("../pages/NewCity"));
const Education = lazy(() => import("../pages/Education"));
const AddEducation = lazy(() => import("../pages/AddEducation"));
const Grades = lazy(() => import("../pages/Grades"));
const AddGrades = lazy(() => import("../pages/AddGrades"));
const Business = lazy(() => import("../pages/Business"));
const AddBusiness = lazy(() => import("../pages/AddBusiness"))



const NavigationRoutes = () => {

    const isLogin = useSelector(state => state.admin.isLogin);

    const routes = isLogin ? (
        <Routes>
            {/** Admin */}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/dashboard/users' element={<Users />}></Route>
            <Route exact path='/dashboard/commission' element={<Commission />}></Route>
            <Route exact path='/dashboard/orders' element={<Orders />}></Route>
            <Route exact path='/dashboard/shops' element={<Shops />}></Route>
            <Route exact path='/dashboard/blogs' element={<Blogs />}></Route>
            <Route exact path='/dashboard/blogs/new-blog' element={<NewBlog />}></Route>
            <Route exact path='/dashboard/staff' element={<Staff />}></Route>
            <Route exact path='/dashboard/notifications' element={<Notifications />}></Route>
            <Route exact path='/dashboard/memberships' element={<Memberships />}></Route>
            <Route exact path='/dashboard/milestones' element={<Milestones />}></Route>
            <Route exact path='/dashboard/Provinces' element={<Provinces />}></Route>
            <Route exact path='/dashboard/Provinces/new-province' element={<NewProvince />}></Route>
            <Route exact path='/dashboard/Cities' element={<Cities />}></Route>
            <Route exact path='/dashboard/Cities/new-city' element={<NewCity />}></Route>
            <Route exact path='/dashboard/Education' element={<Education />}></Route>
            <Route exact path='/dashboard/Education/add-education' element={<AddEducation />}></Route>
            <Route exact path='/dashboard/Grades' element={<Grades />}></Route>
            <Route exact path='/dashboard/Grades/add-grades'element={<AddGrades />}></Route>
            <Route exact path='/dashboard/Business' element={<Business />}></Route>
            <Route exact path='/dashboard/Business/add-Business' element={<AddBusiness />}></Route>
           
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    ) : (
        <Routes>
            {/** Admin */}
            <Route exact path='/admin/login' element={<Login />}></Route>

            <Route
                path="*"
                element={<Navigate to="/admin/login" />}
            />
        </Routes>
    )
    return routes;
}

export default NavigationRoutes;
