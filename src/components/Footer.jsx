import React from "react";
import { IoSend } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router";

function Footer() {
  return (
    <>
      <section className="h-12 md:h-60 w-full bg-black overflow-hidden">
        <footer className=" max-w-7xl hidden md:flex justify-between md:pt-8 md:pb-3 px-2  mx-auto">
          <ul className="text-white hidden md:grid gap-4 text-sm">
            <li className="text-2xl  font-semibold">Exclusive</li>
            <li className="text-lg font-normal">Subscribe</li>
            <li>Get 10% of your first order</li>
            <li>
              <div className="flex gap-4 items-center border-1 border-white rounded px-3 py-1">
                <input
                  className=" outline-none"
                  type="email"
                  placeholder="Enter your Email"
                />
                <IoSend />
              </div>
            </li>
          </ul>

          {/* 2 */}

          <ul className="text-white hidden md:grid gap-4 text-sm">
            <li className="text-lg font-normal">Support</li>
            <li className="w-5%">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li>exclusiveEcommerce@gmail.com</li>
            <li>+91 4577635534</li>
          </ul>

          {/* 3 */}

          <ul className="text-white hidden md:grid gap-4 text-sm">
            <li className="text-lg  font-semibold">Account</li>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>cart</li>
            <li>Wishlist</li>
          </ul>

          {/* 4 */}

          <ul className="text-white hidden md:grid gap-4 text-sm">
            <li className="text-lg  font-semibold">Quick Link</li>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

          {/* 5 */}

          <ul className="text-white hidden md:grid gap-4 text-sm">
            <li className="text-lg  font-semibold">Download App</li>
            <li className="text-gray-300/35 font-medium">
              Save $3 with App New User Only
            </li>
            <li>
              {/* <img src="" /> */}
              <div></div>
            </li>
            <li className="flex gap-5 text-white text-2xl">
              <TiSocialFacebook />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
}

export default Footer;
