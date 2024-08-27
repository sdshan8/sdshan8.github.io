import { pages } from "./../src/lib/config_pages.js";
import { createCanvas, loadImage } from "canvas";
import fs from "fs";

const width = 1200;
const height = 630;
const source_image = "./static/images/hiura_grad.jpeg";

// Font setting
const font_color = "#ffffff";
const font_max_width = 500;
const font_spacing = 10
const font_x = (width-60+height)/2
// Title Specific
const title_font_size = 50;
const title_font_name = "Arial";
const title_font = `${title_font_size}px ${title_font_name}`;
// Author Specific
const author_font_size = 30;
const author_font_name = "Arial";
const author_font = `italic ${author_font_size}px ${author_font_name}`;

/*
 *TODO
 */

const root = "./static"

function getLines(ctx, text, maxWidth) {
  // I don't know how it does but it works 
  // https://stackoverflow.com/questions/2936112/text-wrap-in-a-canvas-element
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
          currentLine += " " + word;
      } else {
          lines.push(currentLine);
          currentLine = word;
      }
  }
  lines.push(currentLine);
  return lines;
}

for (let page_name in pages.list) {
  const page = pages.list[page_name]

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.textBaseline = "middle";
  context.textAlign = "center";

  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);

  loadImage(source_image).then((image) => {
    context.drawImage(image, 0, 0, height, height);

    context.font = title_font;
    context.fillStyle = font_color
    const lines = getLines(context, page.description, font_max_width)

    const title_font_y = (height - (title_font_size+font_spacing) * lines.length)/2
    
    for (let i = 0; i < lines.length; i++) {
      context.fillText(
        lines[i],
        font_x,
        title_font_y + (title_font_size+font_spacing) * i
      );
    }

    const author_font_y = (height + (title_font_size+font_spacing) * lines.length)/2
    context.font = author_font;
    context.fillText(
      "- Yutsu-chi",
      font_x,
      author_font_y
    );



    // Write the image to file
    const buffer = canvas.toBuffer("image/jpeg");
    fs.writeFileSync(root + page.image, buffer)
    console.info("Generated og image for " + page_name)
  })
}