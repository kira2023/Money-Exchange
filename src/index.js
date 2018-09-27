// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    const cents = [
        { name: 'H', value: 50},
        { name: 'Q', value: 25},
        { name: 'D', value: 10},
        { name: 'N', value: 5},
        { name: 'P', value: 1}];

    const result = {};

    cents.forEach(function(elem){
        let centsCount = Math.floor(currency / elem.value);
        
        if(centsCount > 0){
            result[elem.name] = centsCount;
            currency -= elem.value * centsCount;
        }
    });
    return result;
}