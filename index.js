const emoji=["😍","😍","😁","😁","😂","😂","😭","😭","😡","😡","😎","😎","😘","😘","❤️","❤️"];
function shuffle(){
    for(let i=emoji.length-1;i>=0;i--){
        const random=Math.floor(Math.random()*(i+1));
        [emoji[i],emoji[random]]=[emoji[random],emoji[i]]
    }
}
shuffle()
for(let i=0;i<emoji.length;i++){
    let box=document.createElement('div')
    box.className='item'
    box.innerHTML=emoji[i]
    document.querySelector('.game').appendChild(box);
}