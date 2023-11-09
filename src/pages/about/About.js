import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability, interest }) => {
  return (
    <section className="about">
      <PageHeader title="About me" description="" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} interests={interest} />
    </section>
  );
};

export default About;
