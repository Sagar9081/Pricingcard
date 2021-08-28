import React from "react";

class PriceFree extends React.Component {
  constructor() {
    super();
    this.state = {
      priceFree: [
        {
          title: "FREE",
          price: "$0",
          pricePer: "/month",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              {this.state.priceFree.map(({ title, price, pricePer }) => {
                return (
                  <>
                    <h5 className="card-title text-muted text-uppercase text-center">
                      {title}
                    </h5>
                    <h6 className="card-price text-center">
                      {price}
                      <span className="period">{pricePer}</span>
                    </h6>
                  </>
                );
              })}
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Single User
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  5GB Storage
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Unlimited Public Projects
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Community Access
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  Unlimited Private Projects
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  Dedicated Phone Support
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  Free Subdomain
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  Monthly Status Reports
                </li>
              </ul>
              <div className="d-grid">
                <button className="btn btn-primary text-uppercase">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PriceFree;
