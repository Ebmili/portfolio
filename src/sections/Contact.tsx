import Button from "@/components/Button";
import React from "react";
function Contact() {
  return (
    <div
      className="contact"
      id="contact"
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        My inbox is always open. I am currently open to the new job opportunities!
        Feel free to contact me!
      </p>
      <div className="contact-cta">
        <Button link="mailto:emilabuczek10@gmail.com" text="Say Hello" />
      </div>
    </div>
  );
}

export default Contact;