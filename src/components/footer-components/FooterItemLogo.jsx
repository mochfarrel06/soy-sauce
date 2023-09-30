import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function FooterItemLogo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h4 className="font-semibold text-base text-secondary tracking-wide sm:text-lg">Kecap Sawi</h4>
        <p className="font-normal text-sm text-gray2 tracking-wide sm:text-base md:w-3/4">Jln Mataram No 178, Karangrejo , Kecamatan Ngasem,Kabupaten Kediri,Jawa Timur 64181, Indonesia</p>
      </div>
      <div className="flex gap-5">
        <BsTwitter className="text-secondary text-lg" />
        <FaFacebookF className="text-secondary text-lg" />
        <AiFillInstagram className="text-secondary text-lg" />
      </div>
    </div>
  );
}

export default FooterItemLogo;
