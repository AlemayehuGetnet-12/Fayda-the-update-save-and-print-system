// IMAGE PREVIEW
const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");
const cardPhoto = document.getElementById("cardPhoto");

photoInput.addEventListener("change", function(){

  const file = this.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(e){

      preview.src = e.target.result;
      cardPhoto.src = e.target.result;

    };

    reader.readAsDataURL(file);

  }

});

// SAVE DATA
function saveData(){

  // GET VALUES
  const fullname = document.getElementById("fullname").value;
  const fiydaNumber = document.getElementById("fiydaNumber").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;

  const country = document.getElementById("country").value;
  const region = document.getElementById("region").value;
  const zone = document.getElementById("zone").value;
  const woreda = document.getElementById("woreda").value;
  const kebele = document.getElementById("kebele").value;

  // VALIDATION
  if(fullname === "" || fiydaNumber === ""){

    alert("Please enter Full Name and Fiyda Number");
    return;

  }

  // UPDATE CARD
  document.getElementById("cardName").innerText = fullname;
  document.getElementById("cardFiyda").innerText = fiydaNumber;

  document.getElementById("cardPhone").innerText = phone;
  document.getElementById("cardEmail").innerText = email;
  document.getElementById("cardAge").innerText = age;
  document.getElementById("cardSex").innerText = sex;

  document.getElementById("cardCountry").innerText = country;
  document.getElementById("cardRegion").innerText = region;
  document.getElementById("cardZone").innerText = zone;
  document.getElementById("cardWoreda").innerText = woreda;
  document.getElementById("cardKebele").innerText = kebele;

  // LOCAL STORAGE
  const fiydaData = {

    fullname,
    fiydaNumber,
    phone,
    email,
    age,
    sex,
    country,
    region,
    zone,
    woreda,
    kebele,
    photo: cardPhoto.src

  };

  localStorage.setItem("fiydaData", JSON.stringify(fiydaData));

  alert("Data Saved Successfully");

}

// LOAD DATA
window.onload = function(){

  const savedData = JSON.parse(localStorage.getItem("fiydaData"));

  if(savedData){

    document.getElementById("fullname").value = savedData.fullname;
    document.getElementById("fiydaNumber").value = savedData.fiydaNumber;
    document.getElementById("phone").value = savedData.phone;
    document.getElementById("email").value = savedData.email;
    document.getElementById("age").value = savedData.age;
    document.getElementById("sex").value = savedData.sex;

    document.getElementById("country").value = savedData.country;
    document.getElementById("region").value = savedData.region;
    document.getElementById("zone").value = savedData.zone;
    document.getElementById("woreda").value = savedData.woreda;
    document.getElementById("kebele").value = savedData.kebele;

    preview.src = savedData.photo;
    cardPhoto.src = savedData.photo;

    document.getElementById("cardName").innerText = savedData.fullname;
    document.getElementById("cardFiyda").innerText = savedData.fiydaNumber;

    document.getElementById("cardPhone").innerText = savedData.phone;
    document.getElementById("cardEmail").innerText = savedData.email;
    document.getElementById("cardAge").innerText = savedData.age;
    document.getElementById("cardSex").innerText = savedData.sex;

    document.getElementById("cardCountry").innerText = savedData.country;
    document.getElementById("cardRegion").innerText = savedData.region;
    document.getElementById("cardZone").innerText = savedData.zone;
    document.getElementById("cardWoreda").innerText = savedData.woreda;
    document.getElementById("cardKebele").innerText = savedData.kebele;

  }

};

// UPDATE DATA
function updateData(){

  saveData();

  alert("Data Updated Successfully");

}

// DELETE DATA
function deleteData(){

  const confirmDelete = confirm("Are you sure you want to delete this data?");

  if(confirmDelete){

    // REMOVE STORAGE
    localStorage.removeItem("fiydaData");

    // RESET FORM
    document.getElementById("fiydaForm").reset();

    // RESET IMAGE
    preview.src =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    cardPhoto.src =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    // RESET CARD
    document.getElementById("cardName").innerText = "Full Name";
    document.getElementById("cardFiyda").innerText = "Fiyda Number";

    document.getElementById("cardPhone").innerText = "---";
    document.getElementById("cardEmail").innerText = "---";
    document.getElementById("cardAge").innerText = "---";
    document.getElementById("cardSex").innerText = "---";

    document.getElementById("cardCountry").innerText = "---";
    document.getElementById("cardRegion").innerText = "---";
    document.getElementById("cardZone").innerText = "---";
    document.getElementById("cardWoreda").innerText = "---";
    document.getElementById("cardKebele").innerText = "---";

    alert("Data Deleted Successfully");

  }

}

// PRINT CARD
function printCard(){

  window.print();

}