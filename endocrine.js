endocrine = (function(){

  let phosphaturia = function(creatinine, phosphate, urineCreatinine, urinePhosphate) {
    return (1 - (urinePhosphate/phosphate) * (creatinine/(urineCreatinine*1000))) * phosphate
  }

  return {
    phosphaturia: phosphaturia,
  }
})()
