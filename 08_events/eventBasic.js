// This Approach have also a problem. You are applying a onclck on id so onclick have any problems 
//This will give min feature

// document.getElementById('owl').onclick = function(){
//     alert('Owl Clicked')
// }

// Add Event listner

//attacjEvent()     // use in early time
//jQuery - on

// document.getElementById('owl').addEventListener('click', function(e){
//     // alert('Owl Clicked')
//     console.log(e);
    
// }, false)

//------------------- learn these behaviour ------------
//types
//timestamp
//defaultPrevented
//target , toElement , srcElement , currentTarget, clientX , clientY, screenX, screenY
// altkey , ctrlkey, shiftkey, keyCode


// ------------ What is Event propagation
// 1) Event Bubling     Context        // Use In Market ( bydefaylt false) it will go bottom to the top of the code e.g: owl click function first run then images click function run 
// 2) Event Capturing   Context      // it will go top to bottom code mean click function etc

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Click inside the ul");
    
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl Clicked!");
//     e.stopPropagation()       // stop propagation : it will not go to the above ul  
// }, false)


// // for google

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();

//     console.log('Google clicked'); 
// })


document.querySelector('#images').addEventListener('click',function(e){
    //console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.parentNode.removeChild(removeIt)
    }

    // if(e.target)
    // //removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
    
},false)























