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

// let showOver = document.querySelector('#showOver');
let results = document.getElementById('result');

let teamOneName;
let teamTwoName;
let matchOvers;

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    teamOneName = document.getElementById('team1').value;
    teamTwoName = document.getElementById('team2').value;
    matchOvers = parseInt(document.getElementById('matchOvers').value);
    information = document.getElementById('information');

    if(teamOneName === '' || teamTwoName === '' || matchOvers === ''){
        document.getElementById('information').innerHTML = `
        <h4>Please Fill All Input!</h4>`
    }else{
        information.innerHTML = `
        <h4>Total Overs: ${matchOvers}</h4>
        <p>Match: ${teamOneName} vs ${teamTwoName}</p>`
    }

    // teamOneName = ''
    // teamTwoName = ''
    // matchOvers = ''

});

oneRun.addEventListener('click', () => { 
    runs(1);
});
twoRun.addEventListener('click', () => { 
    runs(2);
});
threeRun.addEventListener('click', () => { 
    runs(3);
});
fourRun.addEventListener('click', () => { 
    runs(4);
});
fiveRun.addEventListener('click', () => { 
    runs(5);
});
sixRun.addEventListener('click', () => { 
    runs(6);
});

dotBall.addEventListener('click', function() {
    runs('dot ball');
});

wicket.addEventListener('click', function() {
    runs('wicket');
});

wideBall.addEventListener('click', function() {
    runs('wide ball');
});

noBall.addEventListener('click', function() {
    runs('no ball');
});

let setInning = 1;
let team1Score = 0;
let team2Score = 0;

function runs(run){

    if(setInning === 1){
        Calculation(run);
    }else if( setInning === 2 || wicket === 10){
        Calculation(run);
    }else if(setInning === 3){
        const result = team1Score - team2Score
        if (team1Score > team2Score) {
            results.innerHTML = `<h2>${teamOneName} Won by ${result} runs</h2>`
        } else if(team1Score < team2Score){
            results.innerHTML = `<h2>${teamTwoName} Won by ${wicket} wicket</h2>`
        }else{
            results.innerHTML = `<h2>Match Draw</h2>`
        }
        alert('Refresh the page for new game')
    }

}

let restOver = false;
let totalRun =  [];
let totalBall = 0;
let totalWicket = 0;

function Calculation(run) {

    if(!restOver){
        document.querySelector('#showOver').innerHTML += `<span class="run-circle">${run}</span>`

        if(run === 'wide Ball' || run === 'no Ball'){
            totalRun.push(1);
        }else if(run === 'dot Ball'){
            ++totalBall;
        }else if(run === 'wicket'){
            ++totalWicket;
            ++totalBall;
        }else if (typeof run === 'number'){
            totalRun.push(run);
            ++totalBall;
        }



    }

}

