const { createCanvas } = require("canvas");

export const doSomething = async (input: string) => {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");
  ctx.font = "30px Impact";
  ctx.fillText(input, 50, 100);

  // Draw line under text
  var text = ctx.measureText(input);
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + text.width, 102);
  ctx.stroke();

  return canvas.toBuffer();
};
