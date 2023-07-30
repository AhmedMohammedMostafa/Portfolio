const title = 'Ahmed Mostafa - Web Developer Portfolio';
const description = 'Meet Ahmed Mostafa, a talented 16-year-old programming prodigy with an impressive 4 years of hands-on experience. 🚀';
const canonical = 'https://ahmeddvlpr.me/';
const openGraph = {
  type: 'website',
  locale: 'en_IE',
  url: canonical,
  title,
  description,
  images: [
    {
      url: 'https://ameddvlpr.me/image.jpg',
      width: 1200,
      height: 630,
      alt: 'My Image',
    },
  ],
};

const twitter = {
  handle: '@AhmedDvlpr',
  site: '@AhmedDvlprPortfolio',
  cardType: 'summary_large_image',
};

const SEOConfig = {
  title,
  description,
  canonical,
  openGraph,
  twitter,
};

export default SEOConfig;
