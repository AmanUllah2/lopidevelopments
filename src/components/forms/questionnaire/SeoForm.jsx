import React from "react";

const SeoForm = () => {
  return (
    <fieldset className="space-y-6">
      <h3 className="text-xl font-semibold text-black">Seo:</h3>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="BusinessScope"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Geographically, what is the scope of your business?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="BusinessScope"
          id="BusinessScope"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="TargetKeywords"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you have an idea of any potential keywords you’d like to target?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="TargetKeywords"
          id="TargetKeywords"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="AudienceWebsites"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you know of any websites or publications frequently read by your
          target audience?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="AudienceWebsites"
          id="AudienceWebsites"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="GooglePenalty"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          To your knowledge, has your website ever been penalised by Google? And
          have you worked with an SEO agency or freelance before?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="GooglePenalty"
          id="GooglePenalty"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DesignerOrDeveloper"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you already work with a designer or developer?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DesignerOrDeveloper"
          id="DesignerOrDeveloper"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="PreferredTone"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Do you have a preferred tone or writing style when it comes to
          content?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="PreferredTone"
          id="PreferredTone"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="SeoObjectives"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What are your primary objectives and KPIs when it comes to SEO?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="SeoObjectives"
          id="SeoObjectives"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="SeoReports"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What kind of reports would you like to see from us and how often?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="SeoReports"
          id="SeoReports"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>
    </fieldset>
  );
};

export default SeoForm;
