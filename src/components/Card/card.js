import React from "react";
// reactstrap components
import {
  //Button,
  Card,
  CardBody,
  //CardImg,
  CardTitle,
  //CardText,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div style={{ width: "18rem" }}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                    Total traffic
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">350,897</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2">
                  <i className="fa fa-arrow-up" />
                  3.48%
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Cards;