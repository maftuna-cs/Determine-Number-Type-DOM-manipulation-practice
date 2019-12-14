let button = document.getElementById("but");


button.addEventListener("click",function(){

  let number = parseInt(document.getElementById("num").value);

  if(number > 0)
  {
    alert(`${number} is a positive number`);

  }

  else if(number < 0)
  {
    alert(`${number} is a negative number`)
  }

  else if(number==0)
  {
    alert(`${number} is 0`)

  }
});