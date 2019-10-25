const path = require('path');
//Basically this file is a Node script

module.exports = (env) => {
    console.log('enviroment: ',env)
    const isProduction = env === 'production';
    
    return {
        mode: env,
        entry: './src/main.js',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        },
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        }  
    }
};
