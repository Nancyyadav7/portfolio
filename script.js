console.log("Scripts running....")
var cross = document.querySelector('.cross');
var ham = document.querySelector('.ham');
var hamburger = document.querySelector('.hamburger');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
cross.style.display='none';
hamburger.addEventListener("click",()=>{
    sidebar.classList.toggle('sidebargo');
    if(sidebar.classList.contains('sidebargo'))
    {
        cross.style.display='none'
        setTimeout(()=>
        {
            ham.style.display = 'inline';
            container.style.backgroundColor = 'rgba(96, 92, 92, 0)';
        }, 250);
    }
    else
    {
        ham.style.display='none'
        setTimeout(()=>
        {
            cross.style.display='inline';
            container.style.backgroundColor = 'rgba(96, 92, 92, 0.292)';
        },250);
        
    }
})