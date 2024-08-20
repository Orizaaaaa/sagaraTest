
import AboutUs from '../../components/fragments/home/AboutUs'
import Footer from '../../components/fragments/home/Footer'
import Header from '../../components/fragments/home/Header'
import Hero from '../../components/fragments/home/Hero'
import HowSagara from '../../components/fragments/home/HowSagara'
import OurCertification from '../../components/fragments/home/OurCertification'
import SagaraProfile from '../../components/fragments/home/SagaraProfile'


const Home = () => {



    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <SagaraProfile />
            <HowSagara />
            <OurCertification />
            <Footer />
        </>
    )
}

export default Home