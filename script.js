const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const toggleLink = document.getElementById("toggle-link");
    const toggleMsg = document.getElementById("toggle-msg");
    const formTitle = document.getElementById("form-title");

    // Switch between Sign In and Sign Up
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      signinForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");
      if (signinForm.classList.contains("hidden")) {
        toggleLink.textContent = "Sign In";
        toggleMsg.textContent = "Already have an account?";
        formTitle.textContent = "Sign Up";
      } else {
        toggleLink.textContent = "Sign Up";
        toggleMsg.textContent = "Don't have an account?";
        formTitle.textContent = "Sign In";
      }
    });

    // Sign In handler
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // 👉 You can validate here or send data to backend
      const email = document.getElementById("signin-email").value.trim().toLowerCase();
      const pass = document.getElementById("signin-password").value.trim().toLowerCase();
      

      if (email && pass) {
        // Simulate success
        window.location.href = "/dims-collage/next.html";
      } else {
        alert("Please fill out all fields.");
      }
    });

    // Sign Up handler
    signupForm.addEventListener("submit", async (e)=> {
      e.preventDefault();

      const username = document.getElementById("signup-username").value.trim().toLowerCase();
      const email = document.getElementById("signup-email").value.trim().toLowerCase();
      const pass = document.getElementById("signup-password").value.trim().toLowerCase();
      const confirmPassword = document.getElementById("signup-confirm-password").value.trim().toLowerCase();
      let newUser={
        username:username,
        email:email,
        password:pass,
        confirmPassword:confirmPassword
      };


      if (username && email && pass && confirmPassword) {
        if (pass !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
        // Simulate success
        window.location.href = "/dims-collage/next.html";
      } else {
        alert("Please fill out all fields.");
      }
        let resp= await fetch("http://localhost:9000/users",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(newUser)


        // body:newUser
    });
    alert("User registered successfully!");
  }
);


