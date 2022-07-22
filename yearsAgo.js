module.exports = (year) => {
  	const myYear = new Date().getFullYear();
  	return myYear - year;
}