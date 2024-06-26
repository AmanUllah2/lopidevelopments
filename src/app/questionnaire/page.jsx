"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import Container from "@/components/ui/Container";
import Image from "next/image";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import MetaData from "@/components/seo/MetaData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import WebsiteDevelopmentForm from "@/components/forms/questionnaire/WebsiteDevelopmentForm";
import GraphicDesignForm from "@/components/forms/questionnaire/GraphicDesignForm";
import SeoForm from "@/components/forms/questionnaire/SeoForm";
import MediaProductionsForm from "@/components/forms/questionnaire/MediaProductionsForm";
import MarketingForm from "@/components/forms/questionnaire/MarketingForm";

const tabs = [
  {
    name: "Web Design & Development",
    image: "/assets/images/questionare-icon-1.svg",
    content: <WebsiteDevelopmentForm />,
  },
  {
    name: "Graphic Design",
    image: "/assets/images/questionare-icon-2.svg",
    content: <GraphicDesignForm />,
  },
  {
    name: "SEO",
    image: "/assets/images/questionare-icon-3.svg",
    content: <SeoForm />,
  },
  {
    name: "Media Productions",
    image: "/assets/images/questionare-icon-4.svg",
    content: <MediaProductionsForm />,
  },
  {
    name: "Marketing",
    image: "/assets/images/questionare-icon-5.svg",
    content: <MarketingForm />,
  },
];

