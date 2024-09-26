import TechStack from "../Components/TechStack";
import aboutImg from "../assets/aboutImg.svg";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-200 py-32">
      <div className="container mx-auto lg:px-12 px-4">
        <div className="flex flex-col lg:flex-row">
          {/* About Content */}
          <div className="flex-1 lg:pr-8 mb-16 lg:mb-0">
            <section className="mb-6">
              <div className="bg-opacity-50 bg-black p-2 rounded-xl p-4">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-left text-custom-white text-shadow">
                  About Me
                </h1>
                <p className="text-base lg:text-lg text-left mb-6 text-custom-white rounded text-shadow">
                  I am a hardworking and dedicated frontend developer with a
                  strong passion for creating aesthetic and functional
                  client-side applications using{" "}
                  <span className="font-bold">React</span> and{" "}
                  <span className="font-bold">Next.js</span>.
                </p>
                <p className="text-base lg:text-lg text-left text-custom-white text-shadow">
                  My background involves contributing to open-source projects,
                  often contributing to the frontend development of the
                  application, as well as leading teams of developers under my
                  supervision.
                </p>
              </div>
            </section>

            <TechStack />
          </div>

          {/* About Image */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center justify-center h-full">
              <img
                src={aboutImg}
                alt="About"
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
