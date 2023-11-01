import React from "react";
import BannerItem from "./Components/BannerItem";
import Container from "./Components/Container";

function Banner() {
  return (
    <Container>
      <BannerItem
        title={"Do you want to try soy sauce ?"}
        description="  Please buy at your nearest store or at several online stores
              available in Indonesia"
      />
    </Container>
  );
}

export default Banner;
