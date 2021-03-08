const criticalClasses = new Set();

function addCriticalClass(criticalClass) {
  if(typeof window !== 'undefined') {
    return;
  }
  criticalClasses.add(criticalClass);
}

function extractCriticalClasses() {
  if(typeof window === 'undefined') {
    const classes = [...criticalClasses].join(' ');
    const critical = require('@emotion/server').extractCritical(`<div class="${classes}"></div>`);
    return critical;
  }
  return {};
}

module.exports = {addCriticalClass, extractCriticalClasses};
