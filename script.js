const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const kelompok = document.getElementById('kelompok').value;
  const hadir = document.getElementById('hadir').checked ? 'Hadir' : 'Tidak Hadir';

  // Ganti dengan URL webhook Google Apps Script Anda
  const webhookUrl = 'https://script.google.com/macros/s/AKfycbylJYE71b4opeHeKErsyyHvTyqdqg0vtu5jJj1Fdas1grcBXTWDVucuwZS-xg7OoPO0Ig/exec';

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nama, kelompok, hadir })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Tampilkan pesan sukses atau lakukan tindakan lain
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
