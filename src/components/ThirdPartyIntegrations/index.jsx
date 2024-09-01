import React from "react";

// Images
import vercel from "../../assets/images/hosting/vercel.png";
import aws from "../../assets/images/hosting/aws.png";
import digitalOcean from "../../assets/images/hosting/digitalocean.png";
import netlify from "../../assets/images/hosting/netlify.png";
import sendgrid from "../../assets/images/integrations/sendgrid.png";
import twilio from "../../assets/images/integrations/twilio.png";
import analytics from "../../assets/images/integrations/analytics.png";
import stripe from "../../assets/images/integrations/stripe.png";
import paypal from "../../assets/images/integrations/paypal.png";
import novu from "../../assets/images/integrations/novu.avif";
import flutterwave from "../../assets/images/integrations/flutterwave.png";
import paystack from "../../assets/images/integrations/paystack.svg";
import { Fade } from "react-awesome-reveal";

function ThirdPartyIntegrations(props) {
  return (
    <div
      className={`min-h-screen ${
        props?.darkBg ? "text-white" : "text-gethsemaneBlack"
      }  lg:min-h-[800px] relative flex gap-x-24 flex-col items-center justify-center rounded-tr-[30px] rounded-tl-[30px] w-full`}
    >
      <div className="flex w-full flex-col gap-y-3">
        <div className="flex flex-col">
          <Fade duration={700}>
            <h2 className="lg:max-w-[70%] w-full lg:text-[3rem] text-4xl lg:leading-[70px] leading-[50px]">
              We use{" "}
              <span className="text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px] italic">
                the best hosting{" "}
              </span>
              and third party integrations
            </h2>
          </Fade>
        </div>

        <div className="gap-7 flex-col mt-5 pb-10">
          <h3 className="text-2xl">
            The fastest and most reliable hosting platforms
          </h3>

          {/* Hosting platforms */}
          <div className="flex lg:flex-row flex-col lg:justify-between gap-7 mt-7">
            <div className="flex flex-col flex-wrap lg:flex-row items-center gap-5">
              <div className="flex lg:flex-row flex-col lg:items-center gap-7">
                {/* Vercel */}
                <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#1A1A1A] flex flex-col justify-center gap-y-10">
                  <div className="w-[120px]">
                    <img
                      src={vercel}
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>

                  <p className="text-lg text-white">
                    Our go-to option providing best flexibility for a reasonable
                    price
                  </p>
                </div>

                {/* Netlify */}
                <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#42D7D7] flex flex-col justify-center gap-y-10">
                  <div className="w-[120px]">
                    <img
                      src={netlify}
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>

                  <p className="text-lg text-gethsemaneBlack">
                    For developers who prioritize streamlined deployment
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-auto flex lg:flex-row flex-col items-center gap-7">
                {/* AWS */}
                <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#F7C797] flex flex-col justify-center gap-y-10">
                  <div className="w-[80px]">
                    <img src={aws} alt="" className="w-full object-contain" />
                  </div>

                  <p className="text-lg text-gethsemaneBlack">
                    For enterprises seeking extensive scalability
                  </p>
                </div>

                {/* DigitalOcean */}
                <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#2c2c2c] flex flex-col justify-center gap-y-10">
                  <div className="w-[90px]">
                    <img
                      src={digitalOcean}
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>

                  <p className="text-lg text-white">
                    For building with blazing fast GPUs
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-auto  flex lg:flex-row flex-col items-center gap-7">
                {/* Others */}
                <div className="p-7 min-h-[250px] h-[250px] w-full md:w-[250px] md:min-w-[250px] rounded-lg bg-[#F9F9F9] flex flex-col justify-center gap-y-10">
                  <div className="w-[80px]">
                    <h1 className="text-2xl font-bold text-gethsemaneBlack">
                      OR
                    </h1>
                  </div>

                  <p className="text-lg text-gethsemaneBlack">
                    any other hosting platform of your choice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-7 flex-col mt-5 pb-10">
          <h3 className="text-2xl">The best third party integrations</h3>

          {/* Third party integrations */}
          <div className="flex lg:flex-row flex-col lg:justify-between gap-7 mt-7">
            <div className="flex flex-col flex-wrap lg:flex-row items-center gap-7">
              {/* analytics */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[80px]">
                  <img
                    src={analytics}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              </div>
              {/* sendgrid */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[120px]">
                  <img
                    src={sendgrid}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              </div>
              {/* novu */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[100px]">
                  <img src={novu} alt="" className="w-full object-contain" />
                </div>
              </div>
              {/* twilio */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[120px]">
                  <img src={twilio} alt="" className="w-full object-contain" />
                </div>
              </div>
              {/* stripe */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[95px]">
                  <img src={stripe} alt="" className="w-full object-contain" />
                </div>
              </div>
              {/* paypal */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[120px]">
                  <img src={paypal} alt="" className="w-full object-contain" />
                </div>
              </div>

              {/* paystack */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[140px]">
                  <img
                    src={paystack}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              </div>
              {/* flutterwave */}
              <div className="p-7 min-h-[180px] h-[180px] w-full md:w-[260px] md:min-w-[260px] rounded-lg bg-gradient-to-tr from-[#F9F9F9] to-[#FCFCFC] flex flex-col items-center justify-center gap-y-10">
                <div className="w-[160px]">
                  <img
                    src={flutterwave}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPartyIntegrations;
