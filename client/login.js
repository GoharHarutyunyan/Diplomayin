const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const data = new URLSearchParams(formData);

  const response = await fetch("/login", {
    method: "POST",
    body: data,
  });

  const result = await response.json();


 alert(result.message)

 if(result.success) {
    window.location.href = "/"
}

});
