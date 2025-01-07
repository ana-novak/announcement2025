document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://docs.google.com/forms/d/e/1FAIpQLSfmWGGHjoV4tnFceQa8n_AcH4JL6NBo8lsP9S2m7klB3lJAng/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors' // Prevent CORS errors
  }).then(() => {
    const message = document.getElementById("responseMessage");
    message.classList.remove("hidden");
    message.classList.add("visible");
    // Через 3 секунды скрываем сообщение
    setTimeout(() => {
      message.classList.remove("visible");
      message.classList.add("hidden");
    }, 3000);
    form.reset(); // Reset the form
  }).catch(() => {
    alert('There was an error submitting your RSVP. Please try again later.');
  });
});
