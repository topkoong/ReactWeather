// __dirname = gives a path to the current folder
module.exports = {
  entry: './app/app.jsx',// this tells the webpack where it should start processing your code.
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    // list of file extensions we wanna process
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] //compile our code from react and es2015
        },
        test: /\.jsx?$/, //regular expression matches any files that has .jsx
        exclude: /(node_modules|bower_components)/ //which folders we wanna ignore
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
