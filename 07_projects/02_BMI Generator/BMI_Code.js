const form = document.querySelector('form')

// this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').Value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    }else{
        const BMI = (weight / ((height * height) / 10000 )).toFixed(1)
        // Show The result
        //results.innerHTML = `<span>Your Result is ${BMI}</span>`
        if(BMI < 18.6){
            results.innerHTML = `<span>Your Result is Under Weight ${BMI}</span>`
        }else if(BMI === 18.6 || BMI === 24.9){
            results.innerHTML = `<span>Your Result is Normal ${BMI}</span>`
        }else if (BMI > 24.9){
            results.innerHTML = `<span>Your Result is Greater Weight ${BMI}</span>`
        }
    }
});






























