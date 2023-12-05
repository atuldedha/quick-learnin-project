const serverUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:8080`
    : "https://epicenter-server-sigma.vercel.app";

const URLs = {
  "get-all-technicians": `${serverUrl}/api/technicians/all-technicians`,
  "book-technician": `${serverUrl}/api/technicians/book-timings`,
};

export const getURLs = (urlName) => URLs[urlName];
