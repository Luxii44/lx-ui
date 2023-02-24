import installer from './defaults'
export * from '@wmcomponent/components'
export * from '@wmcomponent/constants'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export const ElementPlusInstall = installer.ElementPlusInstall
export default installer

// export { default as dayjs } from 'dayjs'
