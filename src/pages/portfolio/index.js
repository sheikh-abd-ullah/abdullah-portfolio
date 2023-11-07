import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  console.log(dataportfolio);
  console.log(dataportfolio[4].img.split(".").pop());

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            const ext = data.img.split(".").pop();
            return (
              <div key={i} className="po_item">
                {ext === "mp4" ? (
                  <div>
                    <video width="100%" height="100%" controls autoPlay>
                      <source src={data.img} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>Check Repo</a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>Check Repo</a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
