"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Gabriel Hernandez 
   Date: 3/5/19   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// sets the value of the new variable, "reportHTML", to the value of an HTML string.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Creates a tabel that shows who is in the race and other infoormation about them.
for (var i = 0; i <= 7; i++) {
    var totalVotes = 0; 
    votes[i].forEach(calcSum);
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Canidate</th><th>Votes</th>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

// Inserts the HTML made into the for loop into the HTML document.
document.getElementById('section').innerHTML = reportHTML;



// Writes individual table rows for each canidate that shows info about each canidate
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    
    // gets the Candidate, thier party, how many votes they have and the percentage that there votes are.
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes + "(" + candidatePercent.toFixed(1) + " %)</td>";

        // get the values calculated fromt the creatBar functions and makes a loop for each table row 
        for (var k = 0; k <= candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        } 
          
        rowHTML += "</tr>";
    }

    return rowHTML;
}


/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}


// Creats a bar that show the stanfdings of the race
function createBar(partyType) {
    var barHTML = "";

    switch(partyType) {
        case "D": 
            barHTML = "<td class='dem'></td>";
            break;

        case "R": 
            barHTML = "<td class='rep'></td>";
            break;

        case "I": 
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;
}
