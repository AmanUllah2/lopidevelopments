import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import SocialMediaForm from "../forms/SocialMediaForm";
import FriendsColleagueForm from "../forms/FriendsColleagueForm";
import WebsiteForm from "../forms/WebsiteForm";
import SearchForm from "../forms/SearchForm";

const SurveyModal = ({ show, onClose }) => {
  const cancelButtonRef = useRef(null);

  const tabs = [
    {
      name: "Social Media",
      image: "/assets/images/s-tab-icon-1.png",
      content: <SocialMediaForm onClose={onClose} />,
    },
    {
      name: "Friends & Colleague",
      image: "/assets/images/s-tab-icon-2.png",
      content: <FriendsColleagueForm onClose={onClose} />,
    },
    {
      name: "Website",
      image: "/assets/images/s-tab-icon-3.png",
      content: <WebsiteForm onClose={onClose} />,
    },
    {
      name: "Search",
      image: "/assets/images/s-tab-icon-4.png",
      content: <SearchForm onClose={onClose} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[55.5rem] sm:p-6">
                <span className="absolute top-0 right-0 m-5">
                  <button
                    onClick={() => onClose(false)}
                    type="button"
                    className="transition-all duration-500 hover:opacity-80 active:scale-105"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/x-close.png"
                      alt="..."
                    />
                  </button>
                </span>

                <div className="max-w-[39.75rem] mx-auto">
                  <Image
                    height={60}
                    width={60}
                    className="mx-auto"
                    src="/assets/images/survey-icon.png"
                    alt="..."
                  />
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl md:text-4xl font-clash-display font-medium text-black"
                    >
                      We’re really glad you’re here
                    </Dialog.Title>
                    <div className="mt-3">
                      <p className="text-base text-black/70">
                        We're so happy you've found something you like and want
                        to hear more from us.Please let us know how you heard of
                        us, it’ll take less than a minute, we promise!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-11 md:mt-14">
                  <h4 className="mb-6 text-center text-2xl font-clash-display font-medium text-black">
                    You heard about us through ....
                  </h4>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tabs.map((tab) => (
                      <li key={tab.name}>
                        <button
                          type="button"
                          className={`w-full text-center p-3 rounded-lg border transition-all duration-500 active:scale-105 ${
                            activeTab === tab.name
                              ? "bg-[#EEFBF5] border-[#138867]"
                              : "bg-white border-black/20 hover:border-[#138867] hover:bg-[#EEFBF5]"
                          }`}
                          onClick={() => handleTabClick(tab.name)}
                        >
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
                  <div className="tab-p mt-6">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.name && (
                          <div key={tab.name}>{tab.content}</div>
                        )
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SurveyModal;
