import React from 'react';
import { CiBank } from "react-icons/ci";
import { LiaCcMastercard, LiaCcVisa } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-2">
      <div className="container mx-auto px-4">
        {/* Top Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Policy</h4>
            <ul className="space-y-2">
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Address and Payment Methods */}
        <div className="border-t border-gray-700 pt-8 md:flex md:justify-between">
          <div>
            <h4 className="font-bold mb-4">Mail Us:</h4>
            <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village, Outer Ring Road, Bengaluru, 560103</p>
          </div>

          <div className="mt-8 md:mt-0">
            <h4 className="font-bold mb-4">100% Secure Payments</h4>
            <div className="flex space-x-4">
              <LiaCcVisa size={40} className="text-blue-500" />
              <LiaCcMastercard size={40} className='text-blue-500'/>
                <CiBank size={40} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
