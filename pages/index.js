import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import data from '../data/portfolio.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} — {data.title}</title>
        <meta name="description" content={data.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero data={data} />
      <Stats stats={data.stats} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Contact data={data} />
      <Footer data={data} />
    </>
  );
}
