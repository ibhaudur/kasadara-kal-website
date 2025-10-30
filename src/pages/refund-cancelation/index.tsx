import React, { useEffect } from "react";

const RefundCancellationPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy • Kasadara Kal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">
        Refund &amp; Cancellation Policy
      </h1>

      <p className="text-sm text-gray-600 mb-2">
        Last update: September 5 ,2025
      </p>

      <p className="text-sm text-gray-600 mb-6">
        Website:{" "}
        <a
          href="https://www.kasadarakal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          www.kasadarakal.com
        </a>
      </p>

      <p className="mb-6">
        At Kasadara Kal, we aim to provide quality study materials, test series,
        and exam preparation support for aspirants. Since our services are
        digital in nature, please read our refund and cancellation rules
        carefully.
      </p>

      <hr className="my-6" />

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Digital Products &amp; Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All our services (test series, online exams, study materials,
              etc.) are delivered instantly after purchase.
            </li>
            <li>
              Once a subscription or test package is activated, it cannot be
              cancelled or refunded.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Non-Refundable Situations
          </h2>
          <p className="mb-2">
            Refunds will not be provided in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Change of mind after purchase.</li>
            <li>Incomplete use of tests/materials.</li>
            <li>
              Technical issues caused by the user’s device, internet, or
              browser.
            </li>
            <li>Sharing of login credentials with others.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Refunds Allowed (Special Cases)
          </h2>
          <p className="mb-2">Refunds may be considered only in cases of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Duplicate payment (accidental double charge).</li>
            <li>
              Failed transaction where money is deducted but service not
              activated.
            </li>
            <li>
              Technical error from our side preventing access to purchased
              content.
            </li>
          </ul>
          <div className="mt-3">
            <p>In such cases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Users must email us at{" "}
                <a
                  href="mailto:support@kasadarakal.com"
                  className="text-blue-600 hover:underline"
                >
                  support@kasadarakal.com
                </a>{" "}
                with transaction details within 7 days.
              </li>
              <li>
                After verification, eligible refunds will be processed within
                7–10 working days to the original payment method.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Since all services are digital, there is no cancellation option
              once access is granted.
            </li>
            <li>
              Users are advised to review course/test details carefully before
              making payment.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Contact for Support</h2>
          <p>
            For payment-related issues, please contact us:
            <br />
            Email:{" "}
            <a
              href="mailto:support@kasadarakal.com"
              className="text-blue-600 hover:underline"
            >
              support@kasadarakal.com
            </a>
            <br />
            Phone/WhatsApp:{" "}
            <span className="text-gray-600">+91 9445566912</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Note: Kasadara Kal is an independent exam-preparation platform and
            is not associated with TNPSC or any government body.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RefundCancellationPolicy;
