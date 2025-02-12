import { wonderlic1, wonderlic2, wonderlic3, wonderlic4 } from "../../consts/urls";

const imageToAltMap: Record<string, string> = {
  [wonderlic1]: 'Highly Spontaneous, Driven by Persuasive Work, Strong Problem-Solver', 
  [wonderlic2]: 'Highly Spontaneous, Highly Outgoing, Moderately Conventional, Moderately Candid, Moderately Composed', 
  [wonderlic3]: 'Driven by Persuasive Work, Interested in Hands-On Work, Interested in Service Work, Indifferent to Creative Work, Indifferent to Analytical Work, Uninterested in Clerical Work',
  [wonderlic4]: 'Strong Problem-Solver, Highly Independent, Indifferent to Leadership'
}

export default function CoverLetter() {
  return (
    <div className="flex flex-col m-16 justify-center align-center">
      <p>What is Wonderlic? According to their website, The Wonderlic Select hiring assessments provide comprehensive, job-specific insights into a candidate's fit for a role. Using Wonderlic's multi-measure assessment approach gives HR teams the most accurate prediction of whether their candidate can do the job, wants to do the job, and how they'll do it. This approach gives greater insights into performance and retention.</p>
      <br/>
      <p> I took this personality test as part of a job application. I was actually rejected from the job, so I'm not sure putting this out there actually helps me, but here it is for transparency sake.</p>
      {Object.keys(imageToAltMap).map(url => <img className="m-4" src={url} alt={imageToAltMap[url]} /> )}
    </div>
  );
}
