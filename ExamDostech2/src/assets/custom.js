//myQuestions object
const myQuestions = [
    {
    question: "1 + 2 is ?",
    answers: 
    ["1",
    "2",
    "3"]
    ,
    correctAnswer: 2
    },
    {
    question: "What is the best site for Web Programmer ?",
    answers: [
    "Stack Overflow",
    "Quora",
    "w3school"
    ],
    correctAnswer: 0
    },
    {
    question: "Who is Prime minister fo Thailand ?",
    answers: [
    "Prayut Chan-o-cha",
    "Yingluck Shinawatra",
    "Abhisit Vejjajiva",
    "Somchai Wongsawat"
    ],
    
    correctAnswer: 0
    }
    ];

    // obj = JSON.parse(JSON.stringify(myQuestions)); //Try to use as JSON object


    score=0;    //variable for score
    // count=0;    //variable for amount of complete exam
    
        $(document).ready(function renderQuestion(){
            //Implement Qustion and answer
            for(i=0;i<3;i++){                                                   // i is index of question
                $("#question"+(i+1)).text((i+1)+') '+myQuestions[i].question);  //Implement Question i
                for(j=0;j<3;j++){                                               // j is index of answer
                    $("#label"+(i+1)+(j+1)).text(myQuestions[i].answers[j]);    //Implement all Answer j of question i.
                    $("#radio"+(i+1)+(j+1)).val(j);     //Set radio button value for answer check.
                    // console.log($("#radio"+(i+1)+(j+1)).val());              //To check radio button value
                }
            }
        });


        $(document).ready(function checkAnswer(){

            //Check answer
            //use #question to count score instead use score+=1 directly to prevent click right answer multiple time.
            //$('#question1').val('1'); is for right.
            //$('#question1').val('0'); is for wrong.
            $( '.form-check-input' ).click(function() {                 //When Click radio button
                if($(this).attr("name")=="question1"){
                    if($(this).val()==myQuestions[0].correctAnswer)     //Check with correctAnswer in myQuestions 
                        $('#question1').val('1');                       //If correct set question value = 1
                    else
                        $('#question1').val('0');                       //If it not set question value = 0
                }
                if($(this).attr("name")=="question2"){
                    if($(this).val()==myQuestions[1].correctAnswer)
                        $('#question2').val('1');
                    else
                        $('#question2').val('0');
                }
                if($(this).attr("name")=="question3"){
                    if($(this).val()==myQuestions[2].correctAnswer)
                        $('#question3').val('1');
                    else
                        $('#question3').val('0');
                }
            });
            
            
            //Function to count&display score and inform which question is still incomplet.
            $( "#submit_btn" ).click(function checkUserAnswerAllQuestion() {
                for(i=1;i<=myQuestions.length;i++){
                    // alert($('#question'+i).val());
                    if($('#question'+i).val()=='1'){                                //Check and set text correct answer
                        score+=1;                                                   //count score
                        $('#display_ans'+i).text("Question "+i+" is correct.")
                    }
                    else if($('#question'+i).val()=='0'){                           //Check and set text correct answer
                        $('#display_ans'+i).text("Question "+i+" is incorrect.")
                    }
                    else{
                        $('#display_ans'+i).text("Question "+i+" is incomplete.")   //Display incomplete question if unknow #question value
                    }
                }
                $('#score').text(score)     //Display score
            });
        });
       
    
    
    