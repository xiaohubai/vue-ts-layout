//mock用于生产环境
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import index from './index'

export function setupProdMockServer() {
	createProdMockServer([...index])
}