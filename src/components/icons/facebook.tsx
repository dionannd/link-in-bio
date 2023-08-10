import React from "react";

const FacebookIcon = ({ fill, ...props }: { fill: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 12.0632C22.5 6.26479 17.7984 1.56323 12 1.56323C6.20156 1.56323 1.5 6.26479 1.5 12.0632C1.5 17.3039 5.33906 21.6478 10.3594 22.4362V15.0993H7.69266V12.0632H10.3594V9.74995C10.3594 7.11886 11.9273 5.66433 14.3255 5.66433C15.4744 5.66433 16.6763 5.86964 16.6763 5.86964V8.45386H15.3516C14.048 8.45386 13.6402 9.26292 13.6402 10.0945V12.0632H16.552L16.087 15.0993H13.6406V22.4371C18.6609 21.6492 22.5 17.3053 22.5 12.0632Z"
      />
    </svg>
  );
};

export default FacebookIcon;