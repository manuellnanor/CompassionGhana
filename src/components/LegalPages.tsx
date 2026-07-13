import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import RoutePageShell from "./RoutePageShell";

type LegalPageProps = {
  title: string;
  parent?: string;
  lastRevised?: string;
  children: React.ReactNode;
  width?: "standard" | "wide";
};

function LegalPage({ title, parent, lastRevised, children, width = "standard" }: LegalPageProps) {
  return (
    <RoutePageShell>
      <section className="bg-white pb-24 pt-36 font-sans sm:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-16 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-[#0038a8]">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-300" />
            {parent && (
              <>
                <Link href="/about" className="transition-colors hover:text-[#0038a8]">{parent}</Link>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </>
            )}
            <span className="text-slate-800">{title}</span>
          </nav>

          <article className={`legal-copy ${width === "wide" ? "max-w-5xl" : "max-w-3xl"}`}>
            {lastRevised && <p className="mb-2 text-sm text-slate-500">Last revised: {lastRevised}</p>}
            <h1>{title}</h1>
            {children}
          </article>
        </div>
      </section>
    </RoutePageShell>
  );
}

const policyItems = [
  {
    title: "Cash and Investment",
    content: "Compassion manages cash and investments to maintain adequate liquidity, protect funds and pursue appropriate returns. Financial activity is conducted through regulated markets with oversight for anti-money-laundering, anti-bribery and anti-corruption compliance.",
  },
  {
    title: "Compensation",
    content: "Compassion maintains compensation practices designed to attract and retain qualified employees while reflecting responsible stewardship, market data, internal equity and applicable employment requirements.",
  },
  {
    title: "Conflict of Interest / Related Party",
    content: "Board members, leaders and employees are expected to disclose actual or potential conflicts of interest. Related-party matters are reviewed and managed so decisions remain objective and serve Compassion’s mission.",
  },
  {
    title: "Data Protection and Privacy",
    content: "Personal information is handled through documented privacy, security, retention and access practices. Compassion works to protect the information entrusted to it and to comply with applicable data-protection requirements.",
  },
  {
    title: "Employee Relations",
    content: "Compassion is committed to a respectful, safe and mission-aligned workplace. Employee policies address fair treatment, appropriate conduct, reporting concerns and compliance with local employment laws.",
  },
  {
    title: "Fiscal Responsibility",
    content: "Financial controls, budgets, audits and board oversight support accurate reporting and responsible use of resources. Compassion seeks to direct funds effectively toward its charitable purpose.",
  },
  {
    title: "Funds Management / Monitoring",
    content: "Funds are monitored through documented controls, partner accountability, financial reporting and risk-based reviews to help ensure they are used for their intended purpose.",
  },
  {
    title: "Program Ratio / Program Expense Philosophy",
    content: "Compassion evaluates program spending in the context of sustainable ministry impact. The organization balances direct program services with the systems, people and safeguards required to deliver those services responsibly.",
  },
  {
    title: "Risk Management",
    content: "Compassion identifies and monitors strategic, operational, financial, legal, safeguarding and reputational risks. Leaders and the board use established processes to evaluate risk and oversee appropriate responses.",
  },
];

const informationTypes = [
  "Account Registration",
  "Cookies and First-Party Tracking",
  "Cookies and Third-Party Tracking",
  "Donation and Sponsorship Information",
  "Donor-Advised Funds, Estate Planning and Giving Information",
  "Email Interconnectivity",
  "Employment",
  "Events, Tours and Visits",
  "Feedback and Support",
  "Letters and Photographs Sent to Sponsored Children",
  "Mailing Lists",
  "Partner and Church Promotion",
  "Religious, Denominational and Ethnicity-Based Information",
  "Surveys and Research",
  "Sweepstakes or Contests",
  "Transactional Information",
  "Website Interactions and Web Logs",
];

const sharingTypes = [
  "Contact Information",
  "Other Identifiers",
  "Government-Issued Identification",
  "Financial Information",
  "Demographic Information",
  "Health-Related Information",
  "Commercial Information",
  "Internet and Electronic Activity",
  "Professional or Employment Information",
  "Inferences Drawn From Other Information",
];

