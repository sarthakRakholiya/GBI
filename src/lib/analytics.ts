import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-L4VXMGMN4H");
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track contact form submissions
export const trackContactFormSubmit = (formType: string) => {
  ReactGA.event({
    category: "Contact",
    action: "Form Submit",
    label: formType,
  });
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string) => {
  ReactGA.event({
    category: "Contact",
    action: "Phone Click",
    label: phoneNumber,
  });
};

// Track email clicks
export const trackEmailClick = (email: string) => {
  ReactGA.event({
    category: "Contact",
    action: "Email Click",
    label: email,
  });
};

// Track unique visitors
export const trackUniqueVisitor = () => {
  ReactGA.event({
    category: "User",
    action: "Unique Visit",
  });
};
