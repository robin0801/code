document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const dayOfWeekBtn = document.getElementById("dayOfWeekBtn");
    const randomDateDisplay = document.getElementById("randomDate");
    const dayOfWeekDisplay = document.getElementById("dayOfWeek");

    let generatedDate;

    generateBtn.addEventListener("click", () => {
        const year = Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900;
        const month = Math.floor(Math.random() * 12) + 1;

        let day;
        if ([4, 6, 9, 11].includes(month)) {
            day = Math.floor(Math.random() * 30) + 1;
        } else if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                day = Math.floor(Math.random() * 29) + 1;
            } else {
                day = Math.floor(Math.random() * 28) + 1;
            }
        } else {
            day = Math.floor(Math.random() * 31) + 1;
        }

        generatedDate = new Date(year, month - 1, day);
        randomDateDisplay.textContent = `Random Date: ${String(day).padStart(2, '0')}--${String(month).padStart(2, '0')}--${year}`;
        dayOfWeekBtn.style.display = "inline-block";
        dayOfWeekDisplay.textContent = "";
    });

    dayOfWeekBtn.addEventListener("click", () => {
        if (generatedDate) {
            const dayOfWeek = generatedDate.toLocaleDateString('en-US', { weekday: 'long' });
            dayOfWeekDisplay.textContent = `Day of the Week: ${dayOfWeek}`;
        }
    });
});
