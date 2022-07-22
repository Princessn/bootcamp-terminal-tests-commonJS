module.exports = (string) => {
  	let list = string.split(",");
  	let sms = 0;
  	let call = 0;
  	for(let i = 0; i < list.length; i++){
      	let item = list[i].trim();
      	if(item  == "sms") sms++;
      	if(item == "call") call++;
    }
  	let usage = sms * 0.65 + call * 2.75;
  	let formart = "R" + usage.toFixed(2); 
  	return formart;
}