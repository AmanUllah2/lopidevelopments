import React from "react";

const MediaProductionsForm = () => {
  return (
    <fieldset className="space-y-6">
      <h3 className="text-xl font-semibold text-black">Media Productions:</h3>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="ServiceType"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          What kind of services are you looking for?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="ServiceType"
          id="ServiceType"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>

      <div className="form-group bg-white rounded-lg p-3">
        <label
          htmlFor="PrimaryLocation"
          className="mb-3 block md:text-lg font-medium text-black"
        >
          Can you share your location or the primary location where these
          services will be utilized?
        </label>
        <textarea
          className="w-full pl-0 border-0 border-b border-black/20 focus:ring-0"
          name="PrimaryLocation"
          id="PrimaryLocation"
          placeholder="Your Answer"
          rows={1}
        ></textarea>
      </div>
    </fieldset>
  );
};

export default MediaProductionsForm;
