


const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})



function startGame() {
	console.log('Started');
	startButton.classList.add('hide');
	questionContainerElement.classList.remove('hide');
	shuffledQuestions = question.sort(() => Math.random() - .5);
	currentQuestionIndex = 0
	setNextQuestion()
}



function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}



function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
       const button = document.createElement('button');
       button.innerText = answer.text
       button.classList.add('btn')
       if (answer.correct) {
       	  button.dataset.correct = answer.correct 
       }
       button.addEventListener('click', selectAnswer);
       answerButtonsElement.appendChild(button);
    });
}


function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
		
	
}



function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    	setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    	nextButton.classList.remove('hide')
    } else {
    	startButton.innerText = 'Restart'
    	startButton.classList.remove('hide')
    }
}

 nextButton.classList.remove('hide')

function setStatusClass(element, correct) {
       clearStatusClass(element)
       if (correct) {
       	element.classList.add('correct')
       }  else {
       	 element.classList.add('wrong')
       }
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}










const question = [






    {
    	question: 'Kako se ja zovem?',
    	answer: [
    	    {text: 'Josef', correct:false  },
    	    {text: 'marko', correct:true  }  	   
    	    
    	   	

    	 
    	]


    	
    },

    {
    	question: 'Gde ja zivim?',
    	answer: [
    	   {text: 'Pariz', correct:false  },
    	    {text: 'Moskva', correct:false  },
    	    {text: 'Leobersdorf', correct:true  },
    	    {text: 'Tokio', correct:false  }
    	   	

    	 
    	]
    },







     {
    	question: 'Kako se zove moja cerka najlepsa?',
    	answer: [
    	    {text: 'kriska', correct:false  },
    	   {text: 'dunja', correct:true  },
    	   {text: 'Lol', correct:false  },
    	   {text: 'roblox', correct:false  },
    	   
    	   	

    	 
    	]
    },




 {
    	question: 'Koja je omiljena Dunjina igra?',
    	answer: [
    	    {text: 'Fudbal', correct:false  },
    	   {text: 'Kosarka', correct:false  },
    	   {text: 'Adopt Me', correct:true },
    	   {text: 'Gimnastika', correct:false  },
    	   	

    	 
    	]
    },



 {
    	question: 'Koja je Suzanina omiljena rasa pasa?',
    	answer: [
    	    {text: 'Pit Bull', correct:false  },
    	   {text: 'Kangal', correct:false  },
    	   {text: 'Pomeranac', correct:true },
    	   {text: 'Doge', correct:false  },
    	   	

    	 
    	]
    },


{
    	question: 'Sta Dunja zeli da bude kad poraste?',
    	answer: [
    	    {text: 'Pilot', correct:false  },
    	   {text: 'Uciteljica', correct:false  },
    	   {text: 'Frizer', correct:false },
    	   {text: 'Programer', correct:true  },
    	   	

    	 
    	]
    },



{
    	question: 'Dunjino omiljeno jelo?',
    	answer: [
    	    {text: 'Pasulj', correct:false  },
    	   {text: 'Krompir', correct:false  },
    	   {text: 'Suschi', correct:true },
    	   {text: 'Corba', correct:false  },
    	   	

    	 
    	]
    },


{
    	question: 'Suzanina omiljena emisija?',
    	answer: [
    	    {text: 'Grip-motormagazin', correct:false  },
    	   {text: 'Vesti', correct:false  },
    	   {text: 'Lets Dance', correct:true },
    	   {text: 'Shopping Quen', correct:true  },
    	   	

    	 
    	]
    },


]