const getHours = (arr) => {
  const open= [];
  const close = [];
  const hours = [];

  arr.forEach(value => {
      open.push(value[0]);
      close.push(value[1]);
  })
  open.sort((a, b) => a - b);
  close.sort((a, b) => a - b);

  hours.push(open[0], close[0]);

  for (let i = 1; i < open.length; i++){
    if (open[i] <= close[i - 1]){
      hours[hours.length - 1] = close[i];
    }
    else {
      hours.push(close[i-1], open[i]);
      hours.push(open[i], close[i]);
    }
  }
  hours.push(close[close.length - 1], open[0]);

  const allhours = hours.map(item => {
    if (item < 12){
      return `${item}am`
    }
    return `${item}pm`
  });
  
  let operatingHours = {open: "", close: ""};
  let i = 0;
  while (i < allhours.length){
    operatingHours['open'] = operatingHours.open.concat(`${allhours[i++]} - ${allhours[i++]}, `);
    
    if (i < allhours.length){
      operatingHours['close'] = operatingHours.close.concat(`${allhours[i++]} - ${allhours[i++]}, `)
    }
  }
  
  return operatingHours;
}

export {
  getHours
}