
// Đăng ký
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Validate thông tin đăng ký
  if (username === "" || email === "" || password === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }
  // Lưu thông tin đăng ký vào local storage
  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Đăng ký thành công!");
});

// Đăng nhập
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;
  // Lấy thông tin đăng ký từ local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Validate thông tin đăng nhập
  if (
    user === null ||
    loginUsername !== user.username ||
    loginPassword !== user.password
  ) {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    return;
  }
  alert("Đăng nhập thành công!");
});
