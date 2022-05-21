import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import NewsPage from "./pages/newsPage/NewsPage";



function App() {
  return (
    <div>
        <MainPage />
        <AboutPage />
        <ContactsPage />
        <NewsPage />
    </div>
  );
}

export default App;
