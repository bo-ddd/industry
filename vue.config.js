
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
		proxy: {
			'/api': {// 匹配所有以 '/api1'开头的请求路径
				// target: 'http://192.168.1.39:3000',// 代理目标的基础路径 http://8.131.89.181:8080
				target: 'http://192.168.1.22:3000',// 代理目标的基础路径 http://8.131.89.181:8080
				changeOrigin: true,
				pathRewrite: {'^/api': ''}
			},
		}
	}
})