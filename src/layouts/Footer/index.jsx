import React from "react";
import Container from "./Components/Container";
import FooterLinkContainer from "./Components/FooterLinkContainer";
import Copyright from "./Components/Copyright";

function Footer() {
  const items = [
    {
      id: 1,
      name: "Parnership",
      links: ["Website", "Social Media", "Branding"],
    },
    {
      id: 2,
      name: "Shop",
      links: ["Soy Sauce", "Gift Cards", "Store Locator", "Refer a Friend"],
    },
    {
      id: 3,
      name: "Help",
      links: ["Contact Us", "FAQ", "Accessibility"],
    },
    {
      id: 4,
      name: "About",
      links: ["Our Story", "Ingredients", "Careers"],
    },
  ];

  return (
    <Container>
      <FooterLinkContainer
        items={items}
        title={"Kecap Sawi"}
        description="Jln Mataram No 178, Karangrejo , Kecamatan Ngasem,Kabupaten Kediri,Jawa Timur 64181, Indonesia"
      />
      <Copyright />
    </Container>
  );
}

export default Footer;
