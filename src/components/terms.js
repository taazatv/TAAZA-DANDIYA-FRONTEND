import React from "react";

const TermsAndCancellationAndPrivacy = () => {
  const termsList = [
    "You can book a minimum of 1 and a maximum of 5 tickets from one mobile number.",
    "Online tickets will have to be exchanged for physical tickets at the ticket counter at the venue.",
    "Only 1 booking allowed per phone number.",
    "Only successfully paid tickets will be accepted for entry.",
    "In case of any discrepancy WhatsApp us on 9831669986.",
    "Severe action will be taken against misconduct or mischievous behavior.",
    "Smoking and consumption of alcohol is strictly prohibited inside the venue.",
    "Entry ticket is required for children above 3 years of age.",
    "Individuals under the influence of alcohol will not be allowed inside the venue.",
    "Outside eatables and water are not allowed.",
    "Scissors, knives, blades, or any other objectionable instruments are not allowed.",
    "Every individual must undergo security checks and frisking before entering.",
    "The program is subject to the Force Majeure clause.",
    "The program is liable to change at the organizer's discretion.",
    "Dandiya sticks and food are available for purchase until stocks last.",
    "Re-entry is not allowed once you exit the venue.",
    "Organisers hold the rights to deny late entry.",
  ];

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-4xl bg-white p-6 md:p-10 rounded-2xl shadow-lg space-y-10">
        {/* 📜 Terms & Conditions */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Terms & Conditions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-justify">
            {termsList.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ol>
        </div>

        {/* ✅ Cancellation Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            Cancellation Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              <strong>Tickets once sold cannot be cancelled.</strong>
            </li>
            <li>
              <strong>No refunds</strong> will be provided for tickets once
              booked.
            </li>
            <li>
              <strong>Non-transferable &amp; Non-exchangeable:</strong> Tickets
              are non-transferable and cannot be exchanged for another date,
              event, or cash alternative.
            </li>
          </ul>

          <p className="mt-3 text-gray-700">
            📧 For queries, contact:{" "}
            <a
              href="mailto:response@taazatv.com"
              className="text-blue-600 underline"
            >
              response@taazatv.com
            </a>
          </p>
        </div>

        {/* 🔒 Privacy Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <div className="space-y-2 text-gray-700 leading-relaxed text-justify">
            <p>
              As a general rule, this website does not collect Personal
              Information about you when you visit the site, unless you choose
              to provide such information through feedback, online registration,
              ticket purchase etc.
            </p>

            <p>
              <strong>Cookies & Tracking: </strong>We may use cookies or similar
              technologies to improve user experience and understand how the
              site is being used. You may disable cookies in your browser, but
              some functionality may be affected.
            </p>
            <p>
              <strong>Email and Personal Information: </strong>Your email and
              other personal details will only be collected if you choose to
              send a message, make a registration, or purchase tickets. We will
              use them only for the purpose for which they were provided. We
              won't disclose them without your consent, except as required by
              law.
            </p>
            <p>
              <strong>Data Retention:</strong> We retain information only as
              long as necessary for our business purposes, legal compliance or
              resolving disputes.
            </p>
            <p>
              <strong>Disclosure:</strong> We will not sell or rent your
              personal data. We may share data with our staff/agents/suppliers
              who need it to provide the service. We may also disclose
              information pursuant to legal obligations (e.g. court orders, law
              enforcement requests).
            </p>

            <p>
              <strong>Changes to Policy:</strong> We reserve the right to update
              or modify this Privacy Policy at any time. Any changes will be
              posted on the site, and by continuing to use the site after
              changes you consent to those changes.
            </p>
            <p>
              📧 For privacy queries, contact:{" "}
              <a
                href="mailto:response@taazatv.com"
                className="text-blue-600 underline"
              >
                response@taazatv.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCancellationAndPrivacy;
