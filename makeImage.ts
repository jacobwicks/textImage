const { createCanvas } = require("canvas");

async function makeTextImage(input) {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");
  var text = ctx.measureText(input);
  ctx.font = "30px Impact";
  ctx.fillText(input, 50, 100, text.width + 50);
  // Draw line under text
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + text.width, 102);
  ctx.stroke();
  return canvas.toBuffer();
}

export default makeTextImage;
