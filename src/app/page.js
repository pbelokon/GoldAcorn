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
    <section>
      <div>
        {/* About / intro */}
        <section>
          <h1>Hi there, I&pos;m Pavel</h1>
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

        {/* Testimonials */}
        <section>
          <h2>Kind Words</h2>
          <div>
            {kindwords.map((item) => (
              <blockquote key={item.name}>
                <p>"{item.text}"</p>
                <cite>
                  — {item.name}, {item.title}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
