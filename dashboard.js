const tempRef = db.ref("sensor/suhu");
const humRef = db.ref("sensor/humidity");
const arusRef = db.ref("sensor/arus");
const relayRef = db.ref("relayStatus"); // ← ini diperbaiki ya!

tempRef.on('value', (snapshot) => {
  document.getElementById("temp").textContent = snapshot.val();
});

humRef.on('value', (snapshot) => {
  document.getElementById("humidity").textContent = snapshot.val();
});

arusRef.on('value', (snapshot) => {
  document.getElementById("current").textContent = snapshot.val();
});

relayRef.on('value', (snapshot) => {
  document.getElementById("relay").textContent = snapshot.val();
});

