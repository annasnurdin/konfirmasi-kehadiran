const form = document.getElementById('confirmationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Ganti URL dengan URL webhook kamu
  const webhookUrl = 'https://script.google.com/macros/s/AKfycbyBXt5wnHKEEbr6upG5sebWS2GbNQR6O4HdzZlHAsaISK-AP7dzVaEhrWIFGxEb3tgofw/exec';

  fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('message').classList.remove('hidden');
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    // Tambahkan pesan error untuk pengguna di sini
    document.getElementById('message').textContent = 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.';
    document.getElementById('message').classList.remove('hidden');
  });
});
