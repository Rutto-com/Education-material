document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const transactionCode = document.getElementById('transactionCode').value;
    
    // Here you would typically send the transaction code to your server for verification.
    // For this example, we'll assume the transaction code is always valid.
    
    if (transactionCode) {
        // If the transaction code is valid, show the content section
        document.getElementById('materials').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Invalid transaction code. Please try again.');
    }
});