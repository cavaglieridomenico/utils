function getConsecutiveNumber(startNumber, finalNumber) {
    let currentNumber = startNumber;
    const getIncreasedNumber = () => {
        if (currentNumber < finalNumber - 1) {
            return ++currentNumber;
        }
        else if (currentNumber === finalNumber - 1) {
            return currentNumber = startNumber;
        }
    }
    
    const getDecreasedNumber = () => {
        if (currentNumber > startNumber) {
            return --currentNumber;
        }
        else if (currentNumber === startNumber) {
            currentNumber = finalNumber;
            return --currentNumber;
        }
    }    
    return {
        currentNumber, getIncreasedNumber, getDecreasedNumber
    }
}

export default getConsecutiveNumber;