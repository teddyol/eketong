const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist',
]

module.exports = {
  entry: {
    'app'	: './src/assets/js/app.js',
    'index'	: './src/assets/js/index.js',
    'test'	: './src/assets/js/test.js',
    'intro'	: './src/assets/js/intro.js',
    'pay'	: './src/assets/js/pay.js',
    'attract'	: './src/assets/js/attract.js',
    'contact'	: './src/assets/js/contact.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
  },
  plugins:[
  	//首页
    new HtmlWebpackPlugin({
      template:'./src/pages/index.html',
      filename:'index.html',
      minify:{
        collapseWhitespace:false,
      },
      hash:true,
      chunks:['app','index']
    }),
    //测试页
    new HtmlWebpackPlugin({
      template:'./src/pages/test.html',
      filename:'test.html',
      minify:{
        collapseWhitespace:false,
      },
      hash:true,
      chunks:['test']
    }),
    //功能介绍
    new HtmlWebpackPlugin({
    	template:'./src/pages/intro.html',
	    filename:'intro.html',
	    minify:{
	      collapseWhitespace:false,
	  	},
	  	hash:true,
	  	chunks:['app','intro']
	  }),
	  //功能介绍-移动端详情
    new HtmlWebpackPlugin({
    	template:'./src/pages/introDetails.html',
	    filename:'introDetails.html',
	    minify:{
	      collapseWhitespace:false,
	  	},
	  	hash:true,
	  	chunks:['app','intro']
	  }),
	  //聚合支付
	  new HtmlWebpackPlugin({
    	template:'./src/pages/pay.html',
	    filename:'pay.html',
	    minify:{
	      collapseWhitespace:false,
	    },
	    hash:true,
	    chunks:['app','pay']
	  }),
	  //招商代理
	  new HtmlWebpackPlugin({
    	template:'./src/pages/attract.html',
	    filename:'attract.html',
	    minify:{
	      collapseWhitespace:false,
	    },
	    hash:true,
	    chunks:['app','attract']
	  }),
	  //关于我们
	  new HtmlWebpackPlugin({
		  template:'./src/pages/contact.html',
		  filename:'contact.html',
		  minify:{
		    collapseWhitespace:false,
		  },
		  hash:true,
		  chunks:['app','contact']
		}),
		//公共头部
		new HtmlWebpackPlugin({
      template:'./src/pages/header.html',
      filename:'header.html',
      minify:{
        collapseWhitespace:false,
      },
      hash:true,
      chunks:[]
    }),
    //公共尾部
    new HtmlWebpackPlugin({
      template:'./src/pages/footer.html',
      filename:'footer.html',
      minify:{
        collapseWhitespace:false,
      },
      hash:true,
      chunks:[]
    }),
	  new CleanWebpackPlugin(pathsToClean),
	  new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    open:true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:['css-loader','postcss-loader']
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]',
              outputPath:'images/'
            }
          },
          // {压缩图片
          //   loader: 'image-webpack-loader',
          //   options: {
          //     bypassOnDebug: true,
          //   }
          // }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'file-loader?limit=1000000'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
    ]
  },
}
