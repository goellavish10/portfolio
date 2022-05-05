import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Lavish Goyal",
          description: "A passionate Full Stack Web Developer",
          image:
            "https://drive.google.com/file/d/1bIoY1KCOCK30LDGc4Df_NWelvV4zezpp/view?usp=sharing",
          url: "https://lavishgoyal.vercel.app/",
          keywords: [
            "lavish",
            "Lavish Goyal",
            "@goellavish10",
            "goellavsih10",
            "Portfolio",
            "Lavish Portfolio ",
            "Lavish Goyal Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "android developer",
            "nodejs",
            "ejs",
            "react nextjs",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "skillypandaz",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
