import React from "react";
import styled from "styled-components";
// Components

export default function Benefits() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{ textAlign: "center" }}>
              Kompaniyamiz raqamlarda
            </h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex ">
            <ServiceBoxWrapper>
              <h2 style={{ color: "#fece1a", fontSize: "56px" }}>12 yil</h2>
              <p
                className="font20 extraBold"
                style={{ fontSize: "28px", color: "#fff" }}
              >
                Tajriba
              </p>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <h2 style={{ color: "#fece1a", fontSize: "56px" }}>10 000+</h2>
              <p
                className="font20 extraBold"
                style={{ fontSize: "28px", color: "#fff" }}
              >
                Mijozlar
              </p>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <h2 style={{ color: "#fece1a", fontSize: "56px" }}>3</h2>
              <p
                className="font20 extraBold"
                style={{ fontSize: "28px", color: "#fff" }}
              >
                Filial
              </p>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1%;
  padding: 80px 0;
  @media (max-width: 860px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  align-items: center;
  border-radius: 50%;
  background: #0b093b;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 80px 0;
    gap: 10px;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
