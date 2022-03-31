function goToWhatsapp() {

    var nama = document.getElementById('nama').value;
    var aplikasi = document.getElementById('aplikasi').value;
    var durasi = document.getElementById('durasi').value;
    var payment = document.getElementById('payment').value;

    var url = 'https://wa.me/+6289512599569?text='
    + 'Nama : ' + nama + '%0a'
    + 'Aplikasi : ' + aplikasi + '%0a'
    + 'Durasi : ' + durasi + '%0a'
    + 'Payment : ' + payment;

    window.open(url, '_blank').focus();
}
