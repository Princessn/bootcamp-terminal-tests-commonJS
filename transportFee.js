module.exports = (when) => {
  	switch(when){
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      case "nightshift":
        return "free";
      default:
        return when + " is not a shift";
   	}
}