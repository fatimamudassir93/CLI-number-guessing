#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*6+1);
    const guessAnswers = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type:"number",
            message:"please guess a number between 1-6:",

        },
    ]);

if(guessAnswers.userGuessedNumber === randomNumber){
    console.log("congratulations!! you have guessed a right number");

}
else{
    console.log("you have guessed a wrong number");
}



