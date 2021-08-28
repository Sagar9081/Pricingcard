import React from "react";

class PricecardPro extends React.Component {
  constructor() {
    super();
    this.state = {
      pricePro: [
        {
          title: "Pro",
          price: "$49",
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
              {this.state.pricePro.map(({ title, price, pricePer }) => {
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
                  <strong>Unlimited Users</strong>
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  150GB Storage
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
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Unlimited Private Projects
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Dedicated Phone Support
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  <strong>Unlimited</strong> Free Subdomains
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
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

export default PricecardPro;
