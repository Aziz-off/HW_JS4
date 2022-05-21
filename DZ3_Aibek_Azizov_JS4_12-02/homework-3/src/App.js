import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import {ContactsInfo} from "./components/contactsInfo/ContactsInfo";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AdminPage from "./pages/admin/AdminPage";
import GuestPage from "./pages/guest/GuestPage";



function App() {
    return (
        <div>
            <MainPage />
            {/*<AboutPage />*/}
            {/*<ContactsPage />*/}
        </div>
    );
}

export default App;

