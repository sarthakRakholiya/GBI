import React from "react";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

interface ContactLinkProps {
  type: "phone" | "email";
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  type,
  value,
  className,
  children,
}) => {
  const handleClick = () => {
    if (type === "phone") {
      trackPhoneClick(value);
    } else {
      trackEmailClick(value);
    }
  };

  const href = type === "phone" ? `tel:${value}` : `mailto:${value}`;

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children || value}
    </a>
  );
};

export default ContactLink;
