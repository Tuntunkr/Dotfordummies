import React from "react";
import { Card } from "react-bootstrap";

import "./Home.css";

function Donate() {
  return (
    <>
      <div className="cardcss">
        {/* <h4 className="head"> | Community</h4> */}
        <div className="cardcss">
          <div className="row">
            <div className="col-sm">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="./image/office-team.jpeg"
                  alt="/s"
                />
                <Card.Body>
                  <Card.Title className="title">Eliza Anyangwe</Card.Title>
                  <Card.Text>
                    The best of The Correspondent – recommended by the people
                    who made the stories
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/blog2.png" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">Eliza Anyangwe</Card.Title>
                  <Card.Text>
                    The best of The Correspondent – recommended by the people
                    who made the stories
                  </Card.Text>
                </Card.Body>
                  
               
              </Card>
            </div>
            <div className="col-sm">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/img8.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">Eliza Anyangwe</Card.Title>
                  <Card.Text>
                    The best of The Correspondent – recommended by the people
                    who made the stories
                  </Card.Text>
                </Card.Body>


              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
