import React from "react";
import OverviewItem from "./Components/OverviewItem";
import Container from "./Components/Container";

function Overview() {
  return (
    <Container>
      <OverviewItem
        src={"/image/aboutImg.png"}
        name={"Kedelai"}
        title={"Mustard soy sauce with its special qualities"}
        description=" The natural delicacy of Cap SAWI Sweet Soy Sauce has been trusted
              by the Indonesian people since 1935. With selected quality
              ingredients, it produces a delicious taste, delicious sweet and
              savory aroma and gives a more attractive and shiny appearance to
              your dishes. Suitable for fried noodles, fried rice, meatballs,
              chicken noodles, various stir-fries, etc."
      />
    </Container>
  );
}

export default Overview;
