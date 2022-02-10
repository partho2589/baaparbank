// 

function makeRed (){
    document.body.style.backgroundColor = 'red'
}

// hendle blue button click by setting function name
const makeButton = document.getElementById(' make-blue-button')
   // just set the name of the function  
    makeButton.onclick = makeblue;
    function makeblue (){
        document.body.style.backgroundColor = 'blue'
    }

    const makeGreen = document.getElementById('green-button')
   makeGreen.onclick = function (){
       document.body.style.backgroundColor = 'green'
   }
 // addEventListener 

   const goldenrodButton = document.getElementById('make-goldenRod-button');
        goldenrodButton.addEventListener('click',mekeGoldenrod)
        function mekeGoldenrod (){
            document.body.style.backgroundColor = 'goldenrod'
        }
 // addEventListener
        const hotpinkbutton = document.getElementById('make-hotpink-button');
        hotpinkbutton.addEventListener ('click', function makePink (){
            document.body.style.backgroundColor = 'hotpink'
        })
            

        document.getElementById('make-LawnGreen-button').addEventListener('click', function(){
            document.body.style.backgroundColor = 'lawngreen'
        })
          