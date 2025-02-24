"use client";
//navigation links/sitemaps
export const navLinks = [
    { name: "About", url: "#about" },
    // { name: "Products", url: "#products" },
    { name: "Services", url: "#services" },
    { name: "Team", url: "#team" },
    { name: "Contact", url: "#contact" },
  ];


//footer links/sitemaps
export const FooterLinks = {

  company: [
      { name: "About", url: "#about" },
      { name: "Products & Services", url: "#products" },
      // { name: "Testimonials", url: "#whychoosingus" },
      { name: "FAQ", url: "#faq" },
      { name: "Why Us", url: "#whychoosingus" },
      { name: "Our Team", url: "#team" },
  ],

  link: [
      { name: "Join Community", url: "#" },
      { name: "Explore", url: "#explore" },
      { name: "Terms & Condition", url: "/terms-of-use" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Sitemap", url: "https://heelheidbusiness.com/sitemap.html" },
  ],

  contact: [
      {
          name: "team@heelheidbusiness.com",
          url: "mailto:team@heelheidbusiness.com",
          iconPath: "/assets/icons/email.svg" || null,
      },
      {
          name: `Acacus Housing Estate KK 40 Ave, Kigali, Rwanda`,
          url: "#contact+#Acacus+Housing+Estate+KK40Ave+Kigali+Rwanda",
          iconPath: "/assets/icons/location.svg" || null,
      },
      {
          name: "+250793165246",
          url: "tel:+250793165246",
          iconPath: "/assets/icons/phone.svg" || null,
      },
      // ...
  ],

  footerBottom: [
    { name: "Terms", url: "/terms-of-use" },
      { name: "Privacy", url: "/privacy-policy" },
    //   { name: "Contact", url: "#" },
  ],

  social: [
    
        {
            name: "Youtube",
            url: "#",
            iconPath: "/assets/icons/youtube.svg" || null,
            iconPathHover: "/assets/icons/youtube-primary.svg" || null,
        },
      {
          name: "Facebook",
          url: "#",
          iconPath: "/assets/icons/facebook.svg" || null,
          iconPathHover: "/assets/icons/facebook-primary.svg" || null,
      },
      {
          name: "Twitter",
          url: "#",
          iconPath: "/assets/icons/twitter.svg" || null,
          iconPathHover: "/assets/icons/twitter-primary.svg" || null,
      },
      
      {
        name: "Instagram",
        url: "#",
        iconPath: "/assets/icons/instagram.svg" || null,
        iconPathHover: "/assets/icons/instagram-primary.svg" || null,
    },
    
    {
        name: "Linkedin",
        url: "#",
        iconPath: "/assets/icons/linkedin.svg" || null,
        iconPathHover: "/assets/icons/linkedin-primary.svg" || null,
    },
  ],
};
