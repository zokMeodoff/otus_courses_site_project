const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		'bundle.min.js': ['./src/index.js', './src/schedule.js'],
		'bundle.min.css': ['./css/main.css', './css/header.css', './css/footer.css', './css/form.css', './css/course-card.css', './css/schedule.css']
	},
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: '[name]',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }
        },{	
			test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
	resolve: {
        extensions: ['.js', '.css']
    },
	devServer: {
		port: '7000',
		host: '127.0.0.1',
		proxy: {
			'/api': 'http://127.0.0.1:8000'
		}
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
			filename: './index.html',
			inject: true
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'courses.html'),
			filename: './courses.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'schedule.html'),
			filename: './schedule.html',
			inject: true
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'login.html'),
			filename: './login.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'registration.html'),
			filename: './registration.html'
		}),
		new MiniCssExtractPlugin({
			filename: './bundle.min.css'
		})
    ]
};