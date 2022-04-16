const button=document.querySelector('.result button');
const checked ='images/checked.png';
const unchecked='images/unchecked.png';
const cas=document.querySelectorAll('.caselle');
const response={};


function selezione(event){
    for(let caselle of cas){
        if(event.currentTarget.dataset.questionId === caselle.dataset.questionId && event.currentTarget.dataset.choiceId !== caselle.dataset.choiceId){
  caselle.classList.add('unselected');
  const img=caselle.querySelector('.checkbox');
  img.src=unchecked;
  if(caselle.classList.contains('selected')){
      caselle.classList.remove('selected');
      caselle.classList.add('unselected');
      
  }
}
  else{
    
        
        
                event.currentTarget.classList.remove('unselected');
        event.currentTarget.classList.add('selected');
        const img=event.currentTarget.querySelector('.checkbox');
        img.src=checked;
        response[event.currentTarget.dataset.questionId]=event.currentTarget.dataset.choiceId;
    }

}

if(Object.values(response).lenght===3){
    for(let caselle of cas){
    caselle.removeEventListener('click',selezione);
}
risultato();
}
}

function risultato(){
    console.log(response.one);
    if(response.one==response.two || response.one==response.three){
    esposition(response.one);

    }
    else if(response.two==response.three){
        esposition(response.two);
    }
    else{
        esposition(response.one);
    }

}
function esposition(answer){
    let i=answer;
    let results=document.querySelector('.result');
    let title=results.querySelector('.title');
    let content= results.querySelector('.contents');
    title.textContent=RESULTS_MAP[i].title;
    content.textContent=RESULTS_MAP[i].contents;
    results.classList.remove('hidden');
}


function restart(event){
    let results=document.querySelector('.result');
    let title=results.querySelector('.title');
    let content= results.querySelector('.contents');
    results.classList.add('hidden');
    title.textContent='';
    content.textContent='';
    delete response.one;
    delete response.two;
    delete response.three;
    for(let caselle of cas){
        caselle.addEventListener('click',selezione);
        let img=caselle.querySelector('.checkbox');
        img.src=unchecked;
        if(caselle.classList.contains('selected')|| caselle.classList.contains('unselected')){
            caselle.classList.remove('selected');
            caselle.classList.remove('unselected');
        }
console.log('done');
    }
}
button.addEventListener('click',restart);
for (const caselle of cas){
    caselle.addEventListener('click',selezione);
    console.log('added');
}


















