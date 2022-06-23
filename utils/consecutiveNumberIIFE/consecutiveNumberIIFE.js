const iifeCounter = (() => {
    let counter = startNumber;
    return {
        start: counter,
        increase: () => {
            if (counter < endNumber - 1) {
                return ++counter
            } else if (counter === endNumber - 1) {
                return counter = 0;
            }
        },
        decrease: () => {
            if (counter > 0) {
                return --counter
            } else if (counter === 0) {
                counter = endNumber;
                return --counter
            }
        },
        reset: () => {
            counter = 0;
            console.log("Count is reset.");
        }
    };
})(startNumber, endNumber);


export default iifeCounter;