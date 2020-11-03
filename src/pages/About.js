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
                            <img src="/assets/img_0018_2.jpg" className="rounded float-left mt-2 mr-4 mb-2 border-dark" alt="Lauren" />
                            <section className="pt-2">
                                <p>Hello, and welcome to my portfolio!</p>
                                <p>My name is Lauren. I'm from Cherry Hill, NJ and currently live in Philadelphia with my two dogs, Cowboy and Sugar.</p>
                                <p>I graduated from Rutgers University in 2014 with a Bachelor's degree in Journalism and Media Studies. For the past six years I have mostly been working in customer service, but I've also dabbled in visual merchandising and styling. One of my true passions is definitely design, whether that be in fashion, print, or on the web.</p>
                                <p>I'm a beginner when it comes to web development, so the content I add to this portfolio will only improve over time! If you like what you see please connect with me on social media.</p>
                            </section>
                        </section>
                    </section>
                </Row>
            </main>
        </>
    )
}

export default About;