const QuestionarePage = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  const handleTabClick = (tabName) => {
    setActiveTabs((prevActiveTabs) =>
      prevActiveTabs.includes(tabName)
        ? prevActiveTabs.filter((name) => name !== tabName)
        : [...prevActiveTabs, tabName]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const getValue = (id) => {
      const element = document.getElementById(id);
      return element ? element.value : "";
    };

    const templateParams = {
      fullName: getValue("fullName"),
      email: getValue("email"),
      phoneNumber: getValue("phoneNumber"),
      roleInOrganization: getValue("roleInOrganization"),
      companyName: getValue("companyName"),
      projectName: getValue("projectName"),
      SummarizeWhatYourCompany: getValue("SummarizeWhatYourCompany"),
      TargetAudience: getValue("TargetAudience"),
      BusinessMainAppeal: getValue("BusinessMainAppeal"),
      MainCompetitors: getValue("MainCompetitors"),
      ProjectBudget: getValue("ProjectBudget"),
      NewWebsiteOrRedesign: getValue("NewWebsiteOrRedesign"),
      WebsiteFeatures: getValue("WebsiteFeatures"),
      FavoriteWebsites: getValue("FavoriteWebsites"),
      ContentProvider: getValue("ContentProvider"),
      EstablishedBranding: getValue("EstablishedBranding"),
      Keywords: getValue("Keywords"),
      OngoingSupport: getValue("OngoingSupport"),
      Hosting: getValue("Hosting"),
      MissionStatement: getValue("MissionStatement"),
      BrandWords: getValue("BrandWords"),
      CustomerPerception: getValue("CustomerPerception"),
      DesiredPerception: getValue("DesiredPerception"),
      LikeCurrentBranding: getValue("LikeCurrentBranding"),
      DislikeCurrentBranding: getValue("DislikeCurrentBranding"),
      DesignGuidelines: getValue("DesignGuidelines"),
      ColorPalette: getValue("ColorPalette"),
      CompetitorBranding: getValue("CompetitorBranding"),
      InspirationLinks: getValue("InspirationLinks"),
      DesignDeliverables: getValue("DesignDeliverables"),
      DeliverableUsage: getValue("DeliverableUsage"),
      BusinessScope: getValue("BusinessScope"),
      TargetKeywords: getValue("TargetKeywords"),
      AudienceWebsites: getValue("AudienceWebsites"),
      GooglePenalty: getValue("GooglePenalty"),
      DesignerOrDeveloper: getValue("DesignerOrDeveloper"),
      PreferredTone: getValue("PreferredTone"),
      SeoObjectives: getValue("SeoObjectives"),
      SeoReports: getValue("SeoReports"),
      ServiceType: getValue("ServiceType"),
      PrimaryLocation: getValue("PrimaryLocation"),
      PrimaryGoals: getValue("PrimaryGoals"),
      AdObjectives: getValue("AdObjectives"),
      PreviousAdsExperience: getValue("PreviousAdsExperience"),
      AdPerformanceData: getValue("AdPerformanceData"),
      ResourcesNeeded: getValue("ResourcesNeeded"),
      AdDuration: getValue("AdDuration"),
      MeasureSuccess: getValue("MeasureSuccess"),
      KPIs: getValue("KPIs"),
      GeographicTarget: getValue("GeographicTarget"),
      SeasonalTrends: getValue("SeasonalTrends"),
      AdsConcerns: getValue("AdsConcerns"),
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJSTWO_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email: " + result.text);
        console.error("Failed to send email", result.text);
      }
    } catch (error) {
      toast.error("Failed to send email: " + error.message);
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <MetaData
        title="Questionnaire | Aurora Insights"
        description="We're always eager to connect with individuals who love bringing ideas to life and we can’t wait to hear all about your new ideas!"
      />
      <ToastContainer />
      <ScreenLoader />
      <section className="bg-[#f8f8f8] text-black py-16 md:py-16 overflow-hidden">
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-[65.9375rem]">
              <div className="text-center mb-10">
                <span className="block relative h-32 w-32 mx-auto mb-6">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/logo-light.svg"
                    alt="logo"
                  />
                </span>

                <h3 className="mb-5 text-3xl md:text-4xl font-clash-display font-medium text-black">
                  Have a project in mind?
                </h3>
                <p>
                  We're always eager to connect with individuals who love
                  bringing ideas to life and we can’t wait to hear all about
                  your new ideas!
                </p>
                <p>
                  To help us get a feel of what you have in mind, please fill
                  out this questionnaire in as much detail as you can. We
                  recommend grabbing a coffee, this may take some time.
                </p>
              </div>
              <fieldset className="mb-10">
                {/* <h3 className="mb-5 text-3xl md:text-4xl font-clash-display font-medium text-black">
                  Select a service
                </h3> */}
                <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {tabs.map((tab) => (
                    <li key={tab.name}>
                      <button
                        type="button"
                        className={`h-full w-full text-center p-3 rounded-lg border transition-all duration-500 active:scale-105 relative ${
                          activeTabs.includes(tab.name)
                            ? "bg-[#EEFBF5] border-[#138867]"
                            : "bg-white border-black/20 hover:border-[#138867] hover:bg-[#EEFBF5]"
                        }`}
                        onClick={() => handleTabClick(tab.name)}
                      >
                        {activeTabs.includes(tab.name) ? (
                          <CheckCircleIcon className="absolute top-0 right-0 m-3 h-6 w-6 text-[#22B387]" />
                        ) : (
                          <span className="absolute top-0 right-0 flex h-5 w-5 m-3 rounded-full ring-1 ring-black/30"></span>
                        )}
                        <Image
                          className="mx-auto object-contain"
                          width={120}
                          height={120}
                          src={tab.image}
                          alt={tab.name}
                        />
                        <h6 className="mt-4 font-medium text-black">
                          {tab.name}
                        </h6>
                      </button>
                    </li>
                  ))}
                </ul>
              </fieldset>
              <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="fullName"
                  >
                    Full name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter your name..."
                  />
                </div>

                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter your email..."
                  />
                </div>

                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="phoneNumber"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter your contact number..."
                  />
                </div>

                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="roleInOrganization"
                  >
                    Role in Organization
                  </label>
                  <input
                    type="text"
                    name="roleInOrganization"
                    id="roleInOrganization"
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter your position or title..."
                  />
                </div>

                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="companyName"
                  >
                    Company/Organization Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter the name of your company or organization..."
                  />
                </div>

                <div className="col form-group">
                  <label
                    className="mb-2 block font-medium text-black"
                    htmlFor="projectName"
                  >
                    Project Name (if any)
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    className="p-3 rounded-lg w-full border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                    placeholder="Enter the project name..."
                  />
                </div>
              </fieldset>
              <fieldset className="space-y-8">
                <div className="form-group bg-white rounded-lg p-3">
                  <label
                    htmlFor="SummarizeWhatYourCompany"
                    className="mb-3 block md:text-lg font-medium text-black"
                  >
                    Summarize what your company does in one or two sentences.
                    What products or services do you offer?
                  </label>
                  <textarea
                    className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
                    name="SummarizeWhatYourCompany"
                    id="SummarizeWhatYourCompany"
                    placeholder="Your Answer"
                    rows={1}
                  ></textarea>
                </div>

                <div className="form-group bg-white rounded-lg p-3">
                  <label
                    htmlFor="TargetAudience"
                    className="mb-3 block md:text-lg font-medium text-black"
                  >
                    Who is your target audience? (List demographics: age,
                    gender, location, lifestyle, income, etc.)
                  </label>
                  <textarea
                    className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
                    name="TargetAudience"
                    id="TargetAudience"
                    placeholder="Your Answer"
                    rows={1}
                  ></textarea>
                </div>

                <div className="form-group bg-white rounded-lg p-3">
                  <label
                    htmlFor="BusinessMainAppeal"
                    className="mb-3 block md:text-lg font-medium text-black"
                  >
                    What sets your business apart? What is your main appeal?
                  </label>
                  <textarea
                    className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
                    name="BusinessMainAppeal"
                    id="BusinessMainAppeal"
                    placeholder="Your Answer"
                    rows={1}
                  ></textarea>
                </div>

                <div className="form-group bg-white rounded-lg p-3">
                  <label
                    htmlFor="MainCompetitors"
                    className="mb-3 block md:text-lg font-medium text-black"
                  >
                    Who are your main competitors, and how do you differentiate
                    yourself from them?
                  </label>
                  <textarea
                    className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
                    name="MainCompetitors"
                    id="MainCompetitors"
                    placeholder="Your Answer"
                    rows={1}
                  ></textarea>
                </div>

                <div className="form-group bg-white rounded-lg p-3">
                  <label
                    htmlFor="ProjectBudget"
                    className="mb-3 block md:text-lg font-medium text-black"
                  >
                    What is your budget for this project?
                  </label>
                  <input
                    className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
                    type="text"
                    name="ProjectBudget"
                    id="ProjectBudget"
                    placeholder="Your Answer"
                  />
                </div>
              </fieldset>
              <fieldset className="tab-p space-y-8">
                {tabs.map(
                  (tab) =>
                    activeTabs.includes(tab.name) && (
                      <div className="mt-10" key={tab.name}>
                        {tab.content}
                      </div>
                    )
                )}
              </fieldset>
              <button type="submit" className="btn-primary-1 w-full mt-10">
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default QuestionarePage;
