const wakeUp = () => {return 'Acordando!!'};
const coffee = () => {return 'Bora tomar café!!'};
const sleep = () => {return 'Partiu dormir!!'};

const doingThings = (callback) => {
    const result = callback();
    console.log(result)
};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);
