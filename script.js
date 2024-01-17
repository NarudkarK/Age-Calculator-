function calculateAge(){
    const birthdateInput = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if(birthdateInput){
        const today = new Date();
        const birthdate = new Date(birthdateInput);

        let ageYears = today.getFullYear() - birthdate.getFullYear();
        let ageMonths = today.getMonth() - birthdate.getMonth();
        let ageDays = today.getDate() - birthdate.getDate();

        if(ageDays < 0){
            ageMonths--;
            ageDays += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }

        if(ageMonths < 0){
            ageYears--;
            ageMonths += 12;
        }

        resultElement.innerText = `Your age is ${ageYears} years, ${ageMonths} months,and ${ageDays} days.`;
       // resultElement.style.color = "green";

    }else{
        resultElement.innerText = "Please enter your BirthDate"
        resultElement.style.color = "red";
    }
}