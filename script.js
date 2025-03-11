let pswrd = document.getElementById("pswrd");
let toggleBtn = document.getElementById("toggleBtn");

const rules = {
  lower: /[a-z]/,
  upper: /[A-Z]/,
  number: /[0-9]/,
  special: /[!@#$%^&*()_+{}[\]:;<>,.?/~`|-]/,
  length: /.{8,}/,
};

function checkPassword(data) {
  Object.keys(rules).forEach((rule) => {
    document
      .getElementById(rule)
      .classList.toggle("valid", rules[rule].test(data));
  });
}

// Show/Hide Password
toggleBtn.onclick = () => {
  const isPassword = pswrd.type === "password";
  pswrd.type = isPassword ? "text" : "password";
  toggleBtn.classList.toggle("hide", isPassword);
};
