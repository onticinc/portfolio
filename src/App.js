 import React from 'react';
import ResponsivePlayer from './components/responsive-player/ResponsivePlayer';
// import './Main.js';

// IMAGES
import picture from './img/profile_pic.jpeg';

// Eggs
import eggs from './img/eggs.png';
import eggs_1 from './img/eggs_1.png';
import eggs_2 from './img/eggs_2.png';
import eggs_3 from './img/eggs_3.png';

// Portfolio
import ms_icon from './img/ms_icon.png';
import portfolio_1 from './img/portfolio_01.png';
import portfolio_2 from './img/portfolio_02.png';


// Memory Game
import memory_1 from './img/memory_01.png';
import memory_2 from './img/memory_02.png';
import memory_3 from './img/memory_03.png';
import memory_icon from './img/memory_icon.png';

// DJ ONTIC
import ontic_cover from './img/ontic_cover_art.jpg';
import ontic_website from './img/ontic_01.png';
import ontic_website_2 from './img/ontic_02.png';

// Mtn View Lawn
import mtn_view_icon from './img/mtn_view_icon.png';
import mtn_view_1 from './img/mtn_view_01.png';
import mtn_view_2 from './img/mtn_view_02.png';
import mtn_view_3 from './img/mtn_view_03.png';

// Audiostar Website
import audiostar_website_1 from './img/audiostar_01.png';
import audiostar_website_2 from './img/audiostar_02.png';
import audiostar_website_3 from './img/audiostar_03.png';
import audiostar_icon from './img/audiostar_icon.png';

// Audio
import casey from './img/casey.png';
import rectangulo from './img/rectangulo.png';
import studio_a from './img/studio_a.png';
import studio_c from './img/studio_c.png';
import jenn from './img/jenn.png';

