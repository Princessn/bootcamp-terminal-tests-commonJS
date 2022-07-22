module.exports = (string) => {
  	let list = string.split(",");
  	let count = 0;
  	for(let i = 0; i < list.length; i++){
      	let item = list[i].trim()
        if(item.startsWith("CJ")) count++;
    }
  	return count;
}