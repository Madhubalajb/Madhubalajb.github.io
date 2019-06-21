let imagemin = require("imagemin"),
    webp = require("imagemin-webp"),
    outputFolder = "./src/components/images",
    PNGImages = "./src/components/images/*.png",
    JPEGImages = "./src/components/images/*.jpg";

imagemin([PNGImages], outputFolder, {
    plugins: [webp({
        loassless: true
    })]
});

imagemin([JPEGImages], outputFolder, {
    plugins: [webp({
        quality: 65
    })]
});