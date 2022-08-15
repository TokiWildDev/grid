
const show = document.getElementsByClassName('buttonShow');
const introPage = document.getElementById('intro')
const body= document.querySelector('body')

show[0].addEventListener('click',()=>
{
    if(window.matchMedia("(min-width: 600px)").matches)
    {
        introPage.classList.add('hide')
    }
    else
    {
        introPage.classList.add('hideBis')
        document.body.style.overflowY="scroll"    
    }  
})
window.addEventListener('scroll', ()=>
{
    if (window.scrollY)
    {
        introPage.style.display ="none";
    }
})

if(window.matchMedia("(max-width: 600px)").matches)
{
    document.body.style.overflowY = "hidden";
}