export function generateMetadata({ title, description, keywords }) {
  return {
    title,
    description,
    keywords,
  };
}

const MetaData = ({ title, description, keywords }) => {
  // Additional logic if needed
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/images/meta-cover-image.jpg" />
    </>
  );
};

export default MetaData;
