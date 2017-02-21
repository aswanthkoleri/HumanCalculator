

      function Question1()
      {
        var ans1 = document.getElementById("answer1").value;

        if (ans1 == "96") 
        {
        var score = document.getElementById("scoring").innerHTML;
        score ++; 
        document.getElementById("1").style.display="none";
        document.getElementById("scoring").innerHTML = score;
        } else {
          document.getElementById("answerPane1").innerHTML ="Nope!";
          document.getElementById("answerPane1").style.color="red";}
      }




      function Question2()
      {
        var ans2 = document.getElementById("answer2").value;
        var score = document.getElementById("scoring").innerHTML;
        if (ans2 == "90") 
        {
          score ++;
          document.getElementById("2").style.display="none";
          document.getElementById("scoring").innerHTML = score;
        } else {
          document.getElementById("answerPane2").innerHTML ="Nope!";
          document.getElementById("answerPane2").style.color="red";
        }
      }



/*Copy the content between the comments and paste below. */
      function Question3()
      {
        var ans3 = document.getElementById("answer3").value;
        var score = document.getElementById("scoring").innerHTML;
        if (ans3== "18") 
        {
        score ++;
        document.getElementById("3").style.display="none";
        document.getElementById("scoring").innerHTML = score;
        } else {
         document.getElementById("answerPane3").innerHTML ="Nope!";               
         document.getElementById("answerPane3").style.color="red";}
/*Paste the copied JavaScript code just below this comment, before the curly bracket.  Replace all #s with the question #.  For example, all 3's become 4's for question 4.  Don't forget to update the answer!  This quiz accomodates for upper-case and lower-case spellings of answers.*/      
      
      }

      function Question4()
      {
        var ans4 = document.getElementById("answer4").value;
        var score = document.getElementById("scoring").innerHTML;
        if (ans4 == "32") 
        {
          score ++;
          document.getElementById("4").style.display="none";
          document.getElementById("scoring").innerHTML = score;
        } else {
          document.getElementById("answerPane4").innerHTML ="Nope!";
          document.getElementById("answerPane4").style.color="red";
        }
      }


      function Question5()
      {
        var ans5 = document.getElementById("answer5").value;
        var score = document.getElementById("scoring").innerHTML;
        if (ans5 == "225") 
        {
          score ++;
          document.getElementById("5").style.display="none";
          document.getElementById("scoring").innerHTML = score;
        } else {
          document.getElementById("answerPane5").innerHTML ="Nope!";
          document.getElementById("answerPane5").style.color="red";
        }
      }



/*
Remember to change the following variables with the correct question number:
Question3 = Question4
answer3 = answer4
ans3 = ans4
3 = 4
answerPane3 = answerPane4

and change "HTML" and "html" to the correct answers for your question.
*/

      function checkMyScore()
      {
     var score = document.getElementById("scoring").innerHTML;
        if (score > 2) 
        { 
         document.getElementById("nextLesson").style.display = "block";}
        }