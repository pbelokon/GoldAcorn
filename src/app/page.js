import SectionNotch from "../components/SectionNotch";
import ContactForm from "../components/ContactForm";

function Squiggle({ flip }) {
  const count = 8;
  const seg = 8;
  const mid = 6;
  const amp = 5;
  let d = `M 0,${mid}`;
  for (let i = 0; i < count; i++) {
    const x = i * seg;
    d += ` C ${x + seg / 2},${mid + amp} ${x + seg / 2},${mid - amp} ${x + seg},${mid}`;
  }
  return (
    <svg
      className={`squiggle${flip ? " squiggle--flip" : ""}`}
      viewBox={`0 0 ${count * seg} 12`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const kindwords = [
  {
    name: "Ron Haslett",
    title: "Vice President, Information Technology",
    text: "Pavel is a highly skilled developer, AI enthusiast, and shows up to work with an amazing sense of humour. Highly recommend speaking with him if you are looking for a developer!",
  },
  {
    name: "Tatiana Dandzur",
    title: "Head of Sales | Director of Marketing",
    text: "Pavel, it was amazing working with you over the past few months! You helped Direct Sales achieve in CRM customization in just a few weeks what would normally take months. I truly appreciated your support, expertise, and how quickly you made things happen.",
  },
  {
    name: "Zeeshan Ali Khan",
    title: "CFO",
    text: "Big fan of your commitment and looking forward to driving better outcomes.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div className="page-content">
          <section>
            <h1 className="highlight">Hi there, I&apos;m Pavel</h1>
          <p>
            My path in programming began in early 2017 at around 14 years old,
            When I decided to make an evasion game for my computer science class
            using pygame (never use jupyter note book for game development). It
            was the most fun i ever had doing school work and I've loved
            programming since then. (My big motivation was works of Jonathan
            Blow and Casey Muratori as well as the Nintendo)
          </p>

          <p>
            These days I am focused on learning my way through ZIG for desktop
            development, ps I am also in early stages of building a game studio
            with my friend!
          </p>

          <p>
            In my past roles at ILAC &amp; TDSB I&apos;ve always undertaken
            senior-level responsibilities, high-stakes projects in Data
            Analytics and AI automation, as well as multi-business integrations
            connecting multiple subsidiary companies to the main corporate
            network.
          </p>

          <p>
            I am open to opportunities where I can best utilize my skills and
            knowledge in Software Development, Automation, and AI with a
            strong-minded team that is all for innovation, product quality, and
            growth.
          </p>
          </section>
        </div>
      </main>

      <section className="testimonials">
        <SectionNotch variant="light-over-dark" />

        <div className="testimonials-inner">
          <div className="kindwords-header">
            <Squiggle flip />
            <h2>Kind Words</h2>
            <Squiggle />
          </div>
          <div className="kindwords-list">
            {kindwords.map((item) => (
              <blockquote className="kindwords-item" key={item.name}>
                <p>&ldquo;{item.text}&rdquo;</p>
                <cite>
                  — {item.name}, {item.title}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>

        <SectionNotch variant="dark-over-light" />
      </section>

      <section id="connect" className="connect">
        <div className="connect-inner">
          <div className="kindwords-header">
            <Squiggle flip />
            <h2>Connect</h2>
            <Squiggle />
          </div>
          <p className="connect-email">
            Email: <a href="mailto:pavelbelokon@proton.me">pavelbelokon@proton.me</a>
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
