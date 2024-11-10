import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Subject from '../components/Subject'
import Events from '../components/Events'
import Donate from '../components/Donate'
import Sponsors from '../components/Sponsors'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

import girl from '../assets/img/homepage/paris-ted-talk.jpg'

const Homepage = (props) => {
    return (
       <>    
            <Hero 
                showText={true}
                h1={{text: "Welcome to", underlined: "HomeworkHub!", reversed: false}} 
                h2="Let's learn and teach together!"
                buttons={[
                    {"text": "Become a Tutor", "link": "https://forms.gle/D6hXpn68ztPmQZPH7"},
                    {"text": "Become a Student", "link": "https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true"},
                    {"text": "Refugee Info", "link": "/refugee"}
                ]}
                img={girl}
            />

            <main id="main">
                <About data={props.data}/>
                <Pricing />
                <Subject />
                <Events />
                <Donate />
                <Sponsors />
                <News />
                <Testimonials />
                <Faq />
                <Contact />

            </main>
        </>
    )
}

export default Homepage