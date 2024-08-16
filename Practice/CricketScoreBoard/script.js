const form = document.querySelector('form');

let oneRun = document.getElementById('one');
let twoRun = document.getElementById('two');
let threeRun = document.getElementById('three');
let fourRun = document.getElementById('four');
let fiveRun = document.getElementById('five');
let sixRun = document.getElementById('six');

let dotBall = document.getElementById('dotBall');
let wideBall = document.getElementById('wideBall');
let wicket = document.getElementById('wicket');
let noBall = document.getElementById('noBall');

let showOver = document.querySelector('#showOver');
let result = document.getElementById('result');

let teamOneName;
let teamTwoName;
let matchOvers;

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    teamOneName = document.getElementById('team1').value;
    teamTwoName = document.getElementById('team2').value;
    matchOvers = parseInt(document.getElementById('matchOvers').value);

    document.getElementById('information').innerHTML = `
    <h4>Total Overs: ${matchOvers}</h4>
    <p>Match: ${teamOneName} vs ${teamTwoName}</p>`

    // teamOneName = ''
    // teamTwoName = ''
    // matchOvers = ''

});
