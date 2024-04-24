window.function = function (tVolta) {
  tVolta = tVolta.value ?? "";
  tVolta=tVolta.replace(/\D/g,"")
  tVolta=tVolta.replace(/(\d{1})(\d)/,"$1:$2")  
  tVolta=tVolta.replace(/(\d{2})(\d)/,"$1,$2") 
  return tVolta.replace=(tVolta);
}
