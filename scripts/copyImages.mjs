import glob from 'glob';
import fs from 'fs';
import path from 'path';

/**
 * Copies images from `content/` into Next.js's `public` directory for static hosting
 */
(function () {
  glob('content/**/*.+(png|jpg|gif|svg)', (error, images) => {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    try {
      for (const image of images) {
        const parts = image.split('/');
        const dir = parts.splice(0, parts.length - 1).join('/');

        fs.mkdirSync(path.join(process.cwd(), `public/${dir}`), { recursive: true });
        fs.copyFileSync(
          path.join(process.cwd(), image),
          path.join(process.cwd(), `public/${image}`),
        );
      }

      console.log(`Copied ${images.length} images into the public directory.`);
      process.exit();
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  });
})();
