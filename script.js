AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.currentTime = 61;
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open(
    "https://api.whatsapp.com/send?text=Makasih%20ya%20udah%20inget%20ulang%20tahun%20aku,%20di%20hari%20spesial%20ini%20aku%20ingin " +
      isi
  );
}

async function tanya() {
  await Swal.fire({
    title: "My Hope For You",
    html: `
        <textarea readonly style="width: 100%; height: 700px; padding: 10px; resize: none; 
                  font-size: 18px; font-family: 'Poppins', sans-serif;" 
                  aria-label="Ucapan">
Selamat Ulang Tahun yaaaa sayanggggkuuuu, cintakuuuuu, Duniaakuuuu😚😚😚

akuu ga begituu biisaa rangkai kata kata sayanggg 🥹🥹,tapiii akuu mau bilang,
Happy birthday yaaa saayangggkuuuuuu

Aku bersyukur banget bisa punya kamu dalam hidupku sayangggggg. 
Kamu selalu bikin hari-hariku lebih indah sayangggg😚😚, indah bangetttttt dan aku nggak tau sayanggg gimana jadinya kalau nggak ada kamu🥹🥹🥹.
Kamu udaaaa bagian dari hidupkuuu bgtttt sayangggggg, dan akuuuu berharap semogaaaa ituuu selamanyaaaa sayanggggg, berharappppp bgttttt.

Makasih yaaaa sayangggg udah selalu ada buat aku dan maaf bangettt kloo akuuuu sering buat kmuu kesel sayangggg😭😭.

Aku berharap di umurmuuu yang ke-20 ini 😚😚 kmuuu lebihhhh bahagia lagiiii sayanggggg, lebihhhh seneng lagiiii sayanggggg, lebihhhh ceriaaaa lagiiii sayanggggg, lebihhhhh sukses lagiiii sayangggggg, dan aku akan berusaha untuk semua ituuuu sayangggggg. Dan jangan lupaaa selalu sayangggg samaa akuuu yaaa sayanggggg😚😚😚.

Keknyaaa akuuu cumaa bisaa ngomong gituuu sayangggggg😭😭. Pokoknyaaa akuuuu akan selalu sayanggggg samaaa kamuuuu sayanggggg, sayanggggg bggtttt, sayangggg teruusssss.
I LOVE YOUUUUU FOREVERRRRRR SAYANGGGGGGKUUUU🥰🥰🥰😚😚😚
        </textarea>
      `,
    showCancelButton: false,
    confirmButtonText: "Tutup",
  });
}

