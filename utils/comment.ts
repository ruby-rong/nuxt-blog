// import config from '@/config'
// // 展示评论
// export const updateGiscusConfig = (config: any) => {
//   const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
//   if (!iframe) return
//   iframe.contentWindow?.postMessage(
//     {
//       giscus: {
//         setConfig: config
//       }
//     },
//     'https://giscus.app'
//   )
// }

// export function useComment(key: any) {
//   const tab = key.substring(1)
//   const { cmtRepCateId, cmtRepId } = useRuntimeConfig().app
//   const hasComment = (config.Comment as any)[tab] && cmtRepCateId && cmtRepId
//   const root = ref<HTMLElement>()
//   onMounted(() => {
//     if (hasComment) {
//       if (cmtRepId && cmtRepCateId) {
//         const script = document.createElement('script')
//         script.src = 'https://giscus.app/client.js'
//         script.setAttribute('data-repo', `ivy-rong/nuxt-blog`)
//         script.setAttribute('data-repo-id', 'R_kgDOK6McQw')
//         script.setAttribute('data-category', 'Announcements')
//         script.setAttribute('data-category-id', 'cmtRepCateId')
//         script.setAttribute('data-mapping', 'pathname')
//         script.setAttribute('data-strict', '0')
//         script.setAttribute('data-reactions-enabled', '1')
//         script.setAttribute('data-emit-metadata', '0')
//         script.setAttribute('data-input-position', 'top')
//         script.setAttribute('data-theme', 'preferred_color_scheme')
//         script.setAttribute('data-lang', 'zh-CN')
//         script.setAttribute('crossorigin', 'anonymous')
//         script.setAttribute('async', '')
//         root.value!.appendChild(script)
//       }
//     }
//   })
//   return { root, hasComment }
// }
