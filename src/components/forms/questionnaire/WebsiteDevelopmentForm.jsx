import React from "react";

const WebsiteDevelopmentForm = () => {
  return (
    <fieldset className="space-y-6">
      <h3 className="text-xl font-semibold text-black">
        Web Design & Development:
      </h3>
      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="NewWebsiteOrRedesign"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do You Want a New Website or Redesign an Existing One?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="NewWebsiteOrRedesign"
          id="NewWebsiteOrRedesign"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="WebsiteFeatures"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What Features Does Your Website Need to Be Successful?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="WebsiteFeatures"
          id="WebsiteFeatures"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="FavoriteWebsites"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What Are Three of Your Favorite Websites (And Why)?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="FavoriteWebsites"
          id="FavoriteWebsites"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="ContentProvider"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Who will provide content for the new website?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="ContentProvider"
          id="ContentProvider"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="EstablishedBranding"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Does your company have established branding?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="EstablishedBranding"
          id="EstablishedBranding"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="Keywords"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What keywords will your audience use to find your website?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="Keywords"
          id="Keywords"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="OngoingSupport"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Would You Like Us to Provide Ongoing Support and Maintenance?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="OngoingSupport"
          id="OngoingSupport"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="Hosting"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you need hosting?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="Hosting"
          id="Hosting"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>
    </fieldset>
  );
};

export default WebsiteDevelopmentForm;
