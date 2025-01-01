document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    
    // Reset form
    this.reset();
});