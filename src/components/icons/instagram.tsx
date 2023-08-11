import React from "react";

const InstagramIcon = ({ fill, ...props }: { fill: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4648 4.53517C18.6451 3.71539 17.5342 3.25331 16.3748 3.24984H7.62516C6.46582 3.25331 5.35495 3.71539 4.53517 4.53517C3.71539 5.35495 3.25331 6.46582 3.24984 7.62516V16.3748C3.25331 17.5342 3.71539 18.6451 4.53517 19.4648C5.35495 20.2846 6.46582 20.7467 7.62516 20.7502H16.3748C17.5342 20.7467 18.6451 20.2846 19.4648 19.4648C20.2846 18.6451 20.7467 17.5342 20.7502 16.3748V7.62516C20.7467 6.46582 20.2846 5.35495 19.4648 4.53517ZM7.62516 1.5H16.3748C19.7437 1.5 22.5 4.25625 22.5 7.62516V16.3748C22.5 19.7437 19.7437 22.5 16.3748 22.5H7.62516C4.25625 22.5 1.5 19.7437 1.5 16.3748V7.62516C1.5 4.25625 4.25625 1.5 7.62516 1.5ZM16.9582 7.40396C17.174 7.54818 17.4278 7.62515 17.6873 7.62515C17.8598 7.62552 18.0306 7.59183 18.1901 7.526C18.3495 7.46017 18.4943 7.36351 18.6163 7.24156C18.7382 7.11961 18.8349 6.97477 18.9007 6.81536C18.9665 6.65596 19.0002 6.48512 18.9998 6.31265C18.9998 6.05306 18.9229 5.79931 18.7786 5.58347C18.6344 5.36763 18.4294 5.1994 18.1896 5.10006C17.9498 5.00072 17.6859 4.97473 17.4313 5.02537C17.1767 5.07602 16.9428 5.20102 16.7593 5.38458C16.5757 5.56813 16.4507 5.802 16.4001 6.0566C16.3494 6.3112 16.3754 6.5751 16.4748 6.81492C16.5741 7.05475 16.7423 7.25974 16.9582 7.40396ZM13.9446 9.08972C13.369 8.70512 12.6923 8.49984 12 8.49984C11.072 8.50083 10.1823 8.86992 9.52611 9.52611C8.86992 10.1823 8.50084 11.072 8.49985 12C8.49985 12.6923 8.70513 13.369 9.08973 13.9446C9.47433 14.5202 10.021 14.9688 10.6606 15.2337C11.3001 15.4986 12.0039 15.568 12.6828 15.4329C13.3618 15.2978 13.9855 14.9645 14.475 14.475C14.9645 13.9855 15.2978 13.3618 15.4329 12.6828C15.568 12.0039 15.4986 11.3001 15.2337 10.6605C14.9688 10.021 14.5202 9.47433 13.9446 9.08972ZM9.08326 7.63478C9.94662 7.0579 10.9616 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12C17.25 13.0383 16.9421 14.0534 16.3652 14.9167C15.7883 15.7801 14.9684 16.453 14.0091 16.8504C13.0498 17.2477 11.9942 17.3517 10.9758 17.1491C9.95738 16.9465 9.02192 16.4465 8.28769 15.7123C7.55347 14.9781 7.05345 14.0426 6.85088 13.0242C6.64831 12.0058 6.75227 10.9502 7.14963 9.99091C7.54699 9.0316 8.2199 8.21166 9.08326 7.63478Z"
        fill={fill}
      />
    </svg>
  );
};

export default InstagramIcon;