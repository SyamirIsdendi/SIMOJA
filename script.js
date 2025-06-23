function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      localStorage.removeItem('privacyAccepted'); // Reset agar popup muncul setelah login
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login gagal: " + error.message);
    });
}
