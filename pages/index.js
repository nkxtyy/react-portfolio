import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import krit from "../public/krit.png";
import k1 from "../public/k1.png";
import k2 from "../public/k2.png";
import k3 from "../public/k3.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kriti Narayanan Portfolio</title>
        <meta name="description" content="Portfolio of Kriti Narayanan, a developer and designer proficient in modern technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl md:text-2xl font-semibold dark:text-slate-100">Kriti Narayanan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl dark:text-white" 
                />
              </li>
              <li>
                <a className="nav-link dark:text-white px-4 py-2 rounded-md font-bold" onClick={() => scrollToSection('skills')}>Skills</a>
              </li>
              <li>
                <a className="nav-link dark:text-white px-4 py-2 rounded-md font-bold" onClick={() => scrollToSection('works')}>Works</a>
              </li>
              <li>
                <a className="nav-link dark:text-white px-4 py-2 rounded-md font-bold" onClick={() => scrollToSection('contact')}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center md:items-start p-1 mb-20">
            <div className="text-left md:w-1/2">
              <h2 className="text-6xl py-2 text-purple-600 font-bold md:text-7xl">Hello!</h2>
              <h3 className="text-3xl py-2 md:text-4xl dark:text-white font-bold">I am Kriti, a</h3>
              <h3 className="text-3xl py-2 md:text-4xl dark:text-white font-bold">Developer and Designer</h3>
              <h3 className="text-3xl py-2 md:text-4xl dark:text-white font-bold">based in Delhi.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
                I am a passionate computer science enthusiast proficient in C++, Python, JavaScript, SQL, and React.js. 
                My experience spans data visualization, data mining, and cloud technologies.
              </p>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 mt-10 md:mt-0 overflow-hidden md:h-70 md:w-70">
              <Image src={krit} layout="fill" objectFit="cover" alt="Kriti Narayanan" />
            </div>
          </div>
          
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-300" id="contact">
            <a href="mailto:othersss2020@gmail.com">
              <AiFillMail />
            </a>
            <a href="https://www.linkedin.com/in/kriti-narayanan-04369725b">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/nkxtyy">
              <AiFillGithub />
            </a>
          </div>
        </section>
        
        <section id="skills">
          <div className="m-20">
            <h3 className="text-3xl py-1 dark:text-gray-300">Skills and Expertise</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
            Here are some of the key skills I utilized in my projects, contributing to their development and success.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={k1} width={150} height={150} alt="C++ Services"/>
              <h3 className="text-lg font-medium pt-8 pb-2">C++</h3>
              <p className="py-2">
                Proficient in C++ programming with a focus on algorithm design, data structures, and software development.
              </p>
              <h4 className="py-4 text-purple-600">Skills I use</h4>
              <p className="text-gray-800 py-1">Object-Oriented Programming</p>
              <p className="text-gray-800 py-1">STL</p>
              <p className="text-gray-800 py-1">Algorithm Optimization</p>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={k2} width={150} height={150} alt="Data Analytics Services" />
              <h3 className="text-lg font-medium pt-8 pb-2">Data Analytics</h3>
              <p className="py-2">
                Expert in data analytics, focusing on data visualization, mining, and providing actionable insights.
              </p>
              <h4 className="py-4 text-purple-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Python (Pandas, NumPy)</p>
              <p className="text-gray-800 py-1">Tableau</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={k3} width={150} height={150} alt="Website Project Services" />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
              <p className="py-2">
              Proficient in creating dynamic, responsive websites with a focus on performance and user experience. 
              </p>
              <h4 className="py-4 text-purple-600">Technologies I use</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">CSS & Tailwind</p>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}

