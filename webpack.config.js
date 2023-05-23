const path = require('path');
//Basically this file is a Node script

module.exports = (env) => {
    console.log('enviroment: ',env)
    const isProduction = env === 'production';
    
    return {
        mode: env.developement || 'production',
        entry: ['./src/App.js' ],
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
                },{
                    use: ['style-loader', 'css-loader'],
                    test: /\.css|\.scss$/
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, './public'),
                watch: true // Stops from rebuilding on changes
            },
            client: {
                overlay: false,
            },
        },
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        
    }
};
