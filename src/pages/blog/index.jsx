import LocomotiveScroll from "locomotive-scroll";
import MouseFollower from "mouse-follower";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import NewProjectForm from "../../forms/NewProjectForm";
import wave from "../../assets/images/wave.jpg";
import gsap from "gsap";
import Footer from "../../components/Footer";

const blogPosts = [
  {
    title:
      "Gethsemane Technologies Recognized by DesignRush for Excellence in Web Design",
    slug: "gethsemane-technologies-recognized-by-designrush-for-excellence-in-web-design",
    description:
      "We’re thrilled to announce that Gethsemane Technologies has been featured on DesignRush, showcasing our expertise in cutting-edge web design.",
    image:
      "https://res.cloudinary.com/gethsemane-tech/image/upload/v1742559267/d3dhbmmrg32htzycvqqp.png",
  },
];

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();

const BlogsPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Our Recent Blog Posts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white lg:max-w-[400px] lg:w-[400px] lg:max-h-[500px] h-[500px] w-full shadow-md rounded-lg overflow-hidden"
            >
              <div className="w-full h-[40%] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="-top-10 bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 py-10"></div>
      <div className="-top-20 bg-[#FFF] rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden pt-20 p-7 lg:px-14 pb-10 lg:pb-24">
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

export default BlogsPage;
