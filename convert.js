const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, 'videos');
const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.webm'));

if (files.length === 0) {
    console.error('No .webm videos found in videos/');
    process.exit(1);
}

// Get the latest recorded video (since we might have failed ones)
const latestVideo = files.map(f => ({
    name: f,
    time: fs.statSync(path.join(videosDir, f)).mtime.getTime()
})).sort((a, b) => b.time - a.time)[0].name;

const inputPath = path.join(videosDir, latestVideo);
const outputPath = path.join(videosDir, 'portfolio-promo-final.mp4');

console.log(`Converting ${inputPath} to MP4...`);

const args = [
    '-i', inputPath,
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '18', // High quality
    '-c:a', 'aac',
    '-b:a', '192k',
    '-pix_fmt', 'yuv420p',
    '-y',
    outputPath
];

const ffmpeg = spawn(ffmpegPath, args);

ffmpeg.stdout.on('data', (data) => console.log(data.toString()));
ffmpeg.stderr.on('data', (data) => process.stderr.write(data.toString()));

ffmpeg.on('close', (code) => {
    if (code === 0) {
        console.log(`\nSuccess! Saved final video to ${outputPath}`);
    } else {
        console.error(`FFmpeg process exited with code ${code}`);
    }
});
