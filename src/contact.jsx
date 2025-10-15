import React from "react";
import { Mail, MapPin, Phone, Download } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Get In Touch</h2>
          <p className="text-gray-600">Feel free to reach out. I'd love to hear from you.</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
            <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Trou aux Biches, Mauritius</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+230 12345678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">mail@mail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Downloads */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">Downloads</h3>
            <div className="space-y-3">
              <a href="./CV.pdf" download className="block">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition text-left flex items-center justify-center shadow-sm">
                  <Download size={18} className="mr-3" />
                  Download Resume
                </button>
              </a>
              <a href="./Certificate.pdf" download className="block">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg transition text-left flex items-center justify-center border-2 border-slate-200 shadow-sm">
                  <Download size={18} className="mr-3" />
                  Download Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;