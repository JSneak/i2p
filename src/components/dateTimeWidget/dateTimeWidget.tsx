const DateTimeWidget = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.toLocaleString("en-US", { month: "long" });

    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getWish = () => {
    const today = new Date();
    const hour = today.getHours();
    return (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening";
  };
  return (
    <div className="absolute top-0 right-0">
      <div className="mt-8 mr-8 text-lg text-white tracking-wide">
        {getCurrentDate()} | {getWish()}
      </div>
    </div>
  );
};

export default DateTimeWidget;
