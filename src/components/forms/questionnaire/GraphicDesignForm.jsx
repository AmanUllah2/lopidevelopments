import React from "react";

const GraphicDesignForm = () => {
  return (
    <fieldset className="space-y-6">
      <h3 className="text-xl font-semibold text-black">Graphic Design:</h3>
      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="MissionStatement"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What is your company’s mission statement? What’s your vision? What’s
          your brand message?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="MissionStatement"
          id="MissionStatement"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="BrandWords"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What are some words you can use to describe your brand?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="BrandWords"
          id="BrandWords"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="CustomerPerception"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          How do your customers currently perceive your organization?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="CustomerPerception"
          id="CustomerPerception"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DesiredPerception"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          How do you want your audience to perceive your business? What are 3
          things you want them to think or feel when engaging with your brand?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DesiredPerception"
          id="DesiredPerception"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="LikeCurrentBranding"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What do you like about your current branding?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="LikeCurrentBranding"
          id="LikeCurrentBranding"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DislikeCurrentBranding"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What do you dislike about your current branding?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DislikeCurrentBranding"
          id="DislikeCurrentBranding"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DesignGuidelines"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          To ensure brand consistency, do you have any design and style
          guidelines or assets you’d like to share? (font, logos, colour codes,
          or other design elements)
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DesignGuidelines"
          id="DesignGuidelines"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="ColorPalette"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          If you don’t intend to use existing brand colours, do you have a
          colour palette in mind? Are there any colours you dislike?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="ColorPalette"
          id="ColorPalette"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="CompetitorBranding"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What do you like or dislike about your competitor’s branding? Please
          provide an example URL and point out what you like and don’t like.
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="CompetitorBranding"
          id="CompetitorBranding"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="InspirationLinks"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Please provide a few links or samples for inspiration/creative
          direction.
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="InspirationLinks"
          id="InspirationLinks"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DesignDeliverables"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Please state what design deliverables you need for the project: (list
          provided)
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DesignDeliverables"
          id="DesignDeliverables"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="DeliverableUsage"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Where do you intend to use the final project deliverable? (print,
          online, other)
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="DeliverableUsage"
          id="DeliverableUsage"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>
    </fieldset>
  );
};

export default GraphicDesignForm;
