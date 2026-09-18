import React from "react";
import Address from "../components/Address";
import Social from "../components/Social";
import useDocumentTitle from "../Hooks/useDocumentTitle";

// Contact stays intentionally simple. Unlike Home/About/Experience/
// Projects/case studies, this page's copy was never part of the locked
// Phase 4 content set, so the old Tunis-template intro ("Don't be shy!"
// plus a generic sales-y paragraph) isn't authoritative — replaced with a
// plain, direct line.
//
// The EmailJS-backed form was removed entirely: a live submission test
// confirmed it was failing in production (EmailJS's connected Gmail OAuth
// grant had expired — "Invalid grant. Please reconnect your Gmail
// account" — independent of origin/domain, so it would fail identically
// once deployed). Rather than ship a form that silently drops messages,
// this page now points directly at real, working contact methods: email,
// LinkedIn, GitHub.
const ContactPage = () => {
  useDocumentTitle("Contact", "Get in touch about a project or a role.");

  return (
    <div className="contact contact--no-form">
      <div className="title-section text-left text-sm-center">
        <h1>
          GET IN <span>TOUCH</span>
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h2 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 contact-intro">
              Want to talk about a role or the work?
              <br />
              Send me a message.
            </h2>
            <Address />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
