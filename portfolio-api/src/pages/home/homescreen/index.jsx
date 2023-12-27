import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
    return(
        // fragment section to list the components which we want to render 
        <> 
            <HeroSection/>
            <MySkills/>
            <AboutMe />
            <MyPortfolio />
            <Testimonials />
            <ContactMe />
            <Footer />
        </>
    )
}