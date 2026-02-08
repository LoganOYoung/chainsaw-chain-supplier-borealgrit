import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Redirect',
}

export default function RegionalGuideRedirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
