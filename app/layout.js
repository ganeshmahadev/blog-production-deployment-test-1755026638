import './globals.css'

export const metadata = {
  title: 'Production Deployment Test',
  description: '**The Ultimate Guide to Production Deployment Testing: Ensuring Seamless Application Rollouts**',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
