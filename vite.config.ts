import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

const buidType = process.argv.splice(4)[0] || 'dist' // docs

const lib = {
	entry: path.resolve(__dirname, "./src/components/index.ts"), //指定组件编译入口文件
	name: "ChuckCascader",
	fileName: "chuck-cascader",
} //库编译模式配置

// https://vitejs.dev/config/
export default defineConfig({
	base: 'chuck-cascader',
	plugins: [
		vue(),
		dts({
			insertTypesEntry: true,
        	copyDtsFiles: false
		}),
	],
	resolve: {
		alias: {
			// 配置src目录
			"@": path.resolve(__dirname, "src"),
		}
	},
	build: {
			outDir: buidType, // 打包文件的输出目录
			lib: (buidType === 'docs')?false:lib,
			// rollupOptions: {
			// 	// 确保外部化处理那些你不想打包进库的依赖
			// 	external: ["vue"],
			// 	output: {
			// 		// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
			// 		globals: {
			// 			vue: "Vue",
			// 		},
			// 	},
			// }, // rollup打包配置
		},
	css: {
		// css预处理器
		preprocessorOptions: {
		less: {
			charset: false,
			additionalData: '@import "./src/assets/style/global.less";',
		},
		},
	},
})
