import Link from "next/link";

export default function LegalNotice() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          <h1 className="mt-6 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            Legal Notice & Privacy Policy
          </h1>
          <div className="mt-4 h-px w-12 bg-[#5A0F14]" />
          <p className="mt-4 text-xs text-neutral-500">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-sm leading-relaxed text-neutral-400">

          {/* Company */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Company Information
            </h2>
            <p>NEVEXA AUTOMOTIVE INC.</p>
            <p>100 King St W, Suite 5700</p>
            <p>Toronto, Ontario, M5X 1C7</p>
            <p>Canada</p>
          </div>

          {/* Privacy Officer */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Contact & Privacy Officer
            </h2>
            <p>
              Nevexa Automotive Inc. has designated a Privacy Officer responsible for ensuring
              compliance with Canada&apos;s Personal Information Protection and Electronic Documents
              Act (PIPEDA). All privacy-related inquiries, access requests, and complaints should
              be directed to:
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
            </p>
          </div>

          {/* Activity */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Activity
            </h2>
            <p>
              Nevexa Automotive Inc. is a vehicle import, sourcing, and export company operating
              primarily between Canada and African markets, with international sourcing and delivery
              available upon request. Vehicles are sourced primarily from verified North American
              dealerships and select trusted sources.
            </p>
          </div>

          {/* Data Collection */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Personal Information We Collect
            </h2>
            <p>
              We collect personal information only when necessary and only through our website
              forms. This may include your name, email address, and phone number, collected for
              the following purposes:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Responding to inquiries submitted through our contact form
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Managing waitlist registrations for our financing service
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Processing referral program submissions
              </li>
            </ul>
            <p className="mt-3">
              We do not collect information beyond what is necessary for these stated purposes.
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Data Retention
            </h2>
            <p>
              Personal information is retained only for as long as necessary to fulfill the
              purpose for which it was collected. Inquiry data is kept for a maximum of 24 months.
              Waitlist and referral data is kept until the relevant service launches or until you
              request deletion, whichever comes first.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Your Privacy Rights
            </h2>
            <p>Under PIPEDA, you have the following rights regarding your personal information:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Right of access</strong> — You may request
                  a copy of the personal information we hold about you.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Right of correction</strong> — You may
                  request that inaccurate or incomplete information be corrected.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Right of deletion</strong> — You may
                  request that your personal information be deleted from our records.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Right to withdraw consent</strong> — You
                  may withdraw your consent to our use of your data at any time.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
              . We will respond to all requests within{" "}
              <strong className="text-neutral-200">30 days</strong>, as required by PIPEDA.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, disclosure, loss, or alteration.
              In the event of a data breach that poses a real risk of significant harm, we will
              notify affected individuals and the Office of the Privacy Commissioner of Canada
              as soon as feasible.
            </p>
          </div>

          {/* Complaints */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Filing a Complaint
            </h2>
            <p>
              If you believe your privacy rights have not been respected, you may first contact
              us directly at{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
              . If your concern is not resolved, you have the right to file a complaint with the
              Office of the Privacy Commissioner of Canada (OPC) at{" "}
              <a
                href="https://www.priv.gc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                www.priv.gc.ca
              </a>
              .
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Intellectual Property
            </h2>
            <p>
              All content on this website — including text, visuals, and branding — is the
              exclusive property of Nevexa Automotive Inc. and may not be reproduced without
              prior written consent.
            </p>
          </div>

          {/* Trademarks */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Trademarks & Brand References
            </h2>
            <p>
              Vehicle brand names, logos, and trademarks referenced or displayed on this website
              (including but not limited to Mercedes-Benz, BMW, Lexus, Porsche, Tesla, Audi,
              Toyota, Land Rover, Cadillac, Hyundai, Honda, and Dodge) are the property of their
              respective owners. Their use on this website is for identification and informational
              purposes only, and does not imply any affiliation, endorsement, sponsorship, or
              official partnership with Nevexa Automotive Inc. or any of its services.
            </p>
          </div>

          {/* Images */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Images & Visual Content
            </h2>
            <p>
              Photographs and visual content displayed on this website are used for illustrative
              purposes only. They do not necessarily represent specific vehicles available for
              purchase, completed transactions, or guaranteed outcomes. Nevexa Automotive Inc.
              makes no warranty that the vehicles depicted are available or that results will
              match those shown.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Disclaimer
            </h2>
            <p>
              The information on this website is provided for general informational purposes only.
              Nevexa Automotive Inc. reserves the right to modify its services, pricing, and
              availability at any time without prior notice. Nevexa Automotive Inc. acts as an
              independent sourcing and import intermediary and is not an authorized dealer or
              official representative of any vehicle manufacturer mentioned on this website.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-6 text-[11px] text-neutral-600">
            © {new Date().getFullYear()} Nevexa Automotive Inc. All rights reserved.
          </div>

        </div>
      </div>
    </main>
  );
}