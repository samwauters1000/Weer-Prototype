export const metadata = {
  title: 'Weer - Interactief Prototype',
  description: 'Interactief leermiddel over het weer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  );
}
