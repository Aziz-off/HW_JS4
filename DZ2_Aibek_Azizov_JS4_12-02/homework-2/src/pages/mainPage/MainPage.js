import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/title/Title";


function MainPage() {
    const servicesMain = ["ux/ui", "front-end", "back-end"];

    return (
        <div>
            <Title title="Main Page"/>
            <Header />
            <Services services={servicesMain}/>
            {/*<Footer />*/}
        </div>
    )
}




export default MainPage;