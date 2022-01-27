let num = document.querySelector("#num")
let count =0;



function decrease(){

       // alert("decrease");
        count--;
        numcolor(count);
        num.innerHTML= count
        //num.style.color = 'Red'
        //numcolor(count);

}

function increase(){

    //alert("increase");
    //alert(num);
    count++;
    numcolor(count);
    num.innerHTML = count
    //num.style.color = 'Green';
    //numcolor(count);

    

}

function reset(){

   // alert("Reset");
    count=0;
    numcolor(count);
    num.innerHTML = count
    



}

function numcolor(count)
{
    if (count>0)
    {
        num.style.color = 'green';
        
    }
    if(count<0)
    {
        num.style.color = 'Red';
        
    }
    if(count==0)
        num.style.color = 'grey';

    
}
