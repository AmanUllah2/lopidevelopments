import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const SocialMediaForm = ({ onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const templateParams = {
      socialMediaemail: formData.get("socialMediaemail"),
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_SURVEY_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!");
        setTimeout(() => {
          onClose(false);
        }, 3000); // 3 seconds delay
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
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="socialMediaemail"
            className="mb-4 block text-black font-medium"
          >
            Please Specify Who
          </label>
          <textarea
            className="w-full rounded-2xl border-black/20"
            name="socialMediaemail"
            id="socialMediaemail"
            rows={6}
          />
        </div>
        <button type="submit" className="btn-primary-1 w-full">
          <span className="relative z-10">Submit</span>
        </button>
      </form>
    </>
  );
};

export default SocialMediaForm;
