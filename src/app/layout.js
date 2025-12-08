import './globals.css'

export const metadata = {
  title: 'Herb Immortal - Your Trusted Hub For Holistic Wellness',
  description: 'Access Personalized Wellness Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&family=Onest:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-dm antialiased">
        {children}
      </body>
    </html>
  )
}