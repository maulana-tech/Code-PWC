const projects = [
    { nomor: 1, nama: "Web Portfolio", deskripsi: "Membuat website portofolio pribadi.", tanggal: "2024-12-01" },
    { nomor: 2, nama: "LaparPak App", deskripsi: "Aplikasi berbasis web untuk mendistribusikan makanan kepada yang membutuhkan.", tanggal: "2024-11-15" },
    { nomor: 3, nama: "Mental Health Platform", deskripsi: "Platform edukasi tentang kesehatan mental.", tanggal: "2024-10-10" }
  ];
  
  function populateTable() {
    const tableBody = document.querySelector("#portfolioTable tbody");
  
    projects.forEach(project => {
      const row = document.createElement("tr");
  
      const nomorCell = document.createElement("td");
      nomorCell.textContent = project.nomor;
  
      const namaCell = document.createElement("td");
      namaCell.textContent = project.nama;
  
      const deskripsiCell = document.createElement("td");
      deskripsiCell.textContent = project.deskripsi;
  
      const tanggalCell = document.createElement("td");
      tanggalCell.textContent = project.tanggal;
  
      row.appendChild(nomorCell);
      row.appendChild(namaCell);
      row.appendChild(deskripsiCell);
      row.appendChild(tanggalCell);
  
      tableBody.appendChild(row);
    });
  }
  
document.addEventListener("DOMContentLoaded", populateTable);
  

document.addEventListener('DOMContentLoaded', function() {
    displayProjects();

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            document.getElementById('formMessage').textContent = "Pesan berhasil dikirim!";
            this.reset();
        }
    });

document.getElementById('changeColorButton').addEventListener('click', function() {

    const colorPicker = document.createElement('input');
    colorPicker.type = 'text';
    colorPicker.placeholder = 'Masukkan warna (hex, rgb, atau rgba)';
  
    colorPicker.addEventListener('input', function() {

        document.body.style.backgroundColor = colorPicker.value;
    });
  
    colorPicker.focus();
  });
});