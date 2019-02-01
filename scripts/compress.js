
const path = require('path')

const ora = require('ora')

const imagemin = require('imagemin')

const imageminJpegtran = require('imagemin-jpegtran')

const imageminPngquant = require('imagemin-pngquant')

const imageminGifsicle = require('imagemin-gifsicle')

// const imageminOptipng = require('imagemin-optipng')

// const imageminJpegoptim = require('imagemin-jpegoptim')

const inputDir = path.join(__dirname, '../dist/images')

const entryDir = path.join(__dirname, '../src/images')

console.log('入口地址：', entryDir)

console.log('输出地址：', inputDir)

const spinner = ora('---开始压缩图片---').start()

	imagemin([`${entryDir}/*`], inputDir, {
		plugins: [
			imageminJpegtran(),
			imageminGifsicle(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
    }).then(() => {
		spinner.succeed('图片压缩完成！')
	}).catch(() => {
		spinner.fail('图片压缩失败！')
	})