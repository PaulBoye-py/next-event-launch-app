export const CalculateTimeToEvent = () => {
    // Event Date is 1st of Sept, 2024 9AM Pacific Time
    // const eventDate = new Date('2024-01-12T09:00:00-07:00');
    const eventDate = new Date("2023-11-12T09:00:00-07:00"); 
    const currentDate = new Date;
    const timeRemaining = eventDate.getTime() - currentDate.getTime();

    // Calculate Days, Hours, Minutes and Seconds to the event
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining) % (1000 * 60)/ 1000);

    return { days, hours, minutes, seconds};
};