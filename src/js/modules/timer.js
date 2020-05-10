const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const timeDifference = Date.parse(endtime) - Date.parse(new Date ());
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

        return {
            total: timeDifference,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        let timerIntetval;

        const getStringNumber = (num) => num <= 9 ? `0${num}` : `${num}`;

        const updateClock = () => {
            const timeData = getTimeRemaining(endtime);

            days.textContent = getStringNumber(timeData.days);
            hours.textContent = getStringNumber(timeData.hours);
            minutes.textContent = getStringNumber(timeData.minutes);
            seconds.textContent = getStringNumber(timeData.seconds);

            if (timeData.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timerIntetval);
            }
        };
        updateClock(); // to reset static date before setInterval start working

        timerIntetval = setInterval(updateClock, 1000);
    };

    setClock(id, deadline);
};

export default timer;