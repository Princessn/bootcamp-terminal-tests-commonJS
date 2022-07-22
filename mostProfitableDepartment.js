module.exports = (list) => {
  	let mapPro = {};
  	for(let i = 0; i < list.length; i++){
        let obj = list[i];
  		let key = obj["department"];
        if(mapPro[key] == undefined){
          mapPro[key] = 0;
        }
        mapPro[key] += obj["sales"];
    }
  	
  	let aKey = "";
  	let aValue = 0;
  	for(let key in mapPro){
    	if(mapPro[key] > aValue){
          	aValue = mapPro[key];
          	aKey = key;
        }
    }
  	return aKey;
}
