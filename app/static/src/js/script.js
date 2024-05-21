document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', function(event) {
      if (input.value.trim() === "") {
          event.preventDefault();
      }
  });

  button.addEventListener('click', function() {
      form.dispatchEvent(new Event('submit'));
  });

  input.addEventListener('input', updateButtonState);

  function updateButtonState() {
      if (input.value.trim() === "") {
          button.classList.add('bg-gray-800');
          button.classList.remove('bg-gray-700');
      } else {
          button.classList.remove('bg-gray-800');
          button.classList.add('bg-gray-700');
      }
  }

  updateButtonState();
});