
import { Header } from "../components/home/header"
import { Hero } from "../components/home/heroSection"
import { AboutUs } from "../components/home/aboutUs"
import { Expertise } from "../components/home/expertise"
import { Footer } from "../components/home/footer"
import { Services } from "../components/home/services"

export function Home({ onNavigate }) {
    return (
        <>
            <section className="bg-gray-100">
                <section >
                    <Hero/>
                    <AboutUs/>
                    <Expertise onNavigate={onNavigate}/>
                    <Services/>
                </section>
            </section>
        </>
    )
}