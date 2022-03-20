import React from "react";
import { Card } from "react-bootstrap";
import Body from "./Body";

import "./Home.css";

function Home() {
  return (
    <>
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
              <Card style={{ width: "20rem" }}>
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
      {/* 2nd card */}
      <div className="cardcss">
        <div className="cardcss">
          <div className="row">
            <a
              href="https://app.subsocial.network/6110/best-practices-for-safety-in-web3-31617"
              className="col-sm"
            >
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src="./image/nimage1.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">Dotsama</Card.Title>
                  <Card.Text>
                    Getting into blockchain and Web3 technologies can be
                    daunting.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <a
              href="https://medium.com/@rory.jenkins42/introduction-to-kusama-4b390b74efd9"
              className="col-sm"
            >
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./image/nimage8.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">By Rory Jenkins</Card.Title>
                  <Card.Text>
                    Kusama is a public pre-production environment for polkadot,
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <a
              href="https://app.subsocial.network/@PolkadotEspanol/la-ventaja-de-parachain-exploracion-del-modelo-de-proxima-27890"
              className="col-sm"
            >
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./image/nimage3.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">Sebastian Cripto</Card.Title>
                  <Card.Text>
                    La ventaja de Parachain: Exploración del modelo de próxima
                    generación de Polkadot
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        </div>
      </div>

      {/* 3rd card */}

      <div className="cardcss">
        <div className="cardcss">
          <div className="row">
            <a
              href="https://polkadotters.medium.com/interoperabilita-polkadotu-a-vyu%C5%BEit%C3%AD-most%C5%AF-do-dal%C5%A1%C3%ADch-s%C3%ADt%C3%AD-c76d47d0661c"
              className="col-sm"
            >
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./image/first2.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">By Polkadotters</Card.Title>
                  <Card.Text>
                    Interoperabilita Polkadotu a využití mostů do dalších sítí
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <a
              href="https://thiscoindaily.com/the-principled-guide-to-keeping-yourself-safe-in-the-dotsama-ecosystem/"
              className="col-sm"
            >
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./image/first1.jpeg" alt="/s" />
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
              href="https://marmitetoast.medium.com/kusama-will-become-the-king-of-chaos-a-deep-dive-analysis-of-the-canary-network-2f96f92f6784"
              className="col-sm"
            >
              <Card style={{ width: "22.5rem" }}>
                <Card.Img variant="top" src="./image/image2.jpeg" alt="/s" />
                <Card.Body>
                  <Card.Title className="title">By Marmite Toast</Card.Title>
                  <Card.Text>
                    KUSAMA will become the king of chaos. Not ‘just’ a canary
                    network.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        </div>
      </div>
      <Body/>
    </>
  );
}

export default Home;
