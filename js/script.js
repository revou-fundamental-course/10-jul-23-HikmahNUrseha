document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Ambil nilai berat, tinggi, jenis kelamin, dan usia
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;

  // Konversi tinggi ke meter
  var heightInMeter = height / 100;

  // Hitung BMI
  var bmi = weight / (heightInMeter * heightInMeter);

  // Keterangan batas ambang IMT berdasarkan jenis kelamin dan usia
  var bmiCategory = "";

  //gender lelaki
  if (gender === "male") {
    if (age === "below18") {
      if (bmi < 17) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 17 && bmi < 25) {
        bmiCategory = "Normal";
      } else {
        bmiCategory = "Overweight (Kelebihan berat)";
      }
    } else if (age === "between18and30") {
      if (bmi < 18.5) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    } else if (age === "between31and45") {
      if (bmi < 20) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 20 && bmi < 25) {
        bmiCategory = "Normal";
      } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    } else if (age === "above45") {
      if (bmi < 22) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 22 && bmi < 27) {
        bmiCategory = "Normal";
      } else if (bmi >= 27 && bmi < 32) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    }

    //gender wanita
  } else if (gender === "female") {
    if (age === "below18") {
      if (bmi < 17) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 17 && bmi < 25) {
        bmiCategory = "Normal";
      } else {
        bmiCategory = "Overweight (Kelebihan berat)";
      }
    } else if (age === "between18and30") {
      if (bmi < 18.5) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    } else if (age === "between31and45") {
      if (bmi < 19) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 19 && bmi < 24) {
        bmiCategory = "Normal";
      } else if (bmi >= 24 && bmi < 30) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    } else if (age === "above45") {
      if (bmi < 21) {
        bmiCategory = "Underweight (Kurus)";
      } else if (bmi >= 21 && bmi < 26) {
        bmiCategory = "Normal";
      } else if (bmi >= 26 && bmi < 31) {
        bmiCategory = "Overweight (Kelebihan berat)";
      } else {
        bmiCategory = "Obese (Obesitas)";
      }
    }
  }

  // Tampilkan hasil
  var resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "BMI Anda: " + bmi.toFixed(2) + "<br>Kategori: " + bmiCategory;
});

//reset
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("bmiForm").reset();
  document.getElementById("result").innerHTML = ""; // Menghapus hasil BMI dan kategori
});
