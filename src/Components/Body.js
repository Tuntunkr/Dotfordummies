import React from 'react'
import { Card } from "react-bootstrap";


function Body() {
  return (
<div className="cardcss">
        <div className="cardcss">
          <div className="row">
            <a
              href="https://thiscoindaily.com/learn-to-build-substrate-pallets-from-scratch-dissecting-the-frame-pallet/"
              className="col-sm"
            >
              <Card style={{ width: "23rem" }}>
                <Card.Img
                  variant="top"
                  src="./image/office-team.jpeg"
                  alt="/s"
                />
                <Card.Body>
                  <Card.Title className="title">Thiscoindaily</Card.Title>
                  <Card.Text>
                    Learn to build Substrate pallets from scratch -Dissecting
                    the FRAME pallet
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <a
              href="https://thiscoindaily.com/the-principled-guide-to-keeping-yourself-safe-in-the-dotsama-ecosystem/"
              className="col-sm"
            >
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src="./image/blog2.png" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">By Abdulbee</Card.Title>
                  <Card.Text>
                    The principled guide to keeping yourself safe in the DotSama
                    ecosystem
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <a
              href="https://thiscoindaily.com/a-systematic-guide-to-exploring-substrate/"
              className="col-sm"
            >
              <Card style={{ width: "21.5rem" }}>
                <Card.Img variant="top" src="./image/nimage6.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">Parity Substrate</Card.Title>
                  <Card.Text>
                    A systematic guide to exploring Substrate Learning substrate
                    could seem daunting at first,
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Body