endocrine = (function(){

  /* Calcium */
  let phosphaturia = function(creatinine, phosphate, urineCreatinine, urinePhosphate) {
    return (1 - (urinePhosphate/phosphate) * (creatinine/(urineCreatinine*1000))) * phosphate
  }

  /* Diabetes */
  let eag = function( hba1c ) {
    return 0.0555 * (28.7 * hba1c - 46.7)
  }
  let homaIR = function( insulin, glucose ) { /* unverified units */
    return (insulin * glucose * 18.018)/405
  }
  let mg2mmol = function( bgl ) {
    return bgl * 0.0555
  }
  let mmol2mg = function( bgl ) {
    return bgl * 18.018
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
    eag         : eag,
    homaIR      : homaIR,
    mg2mmol     : mg2mmol,
    mmol2mg     : mmol2mg,
    bmi         : bmi,
    rmrHarris   : rmrHarris,
    rmrMifflin  : rmrMifflin,
  }
})()
