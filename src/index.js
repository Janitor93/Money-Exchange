// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let obj = {};
  
  if(currency <= 0) return obj;
  if(currency > 10000) {
    obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    return obj;
  }

  let values = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1
  };

  for(i in values) {
    if(currency / values[i] >= 1) {
      obj[i] = parseInt(currency / values[i]);
      currency %= values[i];
    }
  }

  return obj;
}
