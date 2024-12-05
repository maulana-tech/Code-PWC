function myFunction() {
    var person = prompt("Silahkan Masukkan Nama", "Harus huruf!");
    if (person != null) {
        document.getElementById("demo").innerHTML = "Halo " + person + "! tetap semangat kan?";
    }
}