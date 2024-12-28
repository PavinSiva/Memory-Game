const emoji=["😍","😍","😁","😁","😂","😂","😭","😭","😡","😡","😎","😎","😘","😘","❤️","❤️"];
        

for(let i=emoji.length-1;i>=0;i--){
    const random=Math.floor(Math.random()*(i+1));
    [emoji[i],emoji[random]]=[emoji[random],emoji[i]]
}   
let count=0;
for(let i=0;i<emoji.length;i++){
let box=document.createElement('div')
box.className='item'
box.innerHTML=emoji[i];

box.onclick=function(){
    this.classList.add('boxopen')
    
    setTimeout(function(){
      if(document.querySelectorAll('.boxopen').length > 1){
        count++
        if(document.querySelectorAll('.boxopen')[0].innerHTML == document.querySelectorAll('.boxopen')[1].innerHTML){
            document.querySelectorAll('.boxopen')[0].classList.add('match')
            document.querySelectorAll('.boxopen')[1].classList.add('match')

            document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
            document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

            // removeshake(){
            // document.querySelectorAll('.boxopen')[0].classList.add('shake')
            // document.querySelectorAll('.boxopen')[1].classList.add('shake')
            // }
            // setTimeout(removeshake,400)
          
           
        }
        else{
            document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
            document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

          
           
        }
    
      
    }
    },500)
    
 
}
document.querySelector('.Game').appendChild(box);

}
