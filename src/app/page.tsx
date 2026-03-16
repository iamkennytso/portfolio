const CONTAINER_CLASSES = "md:flex md:flex-row justify-around w-full p-2 md:p-8 py-12 md:py-16"
export default function Home() {
  const gradDate = new Date(2017, 10, 10)
  const curDate = new Date()
  let expDays = (curDate.getTime() - gradDate.getTime()) / (1000 * 60 * 60 * 24);
  const years = Math.floor(expDays / 365)
  expDays = expDays % 365
  const months = Math.floor(expDays / 30)
  expDays = expDays % 30
  const days = Math.floor(expDays)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id='who' className={CONTAINER_CLASSES}>
        <div className="md:w-1/2 text-center">
          <h1>Who</h1>
          <h2>is Ken?</h2>
        </div>
        <div className="md:w-1/2 flex-col content-center border-l border-primary/20 pl-6">
          <p>
            Ken&apos;s a software engineer with <mark>7+ years</mark> under his belt. He&apos;s done the
            startup thing, he&apos;s done the big corporate thing, and he&apos;s been productive
            in both. He&apos;s shipped products solo as a full-stack dev and led teams of
            engineers to do the same.
          </p><br/>
          <p>
            He&apos;s at his best when the people around him actually care about the work —
            he&apos;s big on <mark>company culture</mark>. The kind of team where code reviews
            are real conversations, feedback goes both ways, and everyone&apos;s trying to get
            a little better every day. Big picture, he wants to be somewhere that&apos;s
            building something that matters and isn&apos;t just going through the motions.
          </p>
        </div>
      </div>

      <div id='what' className={CONTAINER_CLASSES}>
        <div className="md:w-1/2 text-center">
          <h1>What</h1>
          <h2>technologies does Ken use?</h2>
        </div>
        <div className="md:w-1/2 items-center border-l border-primary/20 pl-6">
          <p>
            <mark>JavaScript</mark>, TypeScript, and Node are home base. <mark>React</mark> and <mark>React Native</mark> are
            where he spends most of his time. He&apos;s built with Next.js too — this site
            runs on it (
            <a
              href="https://github.com/iamkennytso/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              source code here
            </a>
            ).
          </p><br/>
          <p>
            State management? He&apos;s used them all — Redux, Context API, React Query,
            MobX, Jotai. Styling-wise, he&apos;s worked with Material UI, PrismUI, and
            SCSS. He&apos;s leveled up component libraries with Storybook and kept things
            reliable with Jest and Cypress.
          </p><br/>
          <p>
            On the backend side, he&apos;s integrated RESTful APIs, GraphQL, and gRPC
            talking to MySQL, PostgreSQL, and MongoDB. His GCP experience covers auth,
            Cloud Functions, Remote Configs, A/B testing, and analytics. He&apos;s also set
            up CI/CD with GitHub Actions, built dashboards in Mixpanel, and wired up
            internal tools with Retool.
          </p>
        </div>
      </div>

      <div id='where' className={CONTAINER_CLASSES}>
        <div className="md:w-1/2 text-center">
          <h1>Where</h1>
          <h2>is Ken, where has he worked?</h2>
        </div>
        <div className="md:w-1/2 flex-col content-center border-l border-primary/20 pl-6">
          <p>
            Ken&apos;s in <mark>New York City</mark>. He works best with some flexibility — family stuff
            means he can&apos;t always be in an office 9-to-5, but he&apos;s always around for
            team syncs and happy to show up when it counts.
          </p><br/>
          <p>
            He&apos;s built things at startups like Zigazoo and Auxetic, and at places
            you&apos;ve definitely heard of — the NBA, American Express, and Cigna.
          </p>
        </div>
      </div>

      <div id='when' className={CONTAINER_CLASSES}>
        <div className="md:w-1/2 text-center">
          <h1>When</h1>
          <h2>did Ken start coding?</h2>
        </div>
        <div className="md:w-1/2 flex items-center border-l border-primary/20 pl-6">
          Ken came up through Hack Reactor&apos;s 10th New York cohort. Front-end is his bread and butter, and he&apos;s been doing this professionally for: <br/>
          <div className="w-full flex justify-center m-4 ">
            <div className="text-center p-4 border-2 rounded border-primary/50 bg-primary-dark"><code>{years} years<br/>{months} months<br/>{days} days</code><br/></div>
          </div>
        </div>
      </div>

      <div id='why' className={CONTAINER_CLASSES}>
        <div className="md:w-1/2 text-center">
          <h1>Why</h1>
          <h2>is Ken a software engineer?</h2>
        </div>
        <div className="md:w-1/2 flex-col content-center border-l border-primary/20 pl-6">
          <p>
            Before code, Ken was an eCommerce Specialist at Durante Rentals — a
            construction rental startup that punched above its weight with tech. He
            did well enough to get promoted to CIS Manager, running all their tech
            operations. The company&apos;s president was always looking for the next edge,
            and Ken was the guy figuring out how to make it happen.
          </p><br/>
          <p>
            After three years of evaluating software and constantly hitting walls with
            what was out there, he had a pretty simple thought: why not just build
            something better? So he did.
          </p><br/>
          <p>
            Ken grew up in an immigrant family, spending summers in high school
            working at the family restaurant — which is a fast track to learning hard
            work and empathy. He later bartended and managed a bar, which is where he
            figured out he genuinely loves teaching people and sharing what he knows.
            When he&apos;s not writing code, he&apos;s probably getting way too competitive in a
            video game or running a steak experiment.
          </p>
        </div>
      </div>
    </main>
  );
}
