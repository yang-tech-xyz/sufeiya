const goTo = function dateFormat(url) {
  this.$router.push(url);
  
};
const goRep = function dateFormat(url) {
  this.$router.replace(url);
};
const goBack = function dateFormat(num) {
  this.$router.go(num)
};

const goResolve = function dateFormat(num) {
  window.open(num, '_blank')
  // window.open(this.$router.resolve(num).href,'_blank')
};

export { goTo, goRep, goBack, goResolve };
