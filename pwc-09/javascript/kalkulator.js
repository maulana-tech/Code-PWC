function kalkulatorMini() {
    // Mengambil nilai dari input dan operator
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var pilihan = document.getElementById('operators').value;

    // Melakukan operasi berdasarkan pilihan operator
    if (pilihan === '+') {
        document.getElementById('result').value = n1 + n2;
    } else if (pilihan === '-') {
        document.getElementById('result').value = n1 - n2;
    } else if (pilihan === '*') {
        document.getElementById('result').value = n1 * n2;
    } else if (pilihan === '/') {
        if (n2 !== 0) { // Menghindari pembagian dengan nol
            document.getElementById('result').value = n1 / n2;
        } else {
            document.getElementById('result').value = "Tidak dapat membagi dengan nol";
        }
    } else {
        document.getElementById('result').value = "Operator tidak valid";
    }
}
