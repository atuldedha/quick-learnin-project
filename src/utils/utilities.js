import FacialImage from "../images/facialImage.jpeg";

export const services = [
  {
    id: 1,
    name: "Holistic Wellness Massage",
    keyName: "holisticWellnessMassage",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/MassageV2.png",
    servicesOffered: [
      {
        name: "Swedish Massage",
        price: "130",
        time: "60 mins",
        keyName: "swedish60",
      },
      {
        name: "Swedish Massage + Deep Tissue",
        price: "130",
        time: "60 mins",
        keyName: "swedishAndDeepTissue60",
      },
      {
        name: "Deep Tissue",
        price: "150",
        time: "60 mins",
        keyName: "deepTissue60",
      },
      {
        name: "Swedish Massage",
        price: "190",
        time: "90 mins",
        keyName: "swedish90",
      },
      {
        name: "Swedish + Deep Tissue",
        price: "190",
        time: "90 mins",
        keyName: "swedishAndDeepTissue90",
      },
      {
        name: "Deep Tissue Massage",
        price: "225",
        time: "90 mins",
        keyName: "deepTissue90",
      },
    ],
  },
  {
    id: 2,
    name: "Facial",
    image: FacialImage,
    keyName: "facial",
    servicesOffered: [
      {
        name: "Custom Facial",
        price: "100",
        time: "60 mins",
        keyName: "customFacial60",
      },
      {
        name: "Full Body Facial",
        price: "200",
        time: "90 mins",
        keyName: "fullBodyFacial90",
      },
      {
        name: "Back Facial",
        price: "100",
        time: "60 mins",
        keyName: "backFacial60",
      },
    ],
  },
  {
    id: 3,
    name: "Wax",
    keyName: "wax",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/WaxingV2.png",
    servicesOffered: [],
  },
  {
    id: 4,
    name: "Medical Pedicure",
    keyName: "medicalPedicure",
    image:
      "https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/FullSetFillInV2.png",
    servicesOffered: [],
  },
];

export const categorizeTimings = (selectedServiceTime, date, bookedDates) => {
  // Define the buffer time
  const selectedTime = selectedServiceTime.split(" ")[0];
  // Choose the service timings array based on selectedServiceTime
  let serviceTimings;
  if (selectedTime === "60") {
    serviceTimings = serviceTimings60;
  } else if (selectedTime === "90") {
    serviceTimings = serviceTimings90;
  }

  // Initialize empty result object
  const categorized = {
    morning: [],
    afternoon: [],
    evening: [],
  };

  // Define time boundaries for categorization
  const morningStartTime = 6 * 60; // 6:00 AM in minutes
  const afternoonStartTime = 12 * 60; // 12:00 PM in minutes
  const eveningStartTime = 18 * 60; // 6:00 PM in minutes

  // Helper function to convert HH:mm:ss to minutes
  const convertToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Helper function to check if a given time range is booked
  const isBooked = (fromTime, toTime, currentDate) => {
    const fromTimeMinutes = convertToMinutes(fromTime);
    const toTimeMinutes = convertToMinutes(toTime);

    if (bookedDates?.length > 0) {
      for (const bookedDate of bookedDates) {
        const bookedFromTime = new Date(bookedDate.fromTime).toLocaleTimeString(
          [],
          { hour: "2-digit", minute: "2-digit", hour12: false }
        );
        const bookedToTime = new Date(bookedDate.toTime).toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }
        );

        const bookedFromTimeMinutes = convertToMinutes(bookedFromTime);
        const bookedToTimeMinutes = convertToMinutes(bookedToTime);

        const bookedDateObj = new Date(bookedDate.fromTime);
        bookedDateObj.setHours(0, 0, 0, 0);
        const currentDateObj = new Date(currentDate);
        currentDateObj.setHours(0, 0, 0, 0);

        if (
          currentDateObj.getTime() === bookedDateObj.getTime() &&
          ((fromTimeMinutes >= bookedFromTimeMinutes &&
            fromTimeMinutes <= bookedToTimeMinutes) ||
            (toTimeMinutes > bookedFromTimeMinutes &&
              toTimeMinutes <= bookedToTimeMinutes) ||
            (fromTimeMinutes <= bookedFromTimeMinutes &&
              toTimeMinutes >= bookedToTimeMinutes))
        ) {
          return true;
        }
      }
    }

    // Time range does not overlap with any booked date
    return false;
  };

  // Iterate through the provided timings
  for (const obj of serviceTimings) {
    // console.log(isBooked(obj.fromTime, obj.toTime, date));
    if (
      obj.fromTime &&
      obj.toTime &&
      !isBooked(obj.fromTime, obj.toTime, date)
    ) {
      const fromTimeMinutes = convertToMinutes(obj.fromTime);

      if (
        fromTimeMinutes >= morningStartTime &&
        fromTimeMinutes < afternoonStartTime
      ) {
        categorized.morning.push({
          fromTime: obj.fromTime,
          toTime: obj.toTime,
        });
      } else if (
        fromTimeMinutes >= afternoonStartTime &&
        fromTimeMinutes < eveningStartTime
      ) {
        categorized.afternoon.push({
          fromTime: obj.fromTime,
          toTime: obj.toTime,
        });
      } else {
        categorized.evening.push({
          fromTime: obj.fromTime,
          toTime: obj.toTime,
        });
      }
    }
  }

  return categorized;
};

