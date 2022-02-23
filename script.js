const url = "https://raw.githubusercontent.com/cdavidson2024/NHL-Teams/main/NHL%20Teams.csv";

//utils.js function
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
  var column = [];
  for(var i=1; i<matrix.length-1; i++){
    column.push(matrix[i][col]);
  }
  return column;
}

//----------------------------------

//constant variables
const conference = getColumn(url, 1);
const teamName = getColumn(url, 3);
const teamImage = getColumn(url, 11);
const teamArena = getColumn(url, 5);
const teamYears = getColumn(url, 7)



//input team name (string) and outputs the conference that team is in.
function getConference(name) {
  var outputConference;
  for (var i in teamName) {
    if (name == teamName[i]) {
      outputConference = conference[i];
    }
  }
  if(outputConference.length > 0){
    return outputConference;
  }
  return "No results found. Please check capitalization and spelling and make sure your input matches the correct type specified."
}




//inputs team name (string) and outputs their logo in the console.
function getImage(team){
  var theImage = "";

  for (var i in teamImage){
    if(team == teamName[i]){
      theImage = teamImage[i];
    }
  }
  if (theImage.length > 0) {
    return theImage;
  }
  return "No results found. Please check capitalization and spelling and make sure your input matches the correct type specified."
}




//input team name (string) and outputs the name of their home arena/stadium.
function findStadium(name) {
  var outputArena;
  for (var i in teamName) {
    if (name == teamName[i]) {
      outputArena = teamArena[i];
    }
  }
  if(outputArena.length > 0){
    return outputArena;
  }
  return "No results found. Please check capitalization and spelling and make sure your input matches the correct type specified."
}




//enter a year (number) and it outputs all the teams that joined during or after that year. 
function yearsTeams(year) {
  var outputTeams = [];
  for (var i in teamYears) {
    if (year <= teamYears[i]) {
      outputTeams.push(teamName[i]);
    }
  }
  if(outputTeams.length > 0){
    return outputTeams;
  }
  return "No results found. Please check capitalization and spelling and make sure your input matches the correct type specified."
}



//input a conference (string) and outputs all of the teams in that conference.
function teamsInConference(conf) {
  var outputTeams = [];
  for (var i in conference) {
    if (conf == conference[i]) {
      outputTeams.push(teamName[i]);
    }
  }
  if(outputTeams.length > 0){
    return outputTeams;
  }
  return "No results found. Please check capitalization and spelling and make sure your input matches the correct type specified."
}
