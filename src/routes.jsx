import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Header from "./components/links/Header";
import Footer from "./components/links/Footer";

import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import ResumePage from "./components/pages/Resume";
import ProjectsPage from "./components/pages/Projects";
import WorkPage from "./components/pages/Work";
import ContactsPage from "./components/pages/Contacts";


const RootLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage/> } />
            <Route path="resume" element={<ResumePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="contacts" element={<ContactsPage/>}/>
        </Route>
    )
)
export default Router;