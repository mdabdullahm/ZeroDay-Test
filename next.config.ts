// import type { NextConfig } from "next";

// const securityHeaders = [
//   {
//     key: "Strict-Transport-Security",
//     value: "max-age=63072000; includeSubDomains; preload",
//   },
//   {
//     key: "Content-Security-Policy",
//     value:
//       "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:;",
//   },
//   {
//     key: "X-Frame-Options",
//     value: "DENY",
//   },
//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff",
//   },
//   {
//     key: "Referrer-Policy",
//     value: "strict-origin-when-cross-origin",
//   },
//   {
//     key: "Permissions-Policy",
//     value: "camera=(), microphone=(), geolocation=()",
//   },
// ];

// const nextConfig: NextConfig = {
//   output: "standalone",

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "i.ibb.co",
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: securityHeaders,
//       },
//     ];
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      // এখানে frame-src যোগ করা হয়েছে যাতে গুগল ড্রাইভ লোড হতে পারে
      "frame-src 'self' https://drive.google.com https://*.google.com; " +
      "img-src 'self' https: data:; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " +
      "style-src 'self' 'unsafe-inline' https:; " +
      "font-src 'self' https: data:; " +
      // connect-src যোগ করা হয়েছে যাতে ড্রাইভের ভেতরে ফাইল সার্চ বা লোড করা যায়
     "connect-src 'self' https://*.google.com https://zt.zerodaytest.com;",
  },
  {
    key: "X-Frame-Options",
    // এটিকে SAMEORIGIN রাখা ভালো যাতে আপনার সাইট কেউ ফ্রেম করতে না পারে, কিন্তু আপনি অন্যগুলো পারেন
    value: "SAMEORIGIN", 
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;