export function CriticalPoliciesPage() {
  return (
    <LegalPage title="Critical Policies and Standards" parent="About Us" width="wide">
      <div className="max-w-3xl">
        <p>Compassion International is committed to maximizing impact, being fully transparent about operations and programmatic outcomes, and addressing critical risk factors facing our ministry. Compassion’s board and management are also committed to the mission of releasing children from poverty in Jesus’ name. To fulfill these commitments, Compassion establishes organization-wide policies to govern all operations of the organization.</p>
        <p>Compassion International is committed to operating in compliance with relevant legal and regulatory requirements in every country in which we operate. Our policies define our intention and establish the governance and compliance expectations of the board of directors and organizational leadership.</p>
        <p>In demonstration of that commitment, Compassion maintains a secure, confidential way to report ethical concerns or suspected violations of law and policy. We maintain investigative capacity so credible allegations of wrongdoing are appropriately investigated and addressed. Our goal is to ensure stakeholders can communicate concerns safely and honestly while maintaining anonymity and confidentiality.</p>
        <p>Compassion International is intentional in addressing critical risk factors facing our ministry and establishing policies to govern the behaviors and operating activities of our staff.</p>
      </div>

      <div className="mt-16 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {policyItems.map((item) => (
          <details key={item.title} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-slate-950">
              {item.title}
              <span className="text-xl font-normal text-[#2a5eec] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="pb-6 pr-10 text-slate-600">{item.content}</p>
          </details>
        ))}
      </div>
    </LegalPage>
  );
}

export function DisclosureStatementPage() {
  return (
    <LegalPage title="Disclosure Statement" parent="About Us">
      <p>Compassion International complies fully with federal and state charitable solicitation requirements and is a Charter Member of the Evangelical Council for Financial Accountability as well as the Better Business Bureau Wise Giving Alliance.</p>
      <p>You may find more information on Compassion International&apos;s financial reports and policies by reviewing our <Link href="/reports">financial integrity page</Link>.</p>

      <h2>Disclosure:</h2>
      <p>This was produced by Compassion International, Incorporated (Compassion), which will receive the contributions. Our principal office is located at 12290 Voyager Parkway, Colorado Springs, CO 80921. Compassion is a 501(c)(3) organization.</p>
      <p>Contributions to Compassion are tax deductible to the fullest extent allowed by law. Requests for copies of recent financial statements, Form 990, annual report or other information may be directed to Sponsor Donor Relations at <a href="tel:8003367676">800-336-7676</a> or <a href="https://www.compassion.com" target="_blank" rel="noreferrer">compassion.com</a>. Compassion controls 100 percent of the funds contributed.</p>
    </LegalPage>
  );
}

