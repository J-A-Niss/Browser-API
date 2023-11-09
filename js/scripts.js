
function dragStart(event){
    
    console.log(event.dataTransfer);
    
    event.dataTransfer.setData('image', event.target.id);
    
    event.currentTarget.style.backgrondColor = 'gray';
    
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    
    dropzone.appendChild(draggableElement);
    
    event.dataTransfer.clearData();
    
}

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 10, 150, 150);

window.addEventListener('resize', function(){
    
    if( this.window.innerWidth < 620)
    console.log('smartphone');
    else if ( this.window.innerWidth < 920 )
    console.log('tablet');
    else {
        console.log('desktop');
    }})
    