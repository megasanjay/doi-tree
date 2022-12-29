import Link from 'next/link';

import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Link href="/home">
        <a>Home page</a>
      </Link>
      <ColorSchemeToggle />
    </>
  );
}
