import React, { useEffect, useRef } from "react";
import NewProjectForm from "../../../forms/NewProjectForm";
import Footer from "../../../components/Footer";
import wave from "../../../assets/images/wave.jpg";
import MouseFollower from "mouse-follower";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();

const DesignRushBlogPost = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Additional options can be added here
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      className="bg-[#FFF] scroll-container"
      data-scroll-container
      ref={scrollRef}
    >
      <NavBar />
      <div className="mt-28 lg:mt-28 p-7 lg:px-14 pb-10 lg:pb-24">
        <div className="w-full h-[350px] rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/gethsemane-tech/image/upload/v1742559267/d3dhbmmrg32htzycvqqp.png"
            alt="Gethsemane Technologies featured on DesignRush for Best Professional Web Designs 2025"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-12">
          Gethsemane Technologies Recognized by DesignRush for Excellence in Web
          Design
        </h1>

        <p className="text-gray-700 mb-4">
          We are honored to be featured alongside other industry leaders. You
          can explore DesignRush’s curated list of best designs in various
          categories by visiting:
          <br />
          <Link
            to="https://www.designrush.com/best-designs/websites/agriculture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Best Designs on DesignRush
          </Link>
        </p>

        <p className="text-gray-700 mb-4">
          We’re thrilled that Gethsemane Technologies has been featured on{" "}
          <Link
            to="https://www.designrush.com/best-designs/websites/agriculture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            DesignRush
          </Link>
          , a leading platform that curates and ranks the best agencies in web
          design, branding, and digital marketing. This recognition is a
          testament to our unwavering commitment to delivering top-notch digital
          solutions tailored to our clients' needs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          About DesignRush
        </h2>
        <p className="text-gray-700 mb-4">
          DesignRush is a trusted online resource for businesses seeking the
          best professional agencies to collaborate with. Their platform ranks
          agencies based on expertise, industry reputation, and innovative
          design practices, helping businesses connect with the right service
          providers. Being recognized by DesignRush is a significant
          achievement, as it validates the quality and impact of our work.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why This Feature Matters
        </h2>
        <p className="text-gray-700 mb-4">
          At Gethsemane Technologies, we take pride in building digital products
          that enhance user experience, optimize functionality, and drive
          growth. Our team of skilled developers and designers ensures that
          every project we undertake is aligned with modern design principles
          and business objectives. This feature by DesignRush highlights our
          ability to create high-quality, user-friendly web applications that
          stand out in the industry.
        </p>

        <p className="text-gray-700">
          We extend our gratitude to our clients and partners for trusting us
          with their projects. This recognition fuels our motivation to continue
          pushing the boundaries of design and development. Stay tuned for more
          exciting updates from Gethsemane Technologies!
        </p>
      </div>

      <div className="bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
        <div className="flex flex-col">
          <h2 className="lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
            <span className="text-gethsemaneRed lg:text-[3rem] text-3xl italic font-light">
              Hey!{" "}
            </span>
            Tell us about <br />
            your project{" "}
            <img
              src={wave}
              alt="Hey! Tell us about your project"
              className="inline-block lg:w-12 w-6"
            />
          </h2>
        </div>

        <NewProjectForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DesignRushBlogPost;
