document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const tax = parseFloat(document.getElementById('tax').value);
    const totalAmount = document.getElementById('total_amount');

    totalAmount.value = (amount + tax).toFixed(2);

    this.submit();
});