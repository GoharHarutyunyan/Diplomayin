const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(registerForm);
  const data = new URLSearchParams(formData);
  
  const response = await fetch("/register", {
      method: "POST",
      body: data,
    });
    
    const result = await response.json();


    if(result.success) {
        window.location.href = "/login"
    }
  
  alert(result.message)

 
});
