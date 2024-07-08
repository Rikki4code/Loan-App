const loan_form = document.querySelector(".loan-sec")
loan_form.addEventListener("submit", calculate_loan
)

function calculate_loan(event){
    event.preventDefault()
let borrowed_amount = Number(document.querySelector(".btn-amount").value)
let payment_duration = Number(document.querySelector(".btn-payment").value)
let rate = 0.5

if(borrowed_amount < 100000)
{alert("Oopss you can borrow only above 100000")}
else if(payment_duration > 24)
{alert("Oops the maximum payment duration is 24 months")}
else{
interest = (borrowed_amount * payment_duration * rate )/12
document.querySelector('.balance').innerHTML=interest.toFixed(1)

amount = interest + borrowed_amount
document.querySelector('.amount').innerHTML = amount.toFixed(1)
}

}

function ResetApp(){
    document.querySelector('.balance').innerHTML= "0.0"
   document.querySelector('.amount').innerHTML = "0.0"

}

document.querySelector('.reset').addEventListener('click', ResetApp)
