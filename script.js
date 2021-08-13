function animateText(){
    let text=document.querySelector('#text');
    const text_array=text.innerHTML.split('');
    text.innerHTML='';
    for(let cont=0;cont<text_array.length;cont++){
        setTimeout(function(){
            text.innerHTML+=text_array[cont];
        },75*cont);
    }
};
animateText();