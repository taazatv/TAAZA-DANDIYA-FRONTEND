import React from "react";

const TermsAndCancellation = () => {
  const termsList = [
    "You can book a minimum of 1 and a maximum of 5 tickets from one mobile number.",
    "Online tickets will have to be exchanged for physical tickets at the ticket counter at the venue.",
    "Only 1 booking allowed per phone number.",
    "Only successfully paid tickets will be accepted for entry.",
    "In case of any discrepancy WhatsApp us on 9831669999.",
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
              <strong>Cancellation Window:</strong> Ticket cancellations can be
              requested up to 7 days before the event date (i.e., until{" "}
              <strong>22nd September 2025</strong>).
            </li>
            <li>
              <strong>Refund Charges:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Before <strong>22nd September 2025</strong> → Full refund
                  minus 10% administrative charge.
                </li>
                <li>
                  After <strong>22nd September 2025</strong> → No refunds will
                  be provided.
                </li>
              </ul>
            </li>
            <li>
              <strong>Non-transferable & Non-exchangeable:</strong> Tickets are
              non-transferable and cannot be exchanged for another date, event,
              or cash alternative.
            </li>
            <li>
              <strong>How to Cancel:</strong> Send cancellation requests to{" "}
              <a
                href="mailto:events@taazatv.com"
                className="text-blue-600 underline"
              >
                events@taazatv.com
              </a>{" "}
              with:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Ticket Order Number</li>
                <li>Name of Purchaser</li>
                <li>Contact Information</li>
              </ul>
            </li>
            <li>
              <strong>Refund Processing:</strong> Approved refunds will be
              processed within <strong>7–10 business days</strong>.
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
      </div>
    </div>
  );
};

export default TermsAndCancellation;
