import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Eco Surya - Solar Energy Solutions | Solar Panels & Inverters in India",
  description = "Leading solar energy solutions provider in India. Premium solar panels, inverters, batteries & energy storage systems for residential, commercial & industrial projects. Get free consultation.",
  keywords = "solar panels India, solar inverters, solar energy, solar power systems, residential solar, commercial solar, industrial solar",
  image = "/eco_surya_logo.png",
  url = "https://www.ecosuryapower.com",
  type = "website"
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
