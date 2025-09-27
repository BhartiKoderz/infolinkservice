import JobFairCarousel from "../sections/JobFairSection/JobFairCarousal";
import JobFairBanner from "../sections/JobFairSection/JobFairBanner";
import BenefitsSection from "../sections/JobFairSection/BenefitsSection";
import agnihotri from "../assests/job-fair-images/agnihotri-img.png";
import wainganga from "../assests/job-fair-images/wainganga-img.png";
import kits from "../assests/job-fair-images/kits-img.png";
import kdk from "../assests/job-fair-images/kdk-img.png";

function Jobfairpage() {
  const jobFairs = [
    {
      title: "Campus Drive at Agnihotri College of Engineering",
      image: agnihotri,
    },
    {
      title: "Campus Drive at Wainganga College of Engineering",
      image: wainganga,
    },
    {
      title: "Campus Drive at KDK College of Engineering",
      image: kdk,
    },
    {
      title: "Job Fair conducted at KITS College of Engineering",
      image: kits,
    },
  ];
  return (
    <div className="bg-gray-50">
      <JobFairBanner />
      <JobFairCarousel title="test" jobFairs={jobFairs} />
      <JobFairCarousel title="test" jobFairs={jobFairs} />
      <JobFairCarousel title="test" jobFairs={jobFairs} />
      <BenefitsSection />
    </div>
  );
}

export default Jobfairpage;
