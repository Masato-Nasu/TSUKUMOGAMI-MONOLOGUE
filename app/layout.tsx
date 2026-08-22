import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"付喪神の独り言",description:"身の回りの物を撮ると、付喪神が誰にも聞かせるつもりのなかった独り言をひとつだけ漏らします。",manifest:"/manifest.webmanifest",themeColor:"#eee9df",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
