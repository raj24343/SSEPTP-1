import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Card, Badge, Tab, Nav } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import richard from "../assets/risefaculty/richard.jpg"
import mario from "../assets/risefaculty/mario.jpg"
import dominik from "../assets/risefaculty/dominik.jpg"
import raoul from "../assets/risefaculty/raoul.jpg"
import stefan from "../assets/risefaculty/stefan.jpg"
import karl from "../assets/risefaculty/karl.jpg"
import schemlz from "../assets/risefaculty/schmelz.jpg"
import philip from "../assets/risefaculty/philip.jpg"
import johannesR from "../assets/risefaculty/johannes.gif"
import christoph from "../assets/risefaculty/christoph.jpg"
import rene from "../assets/risefaculty/rene.jpg"
import roland from "../assets/risefaculty/roland.jpg"
import riseLogo from "../assets/risefaculty/rise_logo.jpg"
import andreas from "../assets/risefaculty/andreas.jpg"
import christina from "../assets/risefaculty/christina.jpg"
import markus from "../assets/risefaculty/markus.jpg"
import thomas from "../assets/risefaculty/thomas.jpg"
import bachel from "../assets/risefaculty/bachel.jpg"
import schanes from "../assets/risefaculty/schanes.jpg"
import aigner from "../assets/risefaculty/aigner.jpg"
import thomas2 from "../assets/risefaculty/thomas.png"
import mon from "../assets/risefaculty/mon.jpg"


import karin from "../assets/risefaculty/karin.jpg"

function RIT() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rise@SSE Faculty data
  const riseFacultyData = [
    { id: 1, name: "Dipl.-Ing. Mag. Dr. Karin Kappel", image: karin },
    { id: 2, name: "Dipl.-Ing. Dr. Mario Bernhart", image: mario },
    { id: 3, name: "Dr. Andreas Staribacher", image: andreas },
    { id: 4, name: "Dipl.-Ing. Dr. Stefan Strobl", image: stefan },
    { id: 5, name: "Dipl.-Ing. Mag. Mag. Dr. Karl Pinter", image: karl },
    { id: 6, name: "Dipl.-Ing. Dr. Dominik Schmelz", image: schemlz },
    { id: 7, name: "Dipl.-Ing. Dr. Philipp Harms", image: philip },
    { id: 8, name: "Dr. Dominik Hölbling Bakk.rer.nat MSc", image: dominik },
    { id: 9, name: "DDipl.-Ing. Dr. Raoul Vallon", image: raoul },
    { id: 10, name: "Dipl.-Ing. Dr. Johannes Harms", image: johannesR },
    { id: 12, name: "Dipl.-Ing. Christoph Wimmer", image: christoph },
    { id: 13, name: "Dipl.-Ing. Dr. Rene Baranyi", image: rene },
    { id: 14, name: "Dipl.-Ing. Mag. Roland Breiteneder", image: roland },
    { id: 15, name: "Mag. Franz Mairhofer", image: riseLogo },
    { id: 16, name: "Dipl.-Ing. Christina Zoffi", image: christina },
    { id: 17, name: "Dipl.-Ing. Markus Zoffi", image: markus },
    { id: 18, name: "Univ. Prof. Dr. Thomas Grechenig", image: thomas2 },
    { id: 19, name: "Dipl.-Ing. Stefan Bachl", image: bachel },
    { id: 20, name: "Dipl.-Ing. Dr. Andreas Ehringfeld", image: riseLogo },
    { id: 21, name: "Dipl.-Ing. Stefan Kuschnigg", image: riseLogo },
    { id: 22, name: "Dr. Franz Schönbauer", image: riseLogo },
    { id: 23, name: "Dipl.-Ing. Mag. Dr. Christian Brem",  image: riseLogo },
    { id: 25, name: "Dipl.-Ing. Dr. Christian Schanes", image: schanes },
    { id: 26, name: "Dipl.-Ing. Dr. Christoph Aigner", image: aigner },
    { id: 27, name: "Dipl.-Ing. Monika Suppersberger", image: mon },
    { id: 28, name: "Dipl.-Ing. Richard Schlögl", image: richard },
    { id: 30, name: "Dipl.-Ing. Thomas Artner", image: thomas },
  ];

  // Sort faculty by id
  const sortedRiseFaculty = useMemo(() => {
    return riseFacultyData.sort((a, b) => a.id - b.id);
  }, [riseFacultyData]);

  return (
    <div className="rit-page bg-light">
      {/* Navigation */}
      <Navbar />
      <Sidebar />

      {/* Page Header */}
      <section className="page-header">
        <Container className="py-5">
          <h1 className="display-4 fw-bold text-white">
            RISE Institute of Higher Technologies (RIT)
          </h1>
          <p className="lead text-white opacity-90">
            Advancing programming and software engineering skills through
            practical, hands-on learning
          </p>
        </Container>
      </section>

      {/* Rise@SSE Faculty Section */}
      <section className="py-5 bg-light faculty-section">
        <Container className="py-4">
          <SectionHeader
            subtitle="Rise@SSE Faculty"
            title="Distinguished Faculty Members"
            description="Our exceptional faculty driving innovation and excellence in education"
            centered={true}
          />

          <Row className="g-4">
            {sortedRiseFaculty.map((faculty) => (
              <Col lg={3} md={4} sm={6} key={faculty.id}>
                <Card className="border-0 shadow-sm h-100 hover-translate-y faculty-card">
                  <Card.Body className="p-4 text-center">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="rounded-circle mb-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h6 className="fw-bold text-primary">{faculty.name}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>





      <Footer />
    </div>
  );
}

export default RIT;