export function ConditionsOfUsePage() {
  return (
    <LegalPage title="Conditions of Use" lastRevised="04/12/2023">
      <p>Compassion International, Inc. provides the services described to you subject to the conditions contained within this document. If you visit our website, you accept these conditions.</p>
      <p>Please read them carefully. When you use any current or future Compassion International, Inc. website or service, or visit any entity referenced by Compassion International, Inc., you also will be subject to the guidelines and conditions applicable to that entity.</p>

      <h2>Copyright</h2>
      <p>All content included on this site, such as text, graphics, logos, photographs, button icons, images, audio clips, digital downloads, data compilations and software, is the property of Compassion International, Inc. or its content suppliers and is protected by United States and international copyright laws.</p>
      <p>The compilation of all content on this site is the exclusive property of Compassion International, Inc. and is protected by U.S. and international copyright laws.</p>

      <h2>Trademarks</h2>
      <p>Compassion International, Inc.&apos;s trade names, trademarks, trade dress and service marks—including designs, logos, page headers, button icons and scripts—are the sole property of Compassion International, Inc. They may not be used without written authorization or in a way likely to cause confusion, disparage or discredit Compassion.</p>
      <p>All other trademarks that appear on this site are the property of their respective owners.</p>

      <h2>License and Site Access</h2>
      <p>Compassion grants you a limited, nonexclusive, nontransferable and revocable license to access and make personal use of this site. You may not download or modify any portion of the site without express written consent.</p>
      <p>This license does not include resale or commercial use of the site or its contents; collection or derivative use of information, images or photographs; downloading or copying information for another party; or the use of data mining, robots or similar extraction tools.</p>
      <p>No portion of this site may be reproduced, duplicated, copied, sold, resold or otherwise exploited for commercial purposes without express written consent. You may not frame Compassion content, use hidden text incorporating Compassion names or marks, or otherwise use the site in an unauthorized manner.</p>
      <p className="legal-notice">THIS SITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPASSION MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE OPERATION OF THE SITE OR ITS CONTENT. USE OF THIS SITE IS AT YOUR SOLE RISK. TO THE EXTENT PERMITTED BY LAW, COMPASSION WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE SITE.</p>

      <h2>Site Policies, Modification, and Severability</h2>
      <p>Compassion reserves the right to change this site, its policies and these Conditions of Use at any time. If any condition is deemed invalid, void or unenforceable, that condition will be considered severable and will not affect the validity of the remaining conditions.</p>

      <h2>Contact Information</h2>
      <p>If you have questions, comments or complaints concerning our privacy practices or conditions of use, contact us at the address below. We will attempt to respond and provide additional information.</p>
      <address>Compassion International<br />12290 Voyager Parkway<br />Colorado Springs, CO 80921</address>
      <p>If you are not satisfied with our response and are in the European Union, you may have the right to lodge a complaint with your local supervisory authority.</p>

      <h2>Child Sponsorship</h2>
      <h3>Recurring Donation</h3>
      <p>To ensure donations are not interrupted, you must provide one or more current, valid and accepted payment methods. If you agree to a monthly donation, the payment method you provide will be charged monthly until you contact us to cancel. For a Sponsorship Plan, the payment method on file will be charged the then-current donation amount on a recurring basis.</p>
      <p>Your billing date may be determined by the date you enroll and will be shown in your account. Terms of payment may also be governed by agreements with your financial institution or payment provider, which may charge transaction or processing fees.</p>

      <h3>Different Child Sponsorship Plans</h3>
      <p>Compassion may offer different sponsorship or donation plans with different donation amounts. The applicable amount and plan details will be disclosed when you make your selection or in related communications. Your account provides details about active sponsorships and donations.</p>

      <h3>Additional Donations</h3>
      <p>We may offer one-time or recurring donation opportunities that are restricted or unrestricted. Details will be disclosed when you make your selection, and current commitments may be reviewed through your account.</p>

      <h3>Updating Your Payment Methods</h3>
      <p>You may update payment methods through your account. We may also update payment information with authorization from your payment provider. After an update, you authorize us to continue charging the applicable payment method.</p>

      <h3>Cancellation</h3>
      <p>You may cancel recurring donations, including a Child Sponsorship plan, at any time. Donations are generally not refundable. To avoid another charge, please call <a href="tel:8003367676">800-336-7676</a> at least three working days before your billing date.</p>

      <h3>Changes to the Amount of Child Sponsorship Plans</h3>
      <p>Compassion works to keep program costs low, but inflation or changes in the cost of care may require an adjustment to sponsorship plan amounts. Unless a communication states otherwise, Compassion will provide at least 30 days&apos; notice and an opportunity to opt out of an increase.</p>

      <h2>Child and Youth Protection and Appropriate Conduct Standards</h2>
      <p>As a child- and youth-focused organization, Compassion expects all supporters to comply with safeguarding standards and periodic updates. Failure to comply may result in immediate suspension or termination of sponsorship or other engagement.</p>

      <h3>General Commitments</h3>
      <ul>
        <li>Treat every child and young person with dignity and respect, without abusive, degrading, coercive, sexually suggestive or culturally inappropriate language or behavior.</li>
        <li>Remain accountable for your response to a child or young person&apos;s behavior, even if inappropriate behavior is initiated by them.</li>
        <li>Recognize the inherent power imbalance between adults and children and act consistently in the child&apos;s best interests.</li>
        <li>Report actual or suspected abuse, neglect or exploitation through Compassion&apos;s established processes.</li>
      </ul>

      <h3>Commitments Relating to Participants, Former Participants, and Their Families</h3>
      <ul>
        <li>Protect participants from all forms of abuse, neglect and exploitation and respect the confidentiality of personal information.</li>
        <li>Communicate with participants only through Compassion&apos;s established communication processes.</li>
        <li>Never visit a participant or caregiver independently from Compassion or outside an arranged trip or visit.</li>
        <li>Follow applicable child-protection reporting requirements and all instructions provided for visits and digital contact.</li>
      </ul>

      <h3>Protection and Safeguarding Commitments During Trips, Visits, or Other Programmatic Engagements</h3>
      <ul>
        <li>Engage with participants only in open or visible places and follow the two-adult rule in enclosed settings.</li>
        <li>Submit to lawfully permitted background or police checks before real-time contact or access to participant information.</li>
        <li>Seek guidance before taking photographs or video and respect local expectations, dignity standards and personal boundaries.</li>
        <li>Do not use violence, physical discipline or punishment, and do not travel alone with a participant except in an emergency.</li>
        <li>Comply with the specific obligations Compassion provides for each trip or visit.</li>
      </ul>

      <h3>Suspension and Termination</h3>
      <p>Compassion may suspend or terminate sponsorship when a supporter breaches these standards. A person listed on a sex-offender registry, convicted of a sex crime, or living at the same address as such a person is ineligible to be a sponsor or donor. Compassion will terminate associated sponsorship or donation accounts.</p>
      <p><strong>Effective Date: 04/12/2023</strong></p>
    </LegalPage>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage title="Compassion Privacy Policy" lastRevised="04/17/2026" width="wide">
      <div className="max-w-3xl">
        <h2>Our Commitment</h2>
        <p>Compassion International is committed to your privacy. We value your trust and strive to be responsible in our management of your personal information.</p>
        <p>We provide this Privacy Policy to explain our privacy practices and how information is collected and used. Any activity we engage in with your information is ultimately for the greater purpose of helping to release children from poverty in Jesus’ name.</p>
        <p>If you have questions or concerns, contact us at <a href="tel:8003367676">(800) 336-7676</a>, Monday through Friday, 7 a.m. to 5:30 p.m. MT.</p>

        <h2>Privacy Policy</h2>
        <p>This policy describes how Compassion International (collectively “Compassion,” “we,” “us” or “our”) collects, uses, shares and safeguards personal information. It also explains your choices and how to reach us with questions.</p>
        <ul className="legal-toc">
          <li><a href="#information-we-collect">Types of Information We Collect</a></li>
          <li><a href="#use-and-processing">Use and Processing of Information</a></li>
          <li><a href="#sharing">Sharing of Information</a></li>
          <li><a href="#cookies">Cookies and Similar Technology</a></li>
          <li><a href="#rights">Your Rights and Choices</a></li>
          <li><a href="#protection">How We Protect and Retain Personal Information</a></li>
          <li><a href="#miscellaneous">Miscellaneous</a></li>
          <li><a href="#contact-information">Contact Information</a></li>
          <li><a href="#childrens-data">Children&apos;s Data</a></li>
        </ul>
      </div>

      <section id="information-we-collect" className="legal-section-grid">
        <div>
          <h2>Types of Information We Collect</h2>
          <p>We collect information you provide directly, information generated when you use our services and information received from third parties, business partners, affiliates or public sources. The examples shown explain why the information is used and whether it may be shared for targeted advertising.</p>
          <p>If you do not provide requested information, we may be unable to complete a transaction, process a donation or sponsorship, or facilitate participation in an event or tour.</p>
          <p>We may verify data through third-party sources to protect the children we serve, maintain integrity, improve supporter service and keep contact information accurate.</p>
        </div>
        <div className="legal-accordion-list">
          {informationTypes.map((item, index) => (
            <details key={item} open={index === 0}>
              <summary>{item}<span>+</span></summary>
              <div>
                <p><strong>Information collected:</strong> Relevant identity, contact, account, transaction, communication or activity information associated with this interaction.</p>
                <p><strong>Primary use:</strong> To provide requested services, administer programs, process transactions, protect participants, improve our work and communicate with you.</p>
                <p><strong>Targeted advertising:</strong> Only where described, permitted by law and subject to your available choices.</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="use-and-processing" className="max-w-3xl">
        <h2>Use and Processing of Information</h2>
        <p>In addition to the purposes described above, we may use information:</p>
        <ul>
          <li>To identify you when you visit our website.</li>
          <li>To process donations and sponsorships.</li>
          <li>To improve our services, conduct analytics and support our mission.</li>
          <li>To respond to support, employment and other inquiries.</li>
          <li>To send mission, program, marketing and promotional communications.</li>
          <li>To update you about your sponsored child and special events.</li>
          <li>To steward partnerships with churches and volunteers.</li>
          <li>For internal administration and relationship management.</li>
        </ul>
        <p>Our processing may be based on your consent, the need to perform a contract, legal obligations and/or Compassion&apos;s legitimate interests. When we maintain information in deidentified form, we do not attempt to reidentify it except to confirm that deidentification satisfies legal requirements.</p>
      </section>

      <section id="sharing" className="legal-section-grid">
        <div>
          <h2>Sharing of Information</h2>
          <p>We may disclose information to service providers, partners, individuals and other third parties for operational, legal and mission-related reasons. We do not sell personal information, nor do we participate in sharing that would constitute a sale under applicable law.</p>
          <p>Recipients may include payment processors, data and analytics providers, communications and marketing providers, church or program partners, professional advisers, government authorities and social media platforms where appropriate.</p>
        </div>
        <div className="legal-accordion-list">
          {sharingTypes.map((item) => (
            <details key={item}>
              <summary>{item}<span>+</span></summary>
              <div><p>Information in this category may be shared only with recipients that support the purpose for which it was collected, meet applicable contractual requirements or are otherwise authorized or required by law.</p></div>
            </details>
          ))}
        </div>
      </section>

      <section id="cookies" className="max-w-3xl">
        <h2>Cookies and Similar Technology</h2>
        <p>We and our service providers use cookies, pixels, tags and related technologies to operate our websites, remember preferences, understand engagement, improve performance and support communications. Some technologies are necessary for site operation; others support analytics or marketing.</p>
        <p>You may manage nonessential cookies through Cookie Preferences in the footer. Browser settings may also allow you to block or delete cookies, although doing so may affect site features. Signals such as Global Privacy Control may be recognized where required by applicable law.</p>
        <p>Our emails may contain tracking technologies that help us understand whether messages were received, opened or acted upon. You can unsubscribe from promotional email using the link included in those messages.</p>
      </section>

      <section id="rights" className="max-w-3xl">
        <h2>Your Rights and Choices</h2>
        <p>Depending on where you live, you may have the right to request access to, correction of or deletion of personal information; obtain a portable copy; restrict or object to certain processing; withdraw consent; or opt out of targeted advertising and certain sharing.</p>
        <ul>
          <li><strong>Promotional email:</strong> Use the unsubscribe instructions in an email or contact us.</li>
          <li><strong>Postal mail and telephone:</strong> Contact us to update communication preferences.</li>
          <li><strong>Targeted advertising:</strong> Use Cookie Preferences or contact our Data Protection Officer.</li>
          <li><strong>Text messages:</strong> Text STOP to 97646 to discontinue Compassion SMS messages.</li>
          <li><strong>Revocation of consent:</strong> You may revoke consent where processing relies on it, although this may limit services we can provide.</li>
        </ul>
        <p>We may need to verify your identity before completing a request. Where allowed, an authorized agent may submit a request on your behalf. You also may have the right to appeal a decision or complain to a supervisory authority.</p>
      </section>

      <section id="protection" className="max-w-3xl">
        <h2>How We Protect and Retain Personal Information</h2>
        <p>Compassion is committed to protecting personal information. Depending on the circumstances, information may be held in hard-copy and/or electronic form. We use technical and organizational safeguards, including access policies, modern encryption methods, security controls and employee training.</p>
        <p>No Internet transmission or electronic storage method is fully secure, so we cannot guarantee absolute security. We retain personal information only as long as necessary for the purposes in this policy and to satisfy legal, accounting or reporting requirements, unless a longer period is required or permitted.</p>
      </section>

      <section id="miscellaneous" className="max-w-3xl">
        <h2>Miscellaneous</h2>
        <ul>
          <li><strong>International transfers:</strong> Information may be processed in countries whose privacy laws differ from those where you live, including the United States.</li>
          <li><strong>Third-party websites:</strong> We do not control the privacy practices of websites or applications we do not own. Their policies apply when you use them.</li>
          <li><strong>Policy changes:</strong> We may update this policy as our practices, technology and legal requirements change. The latest effective date appears on this page.</li>
        </ul>
      </section>

      <section id="contact-information" className="max-w-3xl">
        <h2>Contact Information</h2>
        <p>For questions, comments, complaints, accessibility requests or data-rights requests, contact us. We will attempt to respond and provide additional information.</p>
        <address>Compassion International<br />12290 Voyager Parkway<br />Colorado Springs, CO 80921<br /><a href="tel:8003367676">(800) 336-7676</a></address>
        <p>If you are not satisfied with our response and are in the European Union or United Kingdom, you may have the right to lodge a complaint with your local supervisory authority.</p>
      </section>

      <section id="childrens-data" className="max-w-3xl">
        <h2>Children&apos;s Data</h2>
        <p>Outside our programs for children, we do not intentionally collect information about or from children. If you are a parent or legal guardian and believe a child under 18 who is not part of our program has provided personal information, contact us so we can address the request.</p>
        <p><strong>Effective Date: 04/17/2026</strong></p>
      </section>
    </LegalPage>
  );
}
