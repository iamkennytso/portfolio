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
    <main className="flex min-h-screen flex-col items-center justify-between mt-8">

      <div id='who' className="flex flex-row justify-around w-full p-8">
        <div className="w-1/2 text-center">
          <h1>Who</h1><br/>
          <h2>is Ken?</h2>
        </div>
        <div className="w-1/2 flex items-center">
          <p>
            Ken's a software engineer with 6+ years of experience. He has experience working with both small startups and large corporations. He has thrived as a solo full-stack engineer and has also successfully led teams of engineers. <br/><br/>
            Ken places a high value on <mark>company culture</mark>, particularly among individuals who are open to giving and receiving constructive criticism and who are dedicated to honing their craft. He prioritizes opportunities for learning and values thorough code reviews. On a company level, Ken seeks to be part of a mission-driven organization that fosters collaboration and motivates its team members.
          </p>
        </div>
      </div>

      <div id='what' className="flex flex-row justify-around w-full p-8">
        <div className="w-1/2 text-center">
          <h1>What</h1><br/>
          <h2>technologies does Ken use?</h2>
        </div>
        <div className="w-1/2 items-center">
          <p>
            Ken has built his entire career around <mark>JavaScript</mark>, TypeScript, and Node, with a strong focus on <mark>React and React Native</mark>. He's used NextJS, including this website, which can be found{' '}
            <a href='https://github.com/iamkennytso/portfolio' target='_blank' className="underline text-blue-400">here!</a><br/>
            He has extensive experience with various state management libraries, including Redux, Context API, React Query, MobX, and Jotai.<br/>
            For styling, he has worked with libraries like Material UI, PrismUI, and SCSS. Ken has utilized Storybook to enhance component libraries and has implemented testing with Jest and Cypress.<br/>
            He has also integrated RESTful APIs, GraphQL, and gRPC to interact with MySQL, PostgreSQL, and MongoDB databases. His full-stack experience on Google Cloud Platform (GCP) has exposed him to authentication, Cloud Functions, Remote Configs, A/B testing, and analytics.<br/>
            Additionally, he has worked on CI/CD pipelines using GitHub Actions and has set up dashboards on Mixpanel as well as internal tools on Retool.
          </p>
        </div>
      </div>

      <div id='where' className="flex flex-row justify-around w-full p-8">
        <div className="w-1/2 text-center">
          <h1>Where</h1><br/>
          <h2>is Ken, where has he worked?</h2>
        </div>
        <div className="w-1/2 flex items-center">
          <p>
            Ken is based in New York, <mark>New York</mark>. Due to family commitments, he is unable to consistently work in an office during standard business hours but remains available for company-wide meetings and after-hours activities.<br/><br/>
            He's worked at places such as Auxetic, the NBA, American Express, and Cigna.
          </p>
        </div>
      </div>

      <div id='when' className="flex flex-row justify-around w-full p-8">
        <div className="w-1/2 text-center">
          <h1>When</h1><br/>
          <h2>did Ken start coding?</h2>
        </div>
        <div className="w-1/2 flex items-center">
          Ken is a front-end focused software engineer, graduating from Hack Reactor's 10th New York Co-hort and whose experience now spans<br/>
          <div className="w-full flex justify-center m-4 ">
            <div className="text-center p-4 border-2 rounded border-gray-500 bg-gray-800"><code>{years} years<br/>{months} months<br/>{days} days</code><br/></div>
          </div>
        </div>
      </div>

      <div id='why' className="flex flex-row justify-around w-full p-8">
        <div className="w-1/2 text-center">
          <h1>Why</h1><br/>
          <h2>is Ken a software engineer?</h2>
        </div>
        <div className="w-1/2 flex items-center">
        He began his tech career as an eCommerce Specialist at Durante Rentals, a construction rental startup that leveraged technology as a key competitive advantage. His dedication and technical acumen quickly led to his promotion to CIS Manager, where he was responsible for overseeing all technology operations. The company’s president frequently sought to innovate within the industry, and Ken was tasked with leading these modernization initiatives. Throughout his three years at Durante Rentals, Ken often found himself evaluating various software solutions, though he frequently encountered limitations in existing offerings. This experience inspired him to pursue a career in software development, driven by a desire to create better solutions.<br/> <br/>
        Born into an immigrant family, Ken spent high school summers at the family restaurant, where he developed a strong work ethic and deep empathy for others. Ken also spent a few years as a bartender and bar manager, where he discovered his love for mentoring others and sharing his expertise.  When he's not coding, you’ll find him unleashing his competitive side in video games or perfecting his steak-cooking skills in the kitchen.
        </div>
      </div>
    </main>
  );
}
