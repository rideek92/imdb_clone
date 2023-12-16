import './globals.css'
import Headers from "@/app/Components/Headers";
import MainElements from "@/app/Components/MainElements";

export const metadata = {
  title: 'IMDb Clone',
  description: 'Clone aplication IMDb, the movies votes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning className="scrollbar-hide">
      <body className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 ">
      {/* eslint-disable-next-line react/no-children-prop */}
            <MainElements children = {children}/>
      </body>
    </html>
  )
}
