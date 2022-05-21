import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/title/Title";


function AboutPage() {
    const servicesAbout = ["ux/ui", "front-end", "back-end", "Android", "ios", "sql"];

    return (
        <div>
            <Title title="About Page"/>
            <Header />
            <Services services={servicesAbout} />
            <Footer />
        </div>
    );
}


export default AboutPage;