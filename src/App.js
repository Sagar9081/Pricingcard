import React from "react";
import Pricecard from "./priceplus";
import PricecardPro from "./pricepro";
import PriceFree from "./pricefree";

class pricing extends React.Component {
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
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <PriceFree />
            <Pricecard />
            <PricecardPro />
          </div>
        </div>
      </section>
    );
  }
}
export default pricing;
