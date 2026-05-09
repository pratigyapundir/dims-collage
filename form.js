 function handleSubmit(event) {
        event.preventDefault(); // stop default form

        const form = document.getElementById("admissionForm");
        const formData = new FormData(form);

        // Send form data using fetch POST
        fetch("/cgi-bin/form.cgi", {
          method: "POST",
          body: formData
        })
      .then(response => response.text())
      .then(data => {
        // ✅ Show next page or redirect
        window.location.href = "/dims-collage/next.html";  // or show confirmation inline
        })
        .catch(error => {
          alert("Submission failed.");
          console.error(error);
        });
      }