export const formatTime = (timeString) => {
  // Create a reference date (e.g., '1970-01-01') to avoid invalid date issues
  const referenceDate = "1970-01-01";

  // Create a new date using the reference date and the provided time string
  const dateWithTime = new Date(`${referenceDate}T${timeString}`);

  // Extract hours, minutes, and AM/PM
  const hours = dateWithTime.getHours();
  const minutes = dateWithTime.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Return the formatted time string
  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};

export const generateClientMessage = (selectedServices) => {
  const messages = [];
  // Iterate over each category (e.g., "Massage", "Facial")
  for (const categoryKey in selectedServices) {
    messages.push(serviceKeyMapping[categoryKey]);
  }

  let resultString = messages.join(", ");
  const generatedMessage = `Thank you for booking your ${resultString.toLowerCase()} service. We will confirm your appointment shortly.`;

  return generatedMessage;
};

export const generateClientMessage2 = (selectedServices) => {
  const messages = [];
  // Iterate over each category (e.g., "Massage", "Facial")
  for (const categoryKey in selectedServices) {
    messages.push(serviceKeyMapping[categoryKey]);
  }

  let resultString = messages.join(", ");
  const generatedMessage = `Thank you for booking your ${resultString.toLowerCase()} service with Epicenter! We will confirm your appointment via email.`;

  return generatedMessage;
};

export const generateAppointmentMessages = (selectedServices) => {
  const messages = [];

  // Iterate over each category (e.g., "Massage", "Facial")
  for (const categoryKey in selectedServices) {
    const category = selectedServices[categoryKey];

    // Iterate over each service within the category
    for (const serviceKey in category) {
      const service = category[serviceKey];

      // Extract relevant information
      const serviceName = service.selectedService.name;
      const technicianName = service.technicianSelected.name;
      const fromDate = new Date(service.dateAndTime.date);
      const fromTime = service.dateAndTime.time.fromTime;
      const toTime = service.dateAndTime.time.toTime;

      // Construct the message
      const message = `Servcie: ${serviceName}, Technician Selected: ${technicianName}, Date and Time: ${fromDate.toLocaleDateString()} ${fromTime} - ${toTime}`;

      // Push the message to the messages array
      messages.push(message);
    }
  }

  return messages;
};

const serviceTimings60 = [
  { fromTime: "10:15:00", toTime: "11:15:00" },
  { fromTime: "11:30:00", toTime: "12:30:00" },
  { fromTime: "12:45:00", toTime: "13:45:00" },
  { fromTime: "14:00:00", toTime: "15:00:00" },
  { fromTime: "15:15:00", toTime: "16:15:00" },
  { fromTime: "16:30:00", toTime: "17:30:00" },
  { fromTime: "17:45:00", toTime: "18:45:00" },
  { fromTime: "19:00:00", toTime: "20:00:00" },
  { fromTime: "20:15:00", toTime: "21:15:00" },
];

const serviceTimings90 = [
  { fromTime: "10:15:00", toTime: "11:45:00" },
  { fromTime: "12:00:00", toTime: "13:30:00" },
  { fromTime: "13:45:00", toTime: "15:15:00" },
  { fromTime: "15:30:00", toTime: "17:00:00" },
  { fromTime: "17:15:00", toTime: "18:45:00" },
  { fromTime: "19:00:00", toTime: "20:30:00" },
  { fromTime: "20:45:00", toTime: "22:15:00" },
];

export const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const serviceKeyMapping = {
  holisticWellnessMassage: "Holistic Wellness Massage",
  facial: "Facial",
  wax: "Wax",
  medicalPedicure: "Medical Pedicure",
};
