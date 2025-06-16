import dynamic from "next/dynamic";

const ExpertiseSection = dynamic(() => import("@components/ExpertiseSection"));
const ContributionActivity = dynamic(
  () => import("@components/ContributionActivity"),
  { ssr: false }
);
const LatestBlogs = dynamic(() => import("@components/LatestBlogs"));
const Projects = dynamic(() => import("@components/FeaturedProjects"));
const CommunicatorCard = dynamic(() => import("@components/CommunicatorCard"));
const CommunicatorCard2 = dynamic(() => import("@components/CommunicatorCard2"));
const ProfileCard = dynamic(() => import("@components/ProfileCard"));
const ContactCard = dynamic(() => import("@components/ContactCard"));
const LifelongLearnerCard = dynamic(
  () => import("@components/LifelongLearnerCard")
);

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-6 lg:col-span-2">
        <ProfileCard />
        <ExpertiseSection title="Industries & Skills" />
        <ContributionActivity />
        <Projects />
      </div>

      <div className="space-y-6 ">
        <CommunicatorCard />
        <CommunicatorCard2/>
        <LifelongLearnerCard />
        <ContactCard />
        <LatestBlogs />
      </div>
    </div>
  );
};
export default HomePage;
