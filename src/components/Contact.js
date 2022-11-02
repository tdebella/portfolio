import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_YeJhZkgb", form.current, "your-token")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#02162f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e74fa0ec-649b-44e9-aaf1-44786ec9619b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="text-3xl font-bold inline border-b-4 border-pink-1200 text-gray-100">
            Contact
          </p>
          <p className="text-gray-300 py-2 text-1xl">
            Please fill out the contact form below or send an email:
            tesfaye0413@gmail.com
          </p>
        </div>
        <input
          className="bg-[#e0e5f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#e0e5f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#e0e5f6] p-1"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white pb-5 border-1 hover:bg-pink-1200 hover:border-yellow-300 px-2 py-1 my-3 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

//use https://getform.io to get a unique url, and add POST method
// sign up and then, sign in

// src
//  video https://www.youtube.com/watch?v=2kg0z1qNrkw&t=1246s
//  code  https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Work.jsx
