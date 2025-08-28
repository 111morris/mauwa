/* import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string; // absolute URL; if not provided, will attempt from window.location
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const canonicalUrl =
    canonical || (typeof window !== "undefined" ? window.location.href : undefined);

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
 */