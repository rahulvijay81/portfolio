import React from "react";
import { UserData } from "../data/UserData";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { FooterLink } = UserData;

  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      <div className="text-center text-xs font-poppins">
        © Copyright <b>{currentYear}</b> Designed & Built by
      </div>
      <div
        className="font-bold tracking-wider cursor-pointer text-sm"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        rahulvijay
      </div>
    </div>
  );
}

export default Footer;
