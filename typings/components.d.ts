// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    WmUpload: typeof import('../packages/wmcomponent')['WmUpload']
    WmButton: typeof import('../packages/wmcomponent')['WmButton']
  }

  interface ComponentCustomProperties {
  }
}

export {}
