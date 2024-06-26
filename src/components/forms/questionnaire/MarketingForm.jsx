import React from "react";

const MarketingForm = () => {
  return (
    <fieldset className="space-y-6">
      <h3 className="text-xl font-semibold text-black">Marketing:</h3>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="PrimaryGoals"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What are your primary goals for running ads on Meta/Google?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="PrimaryGoals"
          id="PrimaryGoals"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="AdObjectives"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Are you looking to increase brand awareness, drive website traffic,
          generate leads, or boost sales?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="AdObjectives"
          id="AdObjectives"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="PreviousAdsExperience"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Have you run ads on Meta/Google before? If so, what has been your
          experience?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="PreviousAdsExperience"
          id="PreviousAdsExperience"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="AdPerformanceData"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Can you share any insights or performance data from your previous ad
          campaigns?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="AdPerformanceData"
          id="AdPerformanceData"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="ResourcesNeeded"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Are there any specific resources (e.g., images, videos, copy) that you
          already have or need help creating?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="ResourcesNeeded"
          id="ResourcesNeeded"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="AdDuration"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          How long do you plan to run these ads?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="AdDuration"
          id="AdDuration"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="MeasureSuccess"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          How will you measure the success of these ad campaigns?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="MeasureSuccess"
          id="MeasureSuccess"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="KPIs"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Are there any specific key performance indicators (KPIs) you are
          focusing on, such as click-through rates (CTR), conversion rates, or
          return on ad spend (ROAS)?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="KPIs"
          id="KPIs"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="GeographicTarget"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Are there any particular geographic locations you want to target or
          avoid?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="GeographicTarget"
          id="GeographicTarget"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="SeasonalTrends"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Are there any seasonal trends or events that we should consider when
          planning your ad campaigns?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="SeasonalTrends"
          id="SeasonalTrends"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="AdsConcerns"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you have any specific questions or concerns about Meta/Google ads
          that we can address?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="AdsConcerns"
          id="AdsConcerns"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>
    </fieldset>
  );
};

export default MarketingForm;
