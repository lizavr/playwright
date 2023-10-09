import { readFileSync } from 'fs';
import { PNG } from 'pngjs';
import { ssim } from 'image-ssim';

function getSSIM(imageBuffer1, imageBuffer2) {
  const img1 = PNG.sync.read(imageBuffer1);
  const img2 = PNG.sync.read(imageBuffer2);
  const { mssim } = ssim(img1.data, img2.data);
  return mssim;
}