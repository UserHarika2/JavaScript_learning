
class ATM {
    constructor(name,pin, balance) {
         this.name = name;
        this.balance = balance;
        this.pin = pin;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance";
        }

        this.balance -= amount;
        return `Amount of ${amount} successfully withdrawn`;
    }

    deposit(amount) {
        this.balance += amount;
        return `Amount of ${amount} added to your balance`;
    }

    check() {
        return this.balance;
    }
}

let display = document.querySelector("#screen");
let withd = document.querySelector("#withd");
let depo = document.querySelector("#deposit");
let check = document.querySelector("#check");
let pchan=document.querySelector("#pinchange");

withd.disabled = true;
depo.disabled = true;
check.disabled = true;
pchan.disabled = true;
let users = [
    new ATM("Harika", 9848, 1000),
    new ATM("Ravi", 1234, 5000),
    new ATM("Anu", 5678, 2500)
];

const atm = (currentUser) => {
    withd.addEventListener("click", () => {
        let money = Number(prompt("Enter amount"));
        let result = currentUser.withdraw(money);
        display.innerHTML = result;
    });

    depo.addEventListener("click", () => {
        let money = Number(prompt("Enter amount"));
        let result = currentUser.deposit(money);
        display.innerHTML = result;
    });

    check.addEventListener("click", () => {
        display.innerHTML = `Available balance: ${currentUser.check()}`;
    });
};

let pin=Number(prompt("Enter your pin"));
let currentUser = users.find(user => user.pin === pin);

if (currentUser) {
    display.innerHTML=`Welcome ${currentUser.name}`;
    withd.disabled = false;
    depo.disabled = false;
    check.disabled = false;
    pchan.disabled = false;

    atm(currentUser);
} else {
    alert("Invalid PIN");
    display.style.backgroundColor="red";
    display.innerHTML="Invalid pin";
}



