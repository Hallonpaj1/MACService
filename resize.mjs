import sharp from 'sharp';

async function resize() {
  await sharp('src/assets/logo/LogoTransparent.png')
    .resize({ height: 100 })
    .toFile('src/assets/logo/LogoTransparent-small.png');
    
  await sharp('src/assets/logo/LogoTransparentWhite.png')
    .resize({ height: 100 })
    .toFile('src/assets/logo/LogoTransparentWhite-small.png');
}

resize().catch(console.error);
