import FacialImage from "../images/facialImage.jpeg";

export const services = [
  {
    id: 1,
    name: "Massage",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/MassageV2.png",
    servicesOffered: [
      {
        name: "Swedish Massage",
        price: "130",
        time: "60 mins",
      },
      {
        name: "Swedish Massage + Deep Tissue",
        price: "130",
        time: "60 mins",
      },
      {
        name: "Deep Tissue",
        price: "150",
        time: "60 mins",
      },
      {
        name: "Swedish Massage",
        price: "190",
        time: "90 mins",
      },
      {
        name: "Swedish + Deep Tissue",
        price: "190",
        time: "90 mins",
      },
      {
        name: "Deep Tissue Massage",
        price: "225",
        time: "90 mins",
      },
    ],
  },
  {
    id: 2,
    name: "Facial",
    image: FacialImage,
    servicesOffered: [
      {
        name: "Custom Facial",
        price: "100",
        time: "60 mins",
      },
      {
        name: "Full Body Facial",
        price: "200",
        time: "90 mins",
      },
      {
        name: "Back Facial",
        price: "100",
        time: "60 mins",
      },
    ],
  },
  {
    id: 3,
    name: "Wax",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/WaxingV2.png",
    servicesOffered: [],
  },
  {
    id: 4,
    name: "Pedicure",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/FullSetFillInV2.png",
    servicesOffered: [],
  },
];

export const categorizeTimings = (timings) => {
  // Initialize empty result object
  const categorized = {
    morning: [],
    afternoon: [],
    evening: [],
  };

  // Define time boundaries for categorization
  const morningStartTime = 6; // 6:00 AM
  const afternoonStartTime = 12; // 12:00 PM
  const eveningStartTime = 18; // 6:00 PM

  // Iterate through the provided timings
  for (const obj of timings) {
    if (obj.fromTime) {
      const fromTime = new Date(obj.fromTime);
      const hour = fromTime.getHours();

      if (hour >= morningStartTime && hour < afternoonStartTime) {
        categorized.morning.push(obj);
      } else if (hour >= afternoonStartTime && hour < eveningStartTime) {
        categorized.afternoon.push(obj);
      } else {
        categorized.evening.push(obj);
      }
    }
  }

  return categorized;
};

export const formatTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};
