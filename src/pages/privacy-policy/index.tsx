const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Effective From: September 5,2025</p>
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

      <p className="mb-6 text-gray-700">
        At Kasadara Kal, your trust matters to us. This Privacy Policy explains how we handle your 
        information when you use our portal, take tests, or make payments. We keep it straightforward 
        so you know exactly what happens with your data.
      </p>

      <hr className="my-6" />

      <div className="space-y-8 text-gray-800 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. What We Collect</h2>
          <p>
            When you use Kasadara Kal, we may collect:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Basic details you share (name, email, phone, password).</li>
            <li>Payment details (processed by trusted payment gateways – we don’t store your card/UPI info).</li>
            <li>Activity data like login history, test attempts, device/browser type, and IP address.</li>
            <li>Messages you send us through email, WhatsApp, or our contact forms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
          <p>
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Give you access to tests, results, and study materials.</li>
            <li>Process payments and subscriptions.</li>
            <li>Keepy ou i nfo rme unsubscribe anytime). d ab out exa m upd ate s,n ew f</li>
            <li>Fix technical issues and improve our services. eat ure s,o r of</li>
            <li>Protect against misuse, fraud, or illegal activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Who We Share It With</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Never sold: Your data is never sold or rented to anyone. fer s (y ou c an </li>
            <li>Shared only when needed: With service providers (payment partners, hosting, analytics) who help us run the portal.</li>
            <li>By law: If required by courts or authorities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Safety</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>We use encryption and security practices to protect your data.</li>
            <li>Still, no online system is 100% safe – by using our site, you accept that some risks are beyond our control.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Like most sites, we use cookies to make your experience smoother (e.g., saving login, tracking test progress).</li>
            <li>You can block cookies in your browser, but some features may stop working properly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Choices & Rights</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You can edit your profile details anytime.</li>
            <li>You may request us to delete your account and related data (unless we need it for legal or financial reasons).</li>
            <li>You can unsubscribe from promotional emails/notifications whenever you want.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. How Long We Keep Data</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>We keep your data only as long as you use our services or as required by law.</li>
            <li>Once you request deletion, we will remove your personal data within a reasonable time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Links to Other Sites</h2>
          <p>
            Sometimes we may share useful links (e.g., government notifications). We are not responsible for 
            the privacy practices of those external websites.
            the privacy practices of those external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            If we make changes, we’ll update the “Effective From” date and post the new version here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            Got questions about privacy? Reach us at: <br />
            Email:{" "}
            <a
              href="mailto:support@kasadarakal.com"
              className="text-blue-600 hover:underline"
            >
              support@kasadarakal.com
            </a>{" "}
            <br />
            Phone/WhatsApp:
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
