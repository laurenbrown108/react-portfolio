import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function PortfolioCard(props) {
    console.log(props)
    return (
        <>


            {/* <div className="col-md-12 ml-4 pl-4"> */}
                
                    <Card className="mt-2 mr-3 border-dark pCard">
                        <Card.Img src={props.image} className="card-img-top img-fluid" alt={props.title} />
                        <Card.Body>
                            <Card.Title className="cardTitle"> {props.title} </Card.Title>
                            <Card.Text className="cardBody"> {props.description} </Card.Text>
                            <a href={props.githubURL} target="_blank" rel="noreferrer" className="btn mb-1 btn-primary"> Github Repo</a>
                            <a href={props.exampleURL} target="_blank" rel="noreferrer" className="btn mb-1 btn-primary"> Deployed App </a>
                        </Card.Body>
                    </Card>
                
            {/* </div> */}

        </>
    )
}

export default PortfolioCard;