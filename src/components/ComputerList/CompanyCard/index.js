import React from "react";
import { CardContainer, CompanyInfo, CompanyText, CompanyLogo } from "./style";
import PropTypes from "prop-types";

const CompanyCard = props => {
  return (
    <CardContainer>
      <CompanyInfo>
        <CompanyText>
          <h5
            style={{
              fontWeight: "800",
              fontSize: "23px",
              color: "rgba(0,0,0,0.8)",
              marginBottom: "10px"
            }}
          >
            {props.companyName}
          </h5>
          <p style={{ marginBottom: "0", fontWeight: "600", opacity: "0.8" }}>
            方案: 一般會員
          </p>
          <p style={{ fontWeight: "600", opacity: "0.8" }}>
            電腦數量: {props.computerNum}
          </p>
        </CompanyText>
        <CompanyLogo
          src={
            props.companyURL
              ? props.companyURL
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk8AiK1pGRqeSLQ3TsxnDcc8a0ARvNOX6yP2p-FOHOqFi9HBD_"
          }
        />
      </CompanyInfo>
    </CardContainer>
  );
};

CompanyCard.propTypes = {
  statusNum: PropTypes.object,
  computerNum: PropTypes.number
};

export default CompanyCard;
