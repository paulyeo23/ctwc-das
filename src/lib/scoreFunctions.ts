export const formatScore = (number:number) =>{
    return number.toLocaleString();
  }

export const formatDate = (date: Date) => {
    // Helper function to get the ordinal suffix of a day
    function getOrdinalSuffix(day: number) {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    // Extract the day, month, and year from the date
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    // Month names array
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Build the formatted date string
    let ordinalDay = `${day}${getOrdinalSuffix(day)}`;
    let monthName = monthNames[monthIndex];
    return `${ordinalDay} of ${monthName} ${year}`;
  };