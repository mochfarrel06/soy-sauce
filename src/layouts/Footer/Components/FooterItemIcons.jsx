import React from "react";
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

function FooterItemIcons() {
  return (
    <div className="flex gap-5">
      <BsTwitter className="text-secondary text-lg" />
      <FaFacebookF className="text-secondary text-lg" />
      <AiFillInstagram className="text-secondary text-lg" />
    </div>
  );
}

export default FooterItemIcons;
