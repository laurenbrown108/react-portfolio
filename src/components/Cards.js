import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function PortfolioCard() {
    return (
        <>


            <div className="col-md-12 ml-4 pl-4">
                <Row>
                    <Card className="mt-2 mr-3 border-dark pCard">
                        <Card.Img src="assets/brewfinder.gif" className="card-img-top img-fluid" alt="Brewery finder demo" />
                        <Card.Body>
                            <Card.Title className="cardTitle"> Brewery Finder </Card.Title>
                            <Card.Text className="cardBody"> An app that lets the user search for breweries by state. It utilizes the Open Brewery DB, Yelp, and Google Maps APIs. </Card.Text>
                            <a href="https://github.com/laurenbrown108/Brewery-Finder" target="_blank" rel="noreferrer" className="btn mb-1 btn-primary"> Github Repo</a>
                            <a href="https://lambaa94.github.io/Brewery-Finder/" target="_blank" rel="noreferrer" className="btn mb-1 btn-primary"> Deployed App </a>
                        </Card.Body>
                    </Card>
                </Row>
            </div>

        </>
    )
}

export default PortfolioCard;