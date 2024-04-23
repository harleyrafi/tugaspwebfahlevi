document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Your payment processing logic can go here
        
        // Show alert
        alert('Pembayaran berhasil! Terima kasih atas pesanan Anda.');
    });
});
