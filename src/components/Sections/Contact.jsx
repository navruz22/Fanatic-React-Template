import React from "react";
import styled from "styled-components";
// Assets
import mapImg from "../../assets/pipehouse/map.jpg";
import qrCode from "../../assets/pipehouse/qrcode.jpg";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div
        className="lightBg"
        style={{ padding: "60px 0", background: "#0B093B" }}
      >
        <div className="container">
          <HeaderInfo>
            <h1
              className="font40 extraBold"
              style={{ textAlign: "center", color: "#fff" }}
            >
              Bog'lanish
            </h1>
          </HeaderInfo>
          <ContactBlock>
            <a
              href="https://www.google.com/maps/place/OOO+%22PIPE-HOUSE%22/@40.0746557,65.3611722,14z/data=!4m10!1m2!2m1!1sPipe-house!3m6!1s0x3f51c3ada3e064b5:0xa27c69bedfd6bfe9!8m2!3d40.0746666!4d65.3942346!15sCgpQaXBlLWhvdXNlkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11j8l1bstv?hl=ru-KG"
              style={{ maxWidth: "800px" }}
            >
              <img src={mapImg} alt="map" style={{ width: "100%" }} />
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "200px" }}>
                <img
                  src={qrCode}
                  alt="code"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </div>
              <h2 style={{ color: "#fff" }}>Navoiy sh.</h2>
              <h2 style={{ color: "#fff" }}>B.RAVSHANOV 31-uy</h2>
              <h3 style={{ color: "#fff" }}>+998(90) 501-54-00</h3>
              <h3 style={{ color: "#fff" }}>+998(91) 330-54-00</h3>
              <h3 style={{ color: "#fff" }}>+998(91) 339-96-06</h3>
            </div>
          </ContactBlock>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ContactBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
