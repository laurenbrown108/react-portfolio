import React from 'react';
import Row from 'react-bootstrap/Row'

function About() {
    return (
        <>
            <main className="container py-5">
                <Row>
                    <section className="col-md-8">
                        <h1>About</h1>
                        <section className="wrapper pt-2">
                            <img src="../../assets/img_0018_2.jpg" className="rounded float-left pt-2 pr-4" alt="Lauren" />
                            <section className="pt-3">
                                <p>Hello, and welcome to my portfolio!</p>
                                <p>My name is Lauren. I'm from Cherry Hill, NJ and currently live in Philadelphia with my two dogs, Cowboy and Sugar.</p>
                                <p>I graduated from Rutgers University in 2014 with a Bachelor's degree in Journalism and Media Studies. For the past six years I have mostly been working in retail and customer service, and I'm 100% ready for a career change. </p>
                                <p>I'm a beginner when it comes to web development, so I'm excited to rapidly develop my skills. The content I add to this portfolio will only improve over time! If you like what you see, you can connect with me on social media, or fill out the contact form provided.</p>
                            </section>
                        </section>
                    </section>
                </Row>
            </main>
        </>
    )
}

export default About;