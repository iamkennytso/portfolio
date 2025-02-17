import Image from "next/image";
import { wonderlicUrl, wonderlic1, wonderlic2, wonderlic3, wonderlic4 } from "../../consts/urls";

interface WonderlicObject {
  url: string,
  alt: string,
  width: number,
  height: number
}

const wonderlicImages: WonderlicObject[] = [
  {
    url: wonderlic1,
    alt: "Highly Spontaneous, Driven by Persuasive Work, Strong Problem-Solver",
    width: 1446,
    height: 1194
  },
  {
    url: wonderlic2,
    alt: "Highly Spontaneous, Highly Outgoing, Moderately Conventional, Moderately Candid, Moderately Composed",
    width: 1418,
    height: 2272
  },
  {
    url: wonderlic3,
    alt: "Driven by Persuasive Work, Interested in Hands-On Work, Interested in Service Work, Indifferent to Creative Work, Indifferent to Analytical Work, Uninterested in Clerical Work",
    width: 1411,
    height: 2072
  },
  {
    url: wonderlic4,
    alt: "Strong Problem-Solver, Highly Independent, Indifferent to Leadership",
    width: 1446,
    height: 1106
  },
]

export default function CoverLetter() {
  return (
    <div className="flex flex-col m-4 md:m-16 justify-center items-center">
      <p>What is Wonderlic? According to their <a className="underline" href={wonderlicUrl}>website</a>, &quot;The Wonderlic Select hiring assessments provide comprehensive, job-specific insights into a candidate&apos;s fit for a role. Using Wonderlic&apos;s multi-measure assessment approach gives HR teams the most accurate prediction of whether their candidate can do the job, wants to do the job, and how they&apos;ll do it. This approach gives greater insights into performance and retention.&quot;</p>
      <br/>
      <p> I took this personality test as part of a job application. I was actually rejected from the job, so I&apos;m not sure putting this out there actually helps me, but here it is for transparency sake.</p>
      {wonderlicImages.map(({url, alt, width, height}) => <Image key={url} width={width} height={height} className="m-4" src={url} alt={alt} /> )}
    </div>
  );
}
