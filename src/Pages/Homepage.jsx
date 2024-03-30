import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import Program from "../components/Programs/Program";
import Campus from "../components/Campus/Campus";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Hero
        heading="We Ensure better education for a better world"
        text="Our cutting-edge curriculum id designed to empower students with the
          knowledge, skills and experiences needed to excel in the dynamic field
          of education"
      />
      <div className="container">
        <Title title="What we offer" subTitle="OUR PROGRAMS" />
        <Program />
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="What students says" subTitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in Touch" subTitle="Contact us" />
        <Contact />
        <Footer />
      </div>
      {/* <Videolayer playState={playState} setPlayState={setPlayState} /> */}
    </>
  );
};

export default Homepage;
