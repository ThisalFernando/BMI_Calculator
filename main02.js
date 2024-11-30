document.getElementById("formBMI").addEventListener("submit", function(event){
    event.preventDefault();
    calcBMI();
});



function calcBMI(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    //check the inputs of the fields
    if(isNaN(height) && isNaN(weight)){
        Swal.fire({
            title: "WRANING!",
            text: "Please enter height and weight!",
            icon: "warning",
            button: true,
            dangerMode: true,
        });
        return false;
    }

    if(isNaN(height) || height <= 0){
        Swal.fire({
            title: "WARNING!",
            text: "Please enter valid height!",
            icon: "warning",
            button: true,
            dangerMode: true,
        });
        return false;
    }

    if(isNaN(weight) || weight <= 0){
        Swal.fire({
            title: "WARNING!",
            text: "Please enter valid weight!",
            icon: "warning",
            button: true,
            dangerMode: true,
        });
        return false;
    }

    //convert height from cm to m
    height = height / 100;

    let bmi = weight / (height * height);
    let result = "Your BMI: " + bmi.toFixed(2) + ". ";

    if(bmi < 18.5){
        result += "You have a underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9){
        result += "You have a normal weight";
    }
    if(bmi >= 25 && bmi < 29.9){
        result += "You have a over weight";
    }

    document.getElementById("result").textContent = result;

}

function isClear(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if(isNaN(height) && isNaN(weight)){
        Swal.fire({
            title: "WARNING!",
            text: "No values to clear!",
            icon: "warning",
            button: true,
            dangerMode: true,
        });
        return false;
    }
    else{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you need to clear values?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Clear it!",
            cancelButtonText: "No, Cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Cleared!",
                text: "Values has been cleared!",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire({
                title: "Cancelled",
                text: "Vakue are not cleared!:)",
                icon: "error"
              });
            }
          });          
    }
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function closeForm() {
    document.getElementById("formContainer").style.display = "none";
}
