module.exports = (list, quantity) => {
  	let over = [];
  	for(let i = 0; i < list.length; i++){
      	let obj = list[i];
      	if(obj["qty"] > quantity) over.push(obj);
    }
  	return over;
}