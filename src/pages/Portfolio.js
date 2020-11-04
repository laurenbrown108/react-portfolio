import React from 'react';
import examples from '../examples.json'
import PortfolioCard from '../components/Cards';
import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

function Portfolio() {
    return (
        <>
            <Container className="py-5 mb-5 ml-4">
                    <h1> PORTFOLIO </h1>
                    <Row className="pt-2 pl-5">
                        {console.log(examples)}
                        {examples.map(example =>(
                        <PortfolioCard
                            key={example.id}
                            title={example.title}
                            image={example.image}
                            description={example.description}
                            exampleURL={example.exampleURL}
                            githubURL={example.githubURL}


                            
                        />
                        ))}
                    </Row>
            </Container>
           
        </>
    )
}

export default Portfolio;