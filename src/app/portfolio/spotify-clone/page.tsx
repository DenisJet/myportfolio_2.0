import Link from 'next/link';

export default function SpotifyClone(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl leading-tight font-bold mt-6 mb-5'>Spotify Clone</h1>
        <p className='font-light mb-4 text-lg'>Music platform</p>
        <img src='/projects/spotify-clone.png' alt='site image' />
        <p className='font-light mt-4 text-lg'>
          Implemented loading, listening and deleting music tracks, loading images for the track cover. It is possible
          to leave comments. The music player is also implemented.
        </p>
        <p className='font-light mt-1 text-lg'>
          The project was created using <strong>Nest JS, SSR на Next JS, TypeScript, Mongo DB, Material Ui</strong>.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>Currently in final stages of development</p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link
              href='https://github.com/DenisJet/spotify-clone-client'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/spotify-clone-client
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/spotify-clone-server'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/spotify-clone-server
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
