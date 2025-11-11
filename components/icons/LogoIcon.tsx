import React from 'react';

export const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <filter id="tube-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#ED1C24" floodOpacity="0.4"/>
      </filter>
    </defs>
    <g>
      <circle cx="104" cy="104" r="104" fill="#ED1C24" />
      <circle cx="104" cy="104" r="94" fill="white" />
    </g>
    <g transform="translate(14, 25)">
      {/* Kids - Path data traced from the logo image */}
      <path 
        d="M32.5 24.3H42l-8 9.7v12.2H25V24.3h7.5zm11 21.9h5.8V24.3h-5.8v21.9z M67.4 34.6c0-6.2-4-10.2-10.6-10.2h-6.3v21.9h6.7c6.5 0 10.2-3.8 10.2-11.7zm-5.6-6.6c0 3.1-1.7 4.9-4.6 4.9h-1V32.8h1c3 0 4.6 1.8 4.6 5.2z M89.9 40.5c0-7.1-4.7-11.6-11.7-11.6s-11.7 4.5-11.7 11.6 4.7 11.6 11.7 11.6 11.7-4.5 11.7-11.6zm-6.1 0c0-3.8-2.3-7-5.6-7s-5.6 3.1-5.6 7 2.3 7 5.6 7 5.6-3.2 5.6-7z"
        fill="#ED1C24" transform="scale(1.4)"
      />
      <g transform="translate(47.5, 23.5) scale(1.4)">
        <circle cx="9.2" cy="7.2" r="3.2" fill="#ED1C24" />
        <path d="M8.2 5.8v2.8l2.5-1.4-2.5-1.4z" fill="white" />
      </g>
      <path d="M96.5 48.5v4l3-2-3-2z" fill="#ED1C24" transform="scale(1.4)" />
      
      {/* Tube - Path data traced from the logo image */}
      <g filter="url(#tube-shadow)">
        <path 
          d="M40.9 83.1h-5.9v-7.9c0-3.3 1.3-4.5 4.1-4.5h.8v-5.2h-1.1c-5.8 0-9 2.5-9 9.1v8.5H14v5.2h5.8v16.1h5.9V88.3h5.2v-5.2h-5.2z M65.5 83.1c-5.1 0-8.2 3.8-8.2 9s3.1 9 8.2 9 8.2-3.8 8.2-9-3-9-8.2-9zm0 13.1c-2.3 0-3-1.8-3-4.1s.7-4.1 3-4.1 3 1.8 3 4.1-.7 4.1-3 4.1zm19.9-13.1c-5.1 0-8.2 3.8-8.2 9s3.1 9 8.2 9 8.2-3.8 8.2-9-3.1-9-8.2-9zm0 13.1c-2.3 0-3-1.8-3-4.1s.7-4.1 3-4.1 3 1.8 3 4.1-.7 4.1-3 4.1zm20-13.1c-5.1 0-8.2 3.8-8.2 9s3.1 9 8.2 9 8.2-3.8 8.2-9-3.1-9-8.2-9zm0 13.1c-2.3 0-3-1.8-3-4.1s.7-4.1 3-4.1 3 1.8 3 4.1-.7 4.1-3 4.1z"
          transform="scale(1.4)"
          fill="white" stroke="#ED1C24" strokeWidth="1.5" strokeLinejoin="round" paintOrder="stroke"
        />
      </g>
    </g>
  </svg>
);