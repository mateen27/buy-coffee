const fetchCoffeeData = async () => {
    try {
        const rawData = await fetch('https://api.sampleapis.com/coffee/hot');
        const coffeeData = await rawData.json();
        return coffeeData;
    } catch (error) {
        console.log('error fetching the coffee data', error);
        return;
    }
}

export default fetchCoffeeData;