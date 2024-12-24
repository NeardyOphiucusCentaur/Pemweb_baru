document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('confirmationMessage').style.display = 'block';
  
    alert("Pemesanan sukses dilakukan.");
 
    this.reset();
  });