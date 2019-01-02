(function() 
{
  var questions = [{
    question: "There is a man found dead in a circular mansion.The detective interviews the cook,the maid,the babysitter. The cook said he couldn't have done it because he was preparing the meal. The maid said she couldn't have done it because he was dusting the corners. The babysitter said she couldn't beacause she was playing with the children. who was lying?1.cook 2.maid 3.babysitter 4.detective 5.suicide",
    
choices: [1, 2, 3, 4, 5],
    
correctAnswer: 1 }, 
{
    question: "Crime are committed to satisfy three basic interpersonal needs. Which of the following is not one of those needs? 1.Belonging, 2.Control, 3.Intimacy, 4.Self-expression, 5.None of these",
 
   choices: [1, 2, 3, 4, 5],
 
   correctAnswer: 3
  }, 
{
    question: "Here is a picture of a death scane. can you look at the image and tell if it was a murder or suicide?",
  
  choices: [72, 99, 108, 134, 156],
 
   correctAnswer: 0
  }, 
{
    question: "shauna was killed one sunday morning. The police know who they are going to arrest from this bit of informations: *April was getting the mail. * Alyssa was doing laundry. * Reggie was cooking. *Mark was planting in the garden. who killend Shauna? Whom will the police arrest-->1.April, 2.Alysaa, 3.Reggie, 4.Mark ,5.Natural dead",
    
choices: [1, 2, 3, 4, 5],
 
   correctAnswer: 0  }, 
{
    question: "The term Trojan horses, worms and logic bombs refer to? 1.Telecommunication crimes, 2.Invasion of privacy crimes, 3.Computer crimes, 4.Sex related crimes, 5.Psyco crimes",
   
 choices: [1, 2, 3, 4, 5],
  
  correctAnswer: 2  }];
  

  var questionCounter = 0; 
//Tracks question number
  var selections = []; 
//Array containing user choices
  var quiz = $('#quiz'); 
//Quiz div object
  
  
// Display initial question
  displayNext();
  

  // Click handler for the 'next' button
  $('#next').on('click', function (e) 
{
    e.preventDefault();
    
    
// Suspend click listener during fade animation
  
  if(quiz.is(':animated')) 
{        
      return false;
    }
   
 choose();
    
   
 // If no user selection, progress is stopped
    
if (isNaN(selections[questionCounter])) 
{
      alert('Please make a selection!');
    }
 else {
      questionCounter++;
      displayNext();
    }
  });
  

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) 
{
    e.preventDefault();
    

    if(quiz.is(':animated')) 
{
      return false;
    }
 
   choose();
    
questionCounter--;

    displayNext();
  });
  
 
 // Click handler for the 'Start Over' button
  $('#start').on('click', 
function (e) 
{
    e.preventDefault();
    

    if(quiz.is(':animated')) 
{
      return false;
    }
  
  questionCounter = 0;
   
 selections = [];
  
  displayNext();
 
   $('#start').hide();
  });
 
 
  // Animates buttons on hover
  $('.button').on('mouseenter', 
function () 
{
    $(this).addClass('active');
  });

  $('.button').on('mouseleave', 
function () 
{
    $(this).removeClass('active');
  });
  
  
// Creates and returns the div that contains the questions and 
  
// the answer selections
  function 
createQuestionElement(index) 
{
    var qElement = $('<div>', 
{
      id: 'question'
    });
    
 
   var header = $('<h2>Question ' + (index + 1) + ':</h2>');
   
 qElement.append(header);
    

    var question = $('<p>').append(questions[index].question);
 
   qElement.append(question);
    
 
   var radioButtons = createRadios(index);
  
  qElement.append(radioButtons);
    

    return qElement;
  }
  
  
// Creates a list of the answer choices as radio inputs
  function 
createRadios(index) 
{ var radioList = $('<ul>');
 
   var item;
 
   var input = '';
   
 for (var i = 0; i < questions[index].choices.length; i++) 
{
      item = $('<li>');
   
   input = '<input type="radio" name="answer" value=' + i + ' />';
  
    input += questions[index].choices[i];
 
     item.append(input);
 
     radioList.append(item);
    }
 
   return radioList;
  }
  
  
// Reads the user selection and pushes the value to an array
  function 
choose() 
{
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  

  // Displays next requested element
  function 
displayNext() 
{
    quiz.fadeOut(function()
 {
      $('#question').remove();
      
      
if(questionCounter < questions.length)
{
        var nextQuestion = createQuestionElement(questionCounter);
   
     quiz.append(nextQuestion).fadeIn();
   
     if (!(isNaN(selections[questionCounter]))) 
{
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
      
  // Controls display of 'prev' button
       
 if(questionCounter === 1)
{
          $('#prev').show();
        }
 else if(questionCounter === 0)
{
          
          $('#prev').hide();
     
     $('#next').show();
        }
  
    }
else {
        var scoreElem = displayScore();
       
 quiz.append(scoreElem).fadeIn();
     
   $('#next').hide();
 
       $('#prev').hide();
 
       $('#start').show();
  
    }
    });
  }
  
  
// Computes score and returns a paragraph element to be displayed
  function 
displayScore() 
{
    var score = $('<p>',{id: 'question'});
 
   
    var numCorrect = 0;
    
for (var i = 0; i < selections.length; i++) 
{
      if (selections[i] === questions[i].correctAnswer) 
{
        numCorrect++;
      }
    }
    
    
score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
   
 return score;
  }
})();
