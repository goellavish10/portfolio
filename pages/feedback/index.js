import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../../components/Navigation"));
const FeedbackForm = dynamic(() => import("../../containers/FeedbackForm"));
import SEO from "../../components/SEO";

export default function FeedBack({ githubProfileData }) {
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
      <FeedbackForm />
    </div>
  );
}
