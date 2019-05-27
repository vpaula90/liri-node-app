// Extra credit  psuedo coding

// 10.1 Hello.js
    // This activity is just to run node in the terminal and to output what is on the console log which is "Hello"

// 10.2 siracha.js
    // created a JS file and console.log "Siracha. Goes great on... nothing" and then use the node command to show the comment in the terminal

// 10.3 arguments.js
    // console log the arguments that are being passed on the node command line

// 10.4 argumentsadd.js
    // console log the arguments passed on node command line and can string them together, it will pull each arguement being passed. Parse float function will convert a string to a number so that they could be combined

// 10.5 Parametercheck.js
    // create a variable for each of the arguments that are passed on the node command line and then create an if else statment that if the value for variable a is equal to variable b then console log true if not console log false. A simpler version is just to use process.argv for each of the arguments and compare them

// 10.6 Calculator.js
    // create a variable to capture all that is being passed in the node comand line. Create a variable for the operation you are passing, and then a variable for each of the number being passed to do the equation. Create a variable for the new number created from the equation
        // create an if else statement to do the equation for all the different operand (math equations that can be requested). There is event and else statement incase what is being passed has not been defined. 

// 10.7 multiple.js
    // create a variable that will take the info on the comand line and will convert it to an intenger, created a for loop that will add 6 to the number passed in the node comand line

//10.9 Bands
    //  create a bnds.js file and a run.js file. The Band.js file will create the list of band information and will create a variable for the band information. From there create a module.export to be able call it and the bands informatio in the run.js file. On the run.js file create a variable that will call what is on the bands.js file. from there created a for loop to loop through the band information and console.log all the information

// 10.13 BestThingsEver
    // Include the FS package to read and write what is being passed through
        // run the read file module in the fs to read the information on the text file and will read the information in the utf8 format
            // Create a variable that will break the string being passed by comma and store the data into an array. Loop through the new array and use console log to print each item of the array

// 11.1 RainingCatsandDogs.js
    // create a construct for Animal that eill store raining and noise variables and when passed through in the node command line those two fields will look to pass the values. 
        // use this. to capture the value being passed in the command line and  give raining and noise a value. 
        // Also include a function that is raining is passed as true on the comand line then it will pass through the noise that was passed through in the command line
        // create a variable for dog that will create a new animal and will pass through new information including smells and a bath function that will look at the value of smell and will pass whether or not bath should occur. 

// 11.2 RainingCatsandDogs-con.js
    // create a function of anumal that will create a variable for raining and noise as the function is being called and the information is passed through on th ecommand line. 
    // create a function for noise that will be called based on whether or not it is raining
        // create a new variable for dogs and then a new one for cats that will each create a new animal. They can be used to run the function for makenoise
        // create a function for mass hysteria for both cats and dogs so that that both are making noise since raining is true for each.

// 11.3 CharacterCreate.js
    // create a constructor for character and the function will house the different information that will be passed on the variable and then output in console log. It will pass a name, profession, gender, age, strength, hit points and then a function for print stats, a function for if there person is alive based on the hit points the character has, and then a function for attack that will remove points from the strength bank. Function for level up that will add to the age, strength and hitpoints.
    // create a variable for different characters to create new characters and pass the different information that will be stored in the variables created in the construct
    // run the function for attack from one of the avatars to the other and then console log what the information for the second avatar comes out to. 

// 11.4 Tamagotchi.js
    // Create a construct for digital pal, create a function and store different properties of hungry, sleepy, bored, age. These will be used in a function for each that will look at what was passed in the node command line and then change the values of some of the other properties and trigger console log for what the status of the Tamagochi is. 
        // create a function for each of the different states that the tamagochi could be in and each function has an if else statement that can change the properties
        // create a new variable for animals that is an empty object, and give it an animal name to create a new digital pet. Add a property of outside to the new object and set it to false.  Create a method of barck to the new object and create a function that will console log "Woof!" "WooF!" if the function is called. 
        // Add the method letoutside to the dog object which will let the dog outside if outside is passed and will change the status of outside to true, if outside is already true it will console log that the dogs status is already outside.
        // create method for let inside that will look to see if outside is true or false to determinse if the dog is outside or not and then print the console log message of wether the dog is inside or not. 
        // create  a similar function and object for cat

// 11.5 Programmers
    // create a constructor called programmer that will take in the name, position, age and favorite language of the programmer object. 
    // use the printInfo method print all of the programer objects on the console.log
    // create a variable for a new programmer and pass it new information and use the printInfo function to print the new values of the new programmer that was created

// 11.6 Programmer with Prompt
    // requires inquierer npm package so it needs to be installed
    // create a constructor function for programmer and creates objects for the programmer
    // create the printInfo method and applies it to all the objects on the programmer construct.
    // inquirer.prompt, asks a series of questions whose replies get stored within the variable answers in the .then statement so that is outputs the answers
    // create variable for a new programmer and use printInfo method to show the new programmer object and pass it the answers

// 11.8 TeamManager-basic.js
    // requires inquirer npm package
    // Create a constructor function to create a player object that will sotre name, position, offense, defense values
    // Create a function for good game and use the math floor and math random so if the calculatee equal to 0 the offense value goes up, but if it is over 0 then the defense will go up by 1
    // create a function for bad game that if it is 0 then the offense will decrease by 1 and if it is over 0 then the defense will decrease by 1
    // create a printstats function that will console log the value of the objects
    // create variable to contain all the different players objects
    // vrecursive funtion that will allow the user to create 5 players and will print each players stats. if the length of the array is 5 or higher no more questions will be asked
    // .them runs the constructor and places the new player object into the variable for player and turns the offense and defense varibales into integers and use parseInt. create a variable to add a player to the start of the array if there are less than five players in the array. 
    // create a for loop through the team array and call printstats function for each object player construct contains
    // Calling the createplayer(); function outside on the global will start the code 
    // function play game will start the score at 0 and create a for loop and go through five rounds of the game. Function for playRound will will start the scores for offenserandom and defense random in a number from 1 to 19. 