let userScores = {'山地自行车':0,'公路自行车':0,'gravel车':0};

const questions = [
  {
    question:"你所在的城市道路是否崎岖或者说自行车交通状况是否良好?",
    answers:[
      {text:"还可以",mountainScore:1,gravelScore:2,roadScore:2},
      {text:"一般般",mountainScore:2,gravelScore:2,roadScore:1},
      {text:"有点差",mountainScore:3,gravelScore:2,roadScore:1},
    ]
  },
  {
    question:"更偏向于山地自行车还是瓜车还是公路自行车?",
    answers:[
      {text:"山地车",mountainScore:3,gravelScore:0,roadScore:0},
      {text:"公路车",mountainScore:0,gravelScore:0,roadScore:3},
      {text:"瓜车",mountainScore:0,gravelScore:3,roadScore:0},
    ]
  },
  {
    question:"你的预算是多少?",
    answers:[
      {text:"1000以下",mountainScore:1,gravelScore:1,roadScore:1},
      {text:"2000以下",mountainScore:2,gravelScore:2,roadScore:1},
      {text:"3000以下",mountainScore:2,gravelScore:2,roadScore:2},
      {text:"3000以上",mountainScore:1,gravelScore:3,roadScore:3},
    ]
  },
  {
    question:"你对自行车的需求(可多选）?",
    answers:[
      {text:"通勤",mountainScore:3,gravelScore:3,roadScore:2},
      {text:"锻炼",mountainScore:2,gravelScore:2,roadScore:2},
      {text:"骑行休闲",mountainScore:2,gravelScore:2,roadScore:1},
      {text:"竞速",mountainScore:1,gravelScore:2,roadScore:3},
    ]
  },
  {
    question:"你的通勤距离有多长??",
    answers:[
      {text:"不足2km",mountainScore:0,gravelScore:0,roadScore:0},
      {text:"3km以下",mountainScore:2,gravelScore:0,roadScore:0},
      {text:"5km以下",mountainScore:1,gravelScore:2,roadScore:2},
      {text:"10km以上",mountainScore:0,gravelScore:2,roadScore:2},
    ]
  },
  {
    question:"你对自行车的基本操作是否熟悉，如换挡?",
    answers:[
      {text:"是",mountainScore:2,gravelScore:2,roadScore:2},
      {text:"不是",mountainScore:2,gravelScore:1,roadScore:1},
    ]
  },
  {
    question:"您所在的城市或者居住的附加是否有较多适合骑行的场所，如绿道，如宽阔的自行车道?",
    answers:[
      {text:"较多",mountainScore:1,gravelScore:3,roadScore:3},
      {text:"还好",mountainScore:2,gravelScore:2,roadScore:2},
      {text:"几乎没有",mountainScore:3,gravelScore:2,roadScore:2},
    ]
  }
]
/* 现在问的是哪个问题 */
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;


function startQuiz(){
  resetState();
  currentQuestionIndex = 0;
  userScores =  {'山地自行车':0,'公路自行车':0,'gravel车':0};

  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion =  questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1; 
  questionElement.innerHTML = questionNum + '.' + currentQuestion.question;

  currentQuestion.answers.forEach( answer=>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('answer-btn');
    answerButtons.appendChild(button);

    button.dataset.mountainScore = answer.mountainScore;
    button.dataset.gravelScore = answer.gravelScore;
    button.dataset.roadScore = answer.roadScore;

    /*将button作为元素传递给selectAnswer*/
    button.addEventListener("click",selectAnswer);
    }
  );
}

function resetState(){
  nextButton.style.display = 'none';
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedButton = e.target;
  userScores.山地自行车 += parseInt(selectedButton.dataset.mountainScore);
  userScores.gravel车 += parseInt(selectedButton.dataset.gravelScore);
  userScores.公路自行车 += parseInt(selectedButton.dataset.roadScore);
  // console.log(userScores);
  selectedButton.classList.add('selected');
  /*全部！禁用！*/
  Array.from(answerButtons.children).forEach(button =>{
    button.disabled = true;
  })
  nextButton.style.display = 'block';
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showResult();
  }
}

nextButton.addEventListener('click',()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    /*再来一次*/   
    questionElement.classList.remove('recommended');
    startQuiz();
  }
})



function showResult(){
  /*清空页面*/
  resetState();

  let highestScoreBike = '山地自行车';
  for(let indexBike in userScores){
    console.log(`${indexBike},${userScores[indexBike]}`);
    if(userScores[indexBike]>userScores[highestScoreBike]){
      highestScoreBike = indexBike;
    }
  }
  questionElement.classList.add('recommended');
  questionElement.innerHTML = `推荐您选择${highestScoreBike}`;
  nextButton.innerHTML = '再试一次';
  nextButton.style.display = 'block';
}



startQuiz();
