const terminalText = `
> Hello World! 👋
> I'm Avika Joshi
> Winner & Keynote @ Harvard HPAIR | AI & Quantum Dev 💡
> Creating SlayOS 💻 | Building CerebrumAI 🧠
> Let's reshape the future of Tech & Climate 🌏
`;

let i = 0;
const speed = 40;

function typeWriter() {
  if (i < terminalText.length) {
    document.getElementById("terminal").innerHTML += terminalText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
