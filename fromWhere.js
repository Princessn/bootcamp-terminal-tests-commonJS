module.exports = (plate) => {
	switch(true){
      case plate.startsWith("CY"):
        return "Bellville";
      case plate.startsWith("CJ"):
        return "Paarl";
      case plate.startsWith("CA"):
        return "Cape Town";
      case plate.startsWith("CC"):
        return "Some other place!";
      default:
        return plate + ": I don't know where this is from";
    }
}