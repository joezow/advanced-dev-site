import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact-2",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/townhouse-developments",
        destination: "/townhouse-developments-sydney",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/form/simple-contact-form",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/form/simple-contact-form/",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;