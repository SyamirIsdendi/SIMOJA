firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html"; // belum login, redirect ke login
    return;
  }

  const db = firebase.database();

  db.ref('sensor').on('value', snapshot => {
    const data = snapshot.val();
    document.getElementById('suhu').textContent = data?.suhu ?? 'N/A';
    document.getElementById('humidity').textContent = data?.humidity ?? 'N/A';
    document.getElementById('arus').textContent = data?.arus ?? 'N/A';
  });

  db.ref('relayStatus').on('value', snapshot => {
    const relay = snapshot.val();
    document.getElementById('relay').textContent = relay ?? 'N/A';
  });
});
