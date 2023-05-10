import { SVGProps } from "react";

export default function AvatarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.3199 34.08C32.1074 34.0533 31.8924 34.0533 31.6799 34.08C29.4185 34.0039 27.2751 33.0517 25.7027 31.4245C24.1303 29.7974 23.252 27.6228 23.2533 25.36C23.2533 20.5333 27.1466 16.6133 31.9999 16.6133C34.2918 16.6094 36.4934 17.5062 38.1301 19.1104C39.7669 20.7147 40.7077 22.8978 40.7496 25.1893C40.7916 27.4808 39.9314 29.6969 38.3546 31.3601C36.7777 33.0232 34.6104 34 32.3199 34.08ZM49.9733 51.68C45.0727 56.1842 38.656 58.6785 31.9999 58.6667C25.0666 58.6667 18.7733 56.0267 14.0266 51.68C14.2933 49.1733 15.8933 46.72 18.7466 44.8C26.0533 39.9467 37.9999 39.9467 45.2533 44.8C48.1066 46.72 49.7066 49.1733 49.9733 51.68Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 58.6667C46.728 58.6667 58.6667 46.728 58.6667 32C58.6667 17.272 46.728 5.33333 32 5.33333C17.272 5.33333 5.33337 17.272 5.33337 32C5.33337 46.728 17.272 58.6667 32 58.6667Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}