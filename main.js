let days = document.querySelectorAll(".charts div")
console.log(days)

fetch("data.json").then(res => res.json()).then(data =>{ 
    let day;
    switch (new Date().getDay()) {
        case 0:
          day = "sun";
          break;
        case 1:
          day = "mon";
          break;
        case 2:
           day = "tue";
          break;
        case 3:
          day = "wed";
          break;
        case 4:
          day = "thu";
          break;
        case 5:
          day = "fri";
          break;
        case 6:
          day = "sat";
      }
 
   

    let totalWeek=0;
   let percentage;
    data.forEach((obj)=>
    {
        totalWeek += obj.amount;
    })

    
    data.forEach((object)=>{

        percentage = (object.amount / totalWeek ) * 100;
        object.percentage = +percentage.toFixed("2");
      days.forEach((today)=>{

        if(today.dataset.day === day){
            today.style.backgroundColor = "hsl(186, 34%, 60%)"
        }

     

        if(object.day === today.dataset.day){
            console.log("hi")
        today.setAttribute('data-percentage',`${object.percentage}%`);
        today.style.setProperty('height',`calc(${object.percentage}% + ${50}%)`);

           
        }
    })

    })
    
    console.log(totalWeek);
 
    


  console.log(data)
   
    //   console.log(day)
});