module.exports = (string, regCode) => {
	let list = string.split(",");
    let count = 0;
  	let i = 0;
  	while(i < list.length){
      	let item = list[i].trim();
      	if(item.startsWith(regCode)) count++;
        i++;
    }
  	return count;
}