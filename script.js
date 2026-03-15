const generated = document.getElementById("generated");
const copyBtn = document.getElementById("copyBtn");
const password = document.getElementById("password");
const bar = document.getElementById("bar");
const toggle = document.getElementById("toggle");

password.addEventListener("input", checkPassword);

function checkPassword(){

let pass = password.value;
document.getElementById("length").innerText =
"Password Length: " + pass.length;

let strength = "Weak";
let time = "Instant";
let suggestion = "Use more characters";

bar.style.width = "30%";
bar.style.background = "red";

if(pass.length > 6){
 strength = "Medium";
 time = "Few minutes";
 suggestion = "Add numbers or symbols";

 bar.style.width = "60%";
 bar.style.background = "orange";
}

if(pass.match(/[A-Z]/) && pass.match(/[0-9]/) && pass.match(/[^A-Za-z0-9]/) && pass.length > 8){
 strength = "Strong";
 time = "Years";
 suggestion = "Great password!";

 bar.style.width = "100%";
 bar.style.background = "green";
}

document.getElementById("strength").innerText = "Strength: " + strength;
document.getElementById("time").innerText = "Estimated crack time: " + time;
document.getElementById("suggestion").innerText = suggestion;

if(strength === "Weak"){
let strongPassword = generatePassword();
generated.innerText = "Suggested strong password: " + strongPassword;
generated.dataset.password = strongPassword;
}else{
generated.innerText = "";
}

}

toggle.addEventListener("click", function(){

if(password.type === "password"){
 password.type = "text";
}else{
 password.type = "password";
}

});

function generatePassword(){

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

let password = "";

for(let i = 0; i < 10; i++){
password += chars[Math.floor(Math.random()*chars.length)];
}

return password;
}

copyBtn.addEventListener("click", function(){

let pass = generated.dataset.password;

if(pass){
navigator.clipboard.writeText(pass);
alert("Password copied!");
}

});
function toggleMode(){
document.body.classList.toggle("dark");
}