import React from "react";

function Donation(props) {
  if (props.donationData) {
    console.log(props.donationData[0].title);
    var title = props.donationData[0].title;
    var number = props.donationData[0].number;
  }
  return (
    <div className="container">
      <div className="numbers numDonation">{number}K</div>
      <div>{title}</div>
    </div>
  );
}

export default Donation;
