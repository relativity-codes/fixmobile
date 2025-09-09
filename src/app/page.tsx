import LandingIconOne from "@/assets/svgs/landing-icon-one.svg";
import LandingIconTwo from "@/assets/svgs/landing-icon-two.svg";
import LandingIconThree from "@/assets/svgs/landing-icon-three.svg";
import LandingIconFour from "@/assets/svgs/landing-icon-four.svg";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-start justify-start">
      <HeroSection />
      <TrustUsSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="w-full lg:h-[900px] flex flex-col items-center justify-center bg-[url('/landing-bg.jpg')] bg-cover relative">
      <div className="w-full h-full bg-linear-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.47)] max-xl:bg-[rgba(0,0,0,0.47)] flex flex-col items-center justify-center bg-cover bg-center top-0 left-0">
        <div className="container mx-auto px-4 py-20 relative z-10 flex flex-row items-center justify-between text-start">
          <div className="xl:w-1/2 w-full flex flex-col gap-6">
            <p className="text-3xl lg:text-4xl xl:text-5xl font-lexend font-semibold text-white leading-tight">
              {"Your Phone Stopped Working? We'll Have It Back in Your Hands Faster Than You Think"}
            </p>
            <p className="text-lg font-lexend font-light text-white">
              {"We turn tech emergencies into quick wins. Whether it's a cracked screen, dead battery, or water damage, our certified technicians fix it right — often within hours."}
            </p>
            <div className="flex flex-row gap-6 mt-4">
              <button className="bg-gradient-to-r from-[#003581] to-[#1D6C63] text-white px-6 py-3 rounded-full font-lexend font-medium flex flex-row gap-3">
                Book a Repair
              </button>
              <button className="border-white border border-solid px-6 py-3 rounded-full font-lexend font-medium text-white hover:text-gray-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 w-full max-xl:hidden" />
        </div>
      </div>
    </div>
  );
}

const TrustUsSection = () => {
  const features = [
    {
      icon: <LandingIconOne />,
      title: "Most Repairs Completed in Hours, Not Days",
      description: "We fix your phone fast without sacrificing quality. Most repairs, from cracked screens to battery replacements, are completed within 2 to 4 hours. In many cases you will have your device back the same day with no delays or surprises, just reliable service you can trust.",
    },
    {
      icon: <LandingIconTwo />,
      title: "Certified Technicians You Can Count On",
      description: "Our team is certified, trained, and passionate about mobile repair. Every technician has the skills and qualifications to handle everything from the latest iPhone to complex Android issues. With us, you are getting a specialist who treats every repair with care and precision.",
    },
    {
      icon: <LandingIconThree />,
      title: "No Hidden Fees, Ever",
      description: "We believe in clear and honest pricing. Before any repair begins, you receive a detailed quote that covers labor, parts, and any additional costs. What we quote is exactly what you pay, with no hidden fees or pressure to upgrade—just transparency you can trust.",
    },
    {
      icon: <LandingIconFour />,
      title: "90 Day Repair Guarantee, We Stand By Our Work",
      description: "We believe in clear and honest pricing. Before any repair begins, you receive a detailed quote that covers labor, parts, and any additional costs. What we quote is exactly what you pay, with no hidden fees or pressure to upgrade—just transparency you can trust.",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl flex lg:text-4xl mx-auto font-lexend font-semibold text-[#EDF0FF] mb-8 text-center">
          {"Why Trust Us With Your Device?"}
        </h2>
        <div className="absolute w-[639px] h-[639px] bg-[rgba(49,119,255,0.2)] blur-[225px]" />
        <p className="text-lg flex font-lexend font-light w-full text-[#EDF0FF] mb-12 text-center max-w-5xl mx-auto">
          {"Your phone isn’t just a gadget, it’s your connection to work, family, and life. When it breaks, you need a repair partner you can truly rely on."}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-[#003581] to-[#1D6C63] text-white w-full p-[2px] rounded-lg flex flex-col items-start gap-4">
              <div className="bg-[#001946] w-full p-4 px-6 rounded-lg flex flex-col items-start gap-4">
                <div className="flex flex-row lg:h-12 items-center justify-start gap-4 rounded-full">
                  <div className="flex w-12 h-12 my-auto">{feature.icon}</div>
                  <h3 className="text-2xl flex py-6 font-lexend font-semibold text-white my-auto">
                    {feature.title}
                  </h3>
                </div>
                <p className="flex text-base font-lexend font-light text-white py-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}