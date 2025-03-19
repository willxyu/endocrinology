endocrine = (function(){

  /* Calcium */
  let phosphaturia = function(creatinine, phosphate, urineCreatinine, urinePhosphate) {
    return (1 - (urinePhosphate/phosphate) * (creatinine/(urineCreatinine*1000))) * phosphate
  }
  
  /* Metabolic */
  let bmi = function( weight, height ) {
    return weight / (height/100 * height/100)
  }

  /* Obesity */
  let rmrHarris = function( weight, height, age, gender ) {
    return (gender === 1 ? 9.247 : 13.397) * weight + (gender === 1 ? 3.098 : 4.799) * height - (gender === 1 ? 4.330 : 5.677) * age + (gender === 1 ? 447.593 : 88.362)
  }
  let rmrMifflin = function( weight, height, age, gender ) {
    return (10 * weight) + (6.25 * height) - (5 * age) + (gender ? -161 : 5)
  }

  return {
    phosphaturia: phosphaturia,
    bmi         : bmi,
    rmrHarris   : rmrHarris,
    rmrMifflin  : rmrMifflin,
  }
})()