// Event Photos
import event_1 from './img/events/01.png';
import event_2 from './img/events/02.png';
import event_3 from './img/events/03.png';
import event_4 from './img/events/04.png';
import event_5 from './img/events/05.png';
import event_6 from './img/events/06.png';
import event_7 from './img/events/07.png';
import event_8 from './img/events/08.png';
import event_10 from './img/events/10.png';
import event_11 from './img/events/11.png';
import event_12 from './img/events/12.png';
import event_13 from './img/events/13.png';
import event_14 from './img/events/14.png';
import event_16 from './img/events/16.png';
import event_17 from './img/events/17.png';
import event_18 from './img/events/18.png';
import event_19 from './img/events/19.png';
import event_20 from './img/events/20.png';
import event_21 from './img/events/21.png';
import event_22 from './img/events/22.png';
import event_23 from './img/events/23.png';
import event_25 from './img/events/25.png';
import event_26 from './img/events/26.png';
import event_27 from './img/events/27.png';
import event_28 from './img/events/28.png';
import event_29 from './img/events/29.png';
import event_30 from './img/events/30.png';
import event_31 from './img/events/31.png';
import event_32 from './img/events/32.png';
import event_33 from './img/events/33.png';
import event_34 from './img/events/34.png';
import event_35 from './img/events/35.png';
import event_36 from './img/events/36.png';
import event_37 from './img/events/37.png';
import event_38 from './img/events/38.png';
import event_39 from './img/events/39.png';
import event_41 from './img/events/41.png';
import event_42 from './img/events/42.png';
import event_43 from './img/events/43.png';
import event_44 from './img/events/44.png';
import event_45 from './img/events/45.png';
import event_46 from './img/events/46.png';
import event_47 from './img/events/47.png';
import event_48 from './img/events/48.png';
import event_49 from './img/events/49.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-body text-white font-poppins pb-10 pt-5">
        <header>
          {/* TOP NAVBAR */}
          <div className="container flex justify-between align-middle mx-auto px-4 md:px-8 lg:px-12 w-full">
            <div className="text-lg font-bold">M-Smith<span className='text-blue-500'>.info</span></div>

            <div className="flex sm-flex space-x-5 items-center">

              {/* Github Icon */}
              <a href="https://github.com/onticinc">
                <svg alt="link to github" className="w-8 h-8 mt-1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/onticinc/">
                <svg alt="link to linkedin profile" className="w-8 h-8  mt-1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>

              <a href="#hire" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Hire Me</button></a>
            </div>
          </div>
        </header>

        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="flex flex-wrap md:flex-nowrap">

            {/* Side Nav Dots */}
            {/* <nav className="inline-block hidden md:block lg:mr-24 lg:w-4 fixed left-percentage xl:block">
              <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                </a>
                <a href="#software" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Software</span>
                </a>
                <a href="#audio" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Audio</span>
                </a>
                <a href="#event" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Events</span>
                </a>
                <a href="#hire" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                </a>
              </div>
            </nav> */}

            {/* Profile Image */}
            <div className="flex flex-wrap max-w-xl justify-center place-items-center">
              <div className="container lg:ml-16">
                <img src={picture} alt="Michael Smith in Nome AK." className="prortfolio_profile_image mt-10 h-screen" />
                <h4 className="mt-5 text white">Bering Sea | Nome Alaska.</h4>
              </div>
            </div>

            {/* HERO TITLE AND BUTTON */}
            <div className="flex flex-wrap mx-auto justify-center place-items-center max-w-xl md:ml-20 mt-16">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center">Create<br />Document<br />Produce</h1>
              <div className="w-full flex justify-center md:text-left">
                <a href="#software"><button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex justify-center items-center space-x-3">
                  <span>View my work.</span>
                </button></a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Websites and Software --> */}
        <div className="container mt-28 sm:mt-32 md:mt-52 flex justify-between items-center mx-auto px-8 md:px-24 w-full">          <section className="w-full">
          <h2 className="text-center text-2xl sm:text-3xl font-bold">Software Projects | Wordpress Sites</h2>
          <div id="software" className="secondary-title flex justify-center mt-10"></div>
          <div className="space-y-12 my-16">

            {/* Podcast Template */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* Phone Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden ">
                <h3 className="text-white text-3xl font-semibold mb-10">Podcast Website Template</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img src={eggs} alt="Eggs Podcast Logo" className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">Podcast Website Template</h3>
                </div>

                <p className="mt-10 font-semibold">This was the capstone project for my 12 week bootcamp at <a className="text-blue-500" href="https://generalassemb.ly/"> General Assembly</a>. I worked on this with <a className="text-blue-500" href="https://github.com/pambonian">Patrick Brennan</a>, another student in my class. </p>

                <p className="mt-5 font-semibold">This project is built with Django and Python, it has a fully functioning blog with auth and password reset on your profile. It will compress the uploaded profile picture and scale it to the correct size. The show list populates from the rss feed for the podcast, which eliminates the need to update the website everytime a new show is published.</p>

                <p className="mt-5 font-semibold">I used the podcast "Eggs" to demonstrate functionality, you can watch the presentation video through the private link posted below.</p>

                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img src={eggs_1} alt="Eggs Podcast Website Screen Shot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={eggs_2} alt="Eggs Podcast Website Screen Shot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={eggs_3} alt="Eggs Podcast Website Screen Shot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                </div>

                <div className="mt-16 justify-right">
                  <a href="https://youtu.be/wwqg7ifEoJU" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold mb-5">View Project Video</button></a>
                  <a href="https://github.com/onticinc/podcast_template" target="_blank" rel="noreferrer"><button className="px-6 py-2 ml-2 mb-5 bg-theme font-bold">View Github</button></a>
                </div>

                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Python</div>
                    <div className="badge">Django</div>
                    <div className="badge">Bootstrap</div>
                    <div className="badge">Postgres</div>
                    <div className="badge">RSS</div>
                  </div>
                </div>
              </div>

            </div>
            {/* End Podcast Template */}


            {/* Personal Portfolio */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* SMALL SCREEN - Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden ">
                <h3 className="text-white text-3xl font-semibold mb-10">Personal Portfolio</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img alt="M-Smith.info website icon." src={ms_icon} className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">Personal Portfolio</h3>
                </div>

                <p className="mt-10 font-semibold">I wanted to learn how to use Tailwind with React and deploy it on a Linode server. Why not do that for my portfolio? I decided to use Linode over AWS because I didn't want to get locked into more expensive hosting. Combining Tailwind with a React App took some getting used to but I was able to figure it out. It reminds me of Bootstrap with a little more functionality.</p>
                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img alt="m-smith.info website screen shot" src={portfolio_1} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img alt="m-smith.info website screen shot" src={portfolio_2} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                </div>

                {/* Buttons */}
                <div className="mt-16 justify-right">
                  <a href="https://github.com/onticinc/m-smith" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">View Github</button></a>
                </div>

                {/* Built With */}
                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Tailwind</div>
                    <div className="badge">React</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Personal Portfolio */}


            {/* Start Memory Game */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* SMALL SCREEN - Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden ">
                <h3 className="text-white text-3xl font-semibold mb-10">Memory Game</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img src={memory_icon} alt="Merory Game Icon" className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">Memory Game</h3>
                </div>

                <p className="mt-10">I made this game while I was in the <a className="text-blue-500 font-bold" href="https://generalassemb.ly/">General Assembly</a> 12 week full stack program. It was the first major project for the program and I spent a ton of time figuring out flex CSS and getting the layout to scale on mobile screens.</p>
                <p className="mt-5">It was right before christmas so I decided to make something that my niece and nephews would enjoy. I gave them the link on Christmas Morning.</p>
                <p className="mt-5">Eventually, I would like to redesign this and add more functionality. Like choosing how many pairs of cards you want, adding extra players, and making custom icons. I would also simplify the code.</p>

                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img src={memory_2} alt="memory game screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={memory_3} alt="memory game screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={memory_1} alt="memory game screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />                 
                </div>

                {/* Buttons */}
                <div className="mt-16 justify-right">
                  <a href="https://onticinc.github.io/card_match_game/" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">View Game</button></a>
                  <a href="https://github.com/onticinc/card_match_game" target="_blank" rel="noreferrer"><button className="px-6 py-2 ml-2 bg-theme font-bold">View Github</button></a>
                </div>

                {/* Built With */}
                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Javascript</div>
                    <div className="badge">HTML</div>
                    <div className="badge">CSS</div>
                    <div className="badge">Font Awesome</div>
                    <div className="badge">Bulma</div>
                  </div>
                </div>
              </div>

            </div>
            {/* End Memory Game */}

            {/* Start Audiostar */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* SMALL SCREEN - Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden ">
                <h3 className="text-white text-3xl font-semibold mb-10">Audiostar Website</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img src={audiostar_icon} alt="Audiostar Website Screen Shot" className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">Audiostar Website</h3>
                </div>

                <p className="text white mt-10 mb-10">Audiostar is my portfolio for anything Audio related. It is a fairly straight forward wordpress site. Nothing fancy. </p>

                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img src={audiostar_website_3} alt="audiostar website screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={audiostar_website_1} alt="audiostar website screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img src={audiostar_website_2} alt="audiostar website screenshot" className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                </div>

                {/* Buttons */}
                <div className="mt-16 justify-right">
                  <a href="https://www.audiostarinc.com" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">View Website</button></a>
                </div>

                {/* Built With */}
                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Wordpress</div>
                    <div className="badge">CSS</div>
                  </div>
                </div>
              </div>

            </div>
            {/* End Audiostar */}

            {/* Start DJ Ontic */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* SMALL SCREEN - Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden container">
                <h3 className="text-white text-3xl font-semibold mb-10">DJ Ontic</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img src={ontic_cover} alt="M-Smith.info Icon" className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">DJ Ontic</h3>
                </div>
                <p className="text white mt-10 mb-10">I started working as a dj in 1996, my first paid gig was on NYE of that year. I used to call my business 90 Decibels becuase that was the volume I was allowed to play music at for those first few gigs. Eventually, I switched to Ontic which stands for On Time. I like to arrive early for gigs because it allows time for a proper setup and time to diagnose any problems that may arrise.</p>

                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img alt="screen shot of dj ontic website" src={ontic_website_2} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                  <img alt="screen shot of dj ontic website" src={ontic_website} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" />
                </div>

                {/* Buttons */}
                <div className="mt-16 justify-right">
                  <a href="https://www.djontic.com" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">View Website</button></a>
                </div>

                {/* Built With */}
                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Wordpress</div>
                    <div className="badge">CSS</div>
                  </div>
                </div>
              </div>

            </div>
            {/* End DJ Ontic */}

            {/* Start Mtn View Lawn */}
            <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              
              {/* SMALL SCREEN - Title */}
              <div className="flex flex-wrap justify-center text-center lg:hidden ">
                <h3 className="text-white text-3xl font-semibold mb-10">Mountain View Lawn Care</h3>
              </div>

              {/* <!-- Project logo --> */}
              <div className="mb-6 lg:mb-0">
                <img src={mtn_view_icon} alt="Mountain View Lawncare Icon" className="img_300" />
              </div>

              {/* <!-- Project info --> */}
              <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                {/* Title */}
                <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold mb-10">Mountain View Lawn Care</h3>
                </div>

                <p className="text white mt-10 mb-10">When covid hit, my event calendar went from really busy to no gigs in the near future. I started Mountain View Lawn Care as a way to help pay the bills. I enjoy landscaping as a hobbie just to stay in shape, not as a fulltime job. I didn't intend on doing it longer than needed. </p>

                <p className="text white mb-10">This website is essentially a portfolio of the landscaping work that I did at my parents house in Idaho. They had a very large pine tree growing too close to the house, when we took it out it left a large area that needed a rock wall. That simple tree removal turned into a three year project that was allot fun to work on. You can watch a timelapse video of the entire project on the website.</p>

                {/* Images */}
                <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mt-10">
                  <img src={mtn_view_1} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" alt="Mountain View Lawncare Website Screen Shot" />
                  <img src={mtn_view_2} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" alt="Mountain View Lawncare Website Screen Shot" />
                  <img src={mtn_view_3} className="w-full pr-5 h-36 lg:h-72 object-cover responsive" alt="Mountain View Lawncare Website Screen Shot" />
                </div>

                {/* Buttons */}
                <div className="mt-16 justify-right">
                  <a href="https://www.mtnviewlawn.com" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">View Website</button></a>
                </div>

                {/* Built With */}
                <div className="container">
                  <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Built With:</h4>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                    <div className="badge">Wordpress</div>
                    <div className="badge">CSS</div>
                  </div>
                </div>
              </div>

            </div>
            {/* End Mtn View Lawn */}

          </div>
        </section>
        </div>

        {/* <!-- Audio Projects --> */}
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 className="text-center text-2xl sm:text-3xl font-bold">Audio Projects</h2>
            <div id="audio" className="secondary-title flex justify-center mt-10"></div>
            <div className="space-y-12 my-16">      

              {/* Erich Friedrick */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold mb-5">Erich Friedrick (Studio Recording)</h3>
                  <h4 className="text-white text-2xl font-semi-bold mb-5">"Follow Me"</h4>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={studio_c} alt="Studio C at Shoreline Studios." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold mb-5">Erich Friedrick (Studio Recording)</h3>
                    <h4 className="text-white text-2xl font-semi-bold">"Follow Me"</h4>
                  </div>

                  <p className="text-white font-semibold mt-5 mb-5">Recorded at Shoreline Studios.</p>
                  <p className="text white mb-10">As you can tell by listening to this recording, Eric is a very talented musician. This was an amazing experience for me because it was the first time I was able to record a Hammond B3 Organ. I think the finished product sounds great and I hope to be able to record Erich again someday. </p>
                  
                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/follow-me-erich-friedrick" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="https://app.shoreline.edu/sccstudio/equipment.asp" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Shoreline Studios</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Equipment | Software:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Logic Pro</div>
                      <div className="badge">Sony MX 3036 Console</div>
                      <div className="badge">Distressor EL8</div>
                      <div className="badge">Neumann TL 103</div>
                      <div className="badge">Earthworks QTC30</div>
                      <div className="badge">Royer 121</div>
                    </div>
                  </div>
                </div>

              </div>
              {/* End Eric Friedrick */}
              

              {/* Jenn Blosil */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold mb-5">Jen Blossil (Live Recording)</h3>
                  <h4 className="text-white text-2xl font-semi-bold">"I'm Tired"</h4>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={jenn} alt="Jen Blossil." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold mb-5">Jenn Blosil (Live Recording)</h3>
                    <h4 className="text-white text-2xl font-semi-bold">"I'm Tired"</h4>
                  </div>
                  <p className="text white mt-10 mb-10">Jenn Blosil has a very unique voice and an amazing personality. You can listen to her music on spotify and see her perform on American Idol. I really enjoyed working with her and hope to do it again sometime. </p>
                  
                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/jen-blossil-im-tired" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="https://open.spotify.com/artist/0l044F6bMOeoWWvk4Neru8?si=AVlij17bReehhZ27Ti884A" target="_blank" rel="noreferrer"><button className="px-6 py-2 mb-5 bg-theme font-bold">Listen to Jenn on Spotify.</button></a>
                    <a href="https://www.youtube.com/watch?v=3f42T2IU9A4" target="_blank" rel="noreferrer"><button className="xl:ml-5 px-6 py-2 bg-theme font-bold">Watch Jenn on Americon Idol</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Equipment | Software:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">SM58</div>
                      <div className="badge">X32 Rack</div>
                      <div className="badge">Distressor EL8</div>
                      <div className="badge">Neumann TL 103</div>
                      <div className="badge">Earthworks QTC30</div>
                      <div className="badge">Royer 121</div>
                    </div>
                  </div>
                </div>

              </div>
              {/* End Jenn Blosil */}


              {/* Rectangulo Can Count */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold">Rectangulo Can Count</h3>
                  <h4 className="text-white text-1xl font-semi-bold mt-10">Children's Audio Book.</h4>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={rectangulo} alt="Rectangulo Audio Book" className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">Rectangulo Can Count</h3>
                    <h4 className="text-white text-1xl font-semi-bold">Children's Audio Book.</h4>
                  </div>

                  <p className="text white mt-10 mb-10">Rectangulo can count is childrens book to help them learn how to count in Spanish. The audio book is really helpful so they can hear how to pronounce the words. I really enjoyed working on this project and would love to do similar projects in the future.  </p>
                  
                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/rectangulo-can-count-audio-book" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="https://campbellsresort.com/" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Buy the Book</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Edited With:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Protools</div>
                    </div>
                  </div>

                </div>

              </div>
              {/* End Rectangulo */}
              
              {/* Start Carolina */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold">"Carolina"</h3>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={studio_a} alt="Studio A Shoreline Studios." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">"Carolina"</h3> 
                  </div>

                  <p className="text white mt-10 mb-10">Mixed at Shoreline Studios.</p>
                  <p className="text white mt-10 mb-10">Shoreling Studios provided me with the stems and I mixed them in Studio C on the Toft cosole. I really like how this mix turned out, always fun to work on a analog board with outboard gear.</p>
                  
                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/carolina-mix-down" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="https://app.shoreline.edu/sccstudio/equipment.asp" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Shoreline Studios</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Equipment | Software:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Protools</div>
                      <div className="badge">Toft Audio ATB-32a</div>
                      <div className="badge">Distressor EL8</div>
                    
                    </div>
                  </div>
                </div>

              </div>
              {/* End Carolina */}

              {/* Start Casey Connor */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold">Casey Connor</h3>
                  <h4 className="text-white text-1xl font-semi-bold">Campbells Resort, Chelan WA.</h4>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={casey} alt="Casey Connor playing the guitar at Campbells Resort in Lake Chelan." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">Casey Connor</h3>
                    <h4 className="text-white text-1xl font-semi-bold">Live at Campbells Resort, Chelan WA.</h4>
                  </div>

                  <p className="text white mt-10">This was at a wedding ceremony. After the soundcheck, I decided to hit record because I loved his voice and the ambient sound around the lake was amazing. If you listen close, you can hear birds and people enjoying the lake in the distance. It made for a very unique recording and I love how it turned out!</p>
                  <h4 className="mt-10 text-white text-1xl font-semi-bold">Recorded and Edited With:</h4>

                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/casey-conner-live-at-campbells-resort-lake-chelan" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="https://campbellsresort.com/" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Campbells Resort</button></a>
                    <a href="https://caseyconnor.org/" target="_blank" rel="noreferrer"><button className="px-6 py-2 ml-2 bg-theme font-bold">Casey Connor</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Recorded and Edited With:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Allen and Heath QU-16</div>
                      <div className="badge">Shure SM 57</div>
                      <div className="badge">Shure SM 58</div>
                      <div className="badge">Audition</div>
                    </div>
                  </div>

                </div>

              </div>
              {/* End Casey Connor */}

              {/* Start Scott Foster */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold">Scott Foster</h3>
                  <h4 className="text-white text-1xl font-semi-bold">Live at a private event.</h4>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={event_16} alt="Scott Foster playing the guitar at Siren Songs Winery in Lake Chelan." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">Scott Foster</h3>
                    <h4 className="text-white text-1xl font-semi-bold">Live at a private event.</h4>
                  </div>

                  <p className="text white mt-10 mb-10">Scott asked me to provide a sound system for him to use at a private event, usually when I work with Scott I play background music when he needs a break. I had my laptop there for that reason and decided to just record his set. I think it turned out pretty good. Enjoy! </p>
                  

                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/scott-foster-dont-fail-me-now" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    <a href="http://scottfosterrock.com/" target="_blank" rel="noreferrer"><button className="px-6 py-2 bg-theme font-bold">Scott Foster</button></a>
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Recorded and Edited With:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Allen and Heath QU-16</div>
                      <div className="badge">Shure SM 57</div>
                      <div className="badge">Shure SM 58</div>
                      <div className="badge">Audition</div>
                    </div>
                  </div>

                </div>

              </div>
              {/* End Scott Foster */}

              {/* Start Custom Cheer Mix */}
              <div className="w-full border border-nav p-16 lg:px-20 lg:py-20 lg:space-x-20 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                {/* SMALL SCREEN - Title */}
                <div className="flex flex-wrap justify-center text-center lg:hidden ">
                  <h3 className="text-white text-3xl font-semibold">Custom Cheer Mix</h3>
                </div>

                {/* <!-- Project logo --> */}
                <div className="mb-6 lg:mb-0">
                  <img src={audiostar_icon} alt="Audiostar Logo." className="img_300" />
                </div>

                {/* <!-- Project info --> */}
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                  {/* Title */}
                  <div className="flex flex-wrap hidden justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">Custom Cheer Mix</h3>
                  </div>

                  <p className="text white mt-10 mb-10">This is a custom cheer mix that I made for a high school in Seattle. It took a few hours to line everything up and make it sound good, but overall I am pleased with how it turned out. </p>
                  

                  {/* Audio Player */}
                  <ResponsivePlayer url="https://soundcloud.com/audiostarinc/ckc-cheer-mix-part-2" />

                  {/* Buttons */}
                  <div className="mt-16 justify-right">
                    {/* <a href="http://scottfosterrock.com/" target="_blank" rel="noreferrer" ><button className="px-6 py-2 bg-theme font-bold">Scott Foster</button></a> */}
                  </div>

                  {/* Built With */}
                  <div className="container">
                    <h4 className="mt-10 text-white text-1xl font-semi-bold underline">Edited With:</h4>
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
                      <div className="badge">Protools</div>
                    </div>
                  </div>

                </div>

              </div>
              {/* End Cheer Mix */}


            </div>
          </section>
        </div>
        {/* <!-- End Audio Projects --> */}
        
        
        {/* <!-- Event Photos --> */}
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 className="text-center text-2xl sm:text-3xl font-bold">Event Photos</h2>
            <div id="event" className="secondary-title flex justify-center mt-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              
              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" alt="DJ Ontic setup at Larc Hill Vineyard." src={event_1}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.larchill.com/" target="_blank" rel="noreferrer">Larc Hill Vineyard, Chelan WA</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_2}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.larchill.com/" target="_blank" rel="noreferrer">Larc Hill Vineyard, Chelan WA</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_3}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com" target="_blank" rel="noreferrer">Recording a Podcast with Gail Miller owner of the Utah Jazz.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_4}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com" target="_blank" rel="noreferrer">Home Editing Station</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_5}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://tsillancellars.com/" target="_blank" rel="noreferrer">Tsillan Cellars, Chelan WA</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_6}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://eggscast.com/" target="_blank" rel="noreferrer">Recording The Eggs Podcast</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_7}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djrobswift.com/" target="_blank" rel="noreferrer">Respect The Decks DJ Battle with Rob Swift</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_8}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.fsbwa.com/" target="_blank" rel="noreferrer">1st Security Bank Holiday Party</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_10}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.tavern-hall.com/" target="_blank" rel="noreferrer">Tavern Hall</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_11}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.weddingwire.com/biz/hollywood-schoolhouse-woodinville/1f63f9a79c73f334.html" target="_blank" rel="noreferrer">Hollywood Schoolhouse</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_12}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com" target="_blank" rel="noreferrer">Prepping for a Gig</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_13}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://youtu.be/c124jL8kaNI" target="_blank" rel="noreferrer">Lighting and Audio for High School Prom</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_14}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.withinsodo.com/" target="_blank" rel="noreferrer">Wedding at WithinSodo</a>
                </h3>
              </div>


              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_16}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.sirensongwines.com/" target="_blank" rel="noreferrer">Audio for Scott Foster at Siren Song Winery</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_17}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.sirensongwines.com/" target="_blank" rel="noreferrer">Wedding at Siren Song Winery</a>
                </h3>
              </div>

               {/* new img block */}
               <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_18}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://youtu.be/c124jL8kaNI" target="_blank" rel="noreferrer">Lighting and Audio for High School Prom.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_19}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com/" target="_blank" rel="noreferrer">Audio for Ian Foster.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_20}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Tones for Chrons Event in Anacortes.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_21}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Student Event Clover Park Technical College.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_22}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.bombaysapphire.com/us/en/" target="_blank" rel="noreferrer">Private Event for Bombay Sapphire.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_23}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://djontic.com" target="_blank" rel="noreferrer">Sound and Lights for the Kiss FM stage at the 2005 Tempe Block Party.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_25}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://campbellsresort.com/" target="_blank" rel="noreferrer">Wedding at Campbells Resort in Chelan.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_26}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://talaricosfremont.com/" target="_blank" rel="noreferrer">Ballroom in Fremont WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_27}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://goodkarmawines.com/" target="_blank" rel="noreferrer">Wedding at Karma Vineyards.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_28}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://jazzbones.com/" target="_blank" rel="noreferrer">Jazzbone's Nightclub, Tacoma WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_29}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.instagram.com/jonesbarpdx/" target="_blank" rel="noreferrer">Jones Bar, Portland OR.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_30}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.eggscast.com" target="_blank" rel="noreferrer">Live show with the Eggs podcast.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_31}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com" target="_blank" rel="noreferrer">Podcast for Nxtset.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_32}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://thanksgivingpoint.org/" target="_blank" rel="noreferrer">Wedding at Thanksgiving Point UT.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_33}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.wigwamarizona.com/" target="_blank" rel="noreferrer">Pool Party at Whigwam Resort.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_34}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com/" target="_blank" rel="noreferrer">Livestream Medical Conference.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_35}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.highwest.com/" target="_blank" rel="noreferrer">Audio for Scott Foster at High West Distillery.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_36}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Emblem Night Club, Tacoma WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_37}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com/" target="_blank" rel="noreferrer">Live Stream For City Weekly, Salt Lake.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_38}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com/" target="_blank" rel="noreferrer">Live Stream For City Weekly, Salt Lake.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_39}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Wedding in Mesa, AZ.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_41}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.larchill.com/" target="_blank" rel="noreferrer">Larc Hill Vineyard, Chelan WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_42}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.audiostarinc.com/" target="_blank" rel="noreferrer">Audio for Private Event, Provo UT.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_43}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Tsillan Cellars, Chelan WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_44}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Private Event, Chelan WA.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_45}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.withinsodo.com/" target="_blank" rel="noreferrer">WithinSodo</a>
                </h3>
              </div>

               {/* new img block */}
               <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_46}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://goodkarmawines.com/" target="_blank" rel="noreferrer">Karma Vineyards</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_47}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://youtu.be/c124jL8kaNI" target="_blank" rel="noreferrer">Sound and Lights for High School Prom.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_48}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://youtu.be/c124jL8kaNI" target="_blank" rel="noreferrer">Sound and Lights for High School Prom.</a>
                </h3>
              </div>

              {/* new img block */}
              <div className="group relative">
                <div className="relative w-full">
                  <img className="w-full bg-nav h-72 object-cover img_rounded" src={event_49}/>
                </div>
                <h3 className="mt-6 text-sm text-blue-500">
                  <a href="https://www.djontic.com/" target="_blank" rel="noreferrer">Wedding at Larc Hill Vineyard.</a>
                </h3>
              </div>

            </div>
          </section>
        </div>
        {/* <!-- End Event Photos --> */}



        {/* <!-- Hire me --> */}
        <div className="container mt-64 flex justify-between mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 className="text-center text-2xl sm:text-3xl font-bold">Hire Me!</h2>
            <div id="hire" className="secondary-title flex justify-center mt-10"></div>

            {/* <ContactForm className="mt-5" /> */}
            <a href="https://forms.gle/VhVXcct1mnE5rhvi7" target="_blank" rel="noreferrer"><button className="px-6 py-2 ml-2 bg-theme font-bold mt-10">Request A Quote</button></a>
            <a href="https://github.com/onticinc/m-smith/blob/33d6be801a99a70b0392c111f73afbdce451e984/src/michael-david-smith_2022_resume.pdf#L1" target="_blank" rel="noreferrer"><button className="px-6 py-2 ml-2 mt-10 bg-theme font-bold mt-10">View Resume</button></a> 
            <h2 className="text-center text-xl font-semibold mt-10">onticinc@gmail.com</h2>
          </section>
        </div>

      </div>
    </div>
  );
}

export default App;
