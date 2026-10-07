import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/research",
        destination: "/writing#research",
        permanent: false,
      },
      { source: "/resume", destination: "/about#cv", permanent: false },
      { source: "/en", destination: "/", permanent: false },
      { source: "/zh", destination: "/", permanent: false },
      { source: "/en/projects", destination: "/projects", permanent: false },
      { source: "/zh/projects", destination: "/projects", permanent: false },
      {
        source: "/en/research",
        destination: "/writing#research",
        permanent: false,
      },
      {
        source: "/zh/research",
        destination: "/writing#research",
        permanent: false,
      },
      { source: "/en/resume", destination: "/about#cv", permanent: false },
      { source: "/zh/resume", destination: "/about#cv", permanent: false },
    ];
  },
};

export default nextConfig;
