let social_changed = ` <div class="social">
<div class="social-handels">
  <div class="social-container">
    <a
      href="https://www.linkedin.com/in/anoop-kumar-42b527285/"
      target="_blank"
    >
      <button class="btn-23">
        <span class="text">LinkedIn</span>
        <span aria-hidden="" class="marquee">LinkedIn</span>
      </button></a
    >
  </div>
  <div class="social-container">
    <a href="https://github.com/daichianoop" target="_blank"
      ><button class="btn-24">
        <span class="text">Github</span>
        <span aria-hidden="" class="marquee">Github</span>
      </button></a
    >
  </div>
  <div class="social-container">
    <a href="https://www.instagram.com/daichi.anoop/" target="_blank"
      ><button class="btn-25">
        <span class="text">Instagram</span>
        <span aria-hidden="" class="marquee">Instagram</span>
      </button></a
    >
  </div>
  <div class="social-container">
    <a
      href="https://www.hackerrank.com/profile/kuganoop2005"
      target="_blank"
    >
      <button class="btn-26">
        <span class="text">Hacker Rank</span>
        <span aria-hidden="" class="marquee">Hacker Rank</span>
      </button></a
    >
  </div>
</div>
<div class="social-handels">
  <div class="social-container">
    <a href="docs/Anoop's Resume.pdf" target="_blank" =""
      ><button
        class="btn-24"
        style="background-color: rgba(226, 63, 9, 0.436)"
      >
        <span class="text">Resume.</span>
        <span aria-hidden="" class="marquee">Resume.</span>
      </button></a
    >
  </div>
</div>
<div class="contact-details">
  <h3>Contact me :</h3>
  <div class="contact">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d1d1d1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-phone-call"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
    <h5>+91-9559545103</h5>
  </div>
  <div class="contact">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d1d1d1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-map-pin"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
    <h5>Varanasi - 221005</h5>
  </div>
  <div class="contact">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d1d1d1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-mail"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
    <h5>Kuganoop2005@gmail.com</h5>
  </div>
</div>
</div>`;
function social() {
  document.getElementById("js-content").innerHTML = social_changed;
}
let education_changed = `
<div class="education">
<div class="schooling">
  <h1>&nabla; Schooling</h1>
  <div class="hs1">
    <h2>High School</h2>
    <h5>(C.B.S.E. Board) ~ 90.6%</h5>
    <h2>The Aryan International School</h2>
    <h5>- 06/21</h5>
  </div>
  <div class="hs1">
    <h2>Senior Secondary</h2>
    <h5>(C.B.S.E. Board) ~ 97.4%</h5>
    <h2>The Aryan International School</h2>
    <h5>- 06/23</h5>
    <h4>Intermediate from PCM</h4>
  </div>
</div>
<div class="higher-studies">
  <h1>&nabla; Undergraduate</h1>
  <div class="ug1">
    <h2>B. Tech.</h2>
    <h2>Kalinga Institute of Industrial </h2>
    <h2>Technology</h2>
    <h5>- 06/23 ~ present</h5>
    <h3>Bachelors of Technology from</h3>
    <h4>Computer Science and Engineering (CSE)</h4>
  </div>
</div>
</div>
`;
function education() {
  document.getElementById("js-content").innerHTML = education_changed;
}
let skills_changed = `
<div class="skills">
<div class="s-row">
  <div class="skill-container">
    <div class="skill-img"><img src="icons/html.svg" alt="" /></div>
    <div class="skill-name">HTML</div>
  </div>
  <div class="skill-container">
    <div class="skill-img"><img src="icons/css.svg" alt="" /></div>
    <div class="skill-name">CSS</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/javascript.svg" alt="" />
    </div>
    <div class="skill-name">JAVASCRIPT</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/tailwindcss" alt="" />
    </div>
    <div class="skill-name">TAILWIND</div>
  </div>
  <div class="skill-container">
    <div class="skill-img"><img src="icons/vercel.svg" alt="" /></div>
    <div class="skill-name">VERCEL</div>
  </div>
  <div class="skill-container">
    <div class="skill-img"><img src="icons/kotlin.svg" alt="" /></div>
    <div class="skill-name">KOTLIN</div>
  </div>
</div>
<div class="s-row">
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/c.png" alt="" />
    </div>
    <div class="skill-name">C PROGRAMMING</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/vscode.png" alt="" />
    </div>
    <div class="skill-name">VS CODE</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/live-server.Default" alt="" />
    </div>
    <div class="skill-name">LIVE SERVER</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/make.png" alt="" />
    </div>
    <div class="skill-name">MAKE</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/bolt.png" alt="" />
    </div>
    <div class="skill-name">BOLT IoT</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/Winaero.png" alt="" />
    </div>
    <div class="skill-name">WINAERO</div>
  </div>
</div>
<div class="s-row">
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/webd.png" alt="" />
    </div>
    <div class="skill-name">WEB DESIGNING</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/github-page.png" alt="" />
    </div>
    <div class="skill-name">GITHUB PAGES</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/canva-icon.svg" alt="" />
    </div>
    <div class="skill-name">CANVA</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img
        class="js-img"
        src="icons/adobe-lightroom-icon.svg"
        alt=""
      />
    </div>
    <div class="skill-name">Lightroom</div>
  </div>
  <div class="skill-container">
    <div class="skill-img">
      <img class="js-img" src="icons/clipchamp" alt="" />
    </div>
    <div class="skill-name">CLIPCHAMP</div>
  </div>
</div>
</div>
`;
function skills() {
  document.getElementById("js-content").innerHTML = skills_changed;
}
let experience_changed = `
<div class="experience-container">
<div class="exp">
  <div>
    <h1>Cultural Head</h1>
    <h2>&rArr; The Aryan International School</h2>
    <h4>
      • Organized multiple orchestra performances. <br />
      • Did Graphic Design for event Banners and Posters. <br />
      • Designed Logos and Posters for multiple events. <br />
      • Played synthesizer as main lead and background chords <br> for
      chorus on multiple occasions.
    </h4>
  </div>
</div>
<div class="exp">
  <div>
    <h1>Senior Director</h1>
    <h2>&rArr; Vox Populi - The Debating Phenomenon</h2>
    <h4>
      • Organized the respective events, serving as the senior <br> director.<br />
      • Created the website for organization's Varanasi Chapter.<br />
      • Designed the Posters and operated the event web handle. 
    </h4>
  </div>
</div>

</div>`;
function experience() {
  document.getElementById("js-content").innerHTML = experience_changed;
}
let sample_changed = `        <div class="sample-navbar">
<div class="radio-buttons-container">
  <div class="radio-button">
    <input
      checked
      name="radio-group"
      id="radio2"
      class="radio-button__input"
      type="radio"
      onclick="project_sample()"
    />
    <label for="radio2" class="radio-button__label">
      <span class="radio-button__custom"></span>

      Project Samples
    </label>
  </div>
  <div class="radio-button">
    <input
      name="radio-group"
      id="radio1"
      class="radio-button__input"
      type="radio"
      onclick="other_sample()"
    />
    <label for="radio1" class="radio-button__label">
      <span class="radio-button__custom"></span>

      Others
    </label>
  </div>
</div>
</div>

<div class="sample" id="js-sample">
<div class="sample-row">
<div class="card">
  <a
    href="https://daichianoop.github.io/Task-Manager/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/task-manager-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>
  <div class="card-info">
    <p class="text-title">Task Manager</p>
    <p class="text-body">
      Efficient task manager with changeable backgrounds and and
      localstorage.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/Theme-Watch/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/theme-clock-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>

  <div class="card-info">
    <p class="text-title">Theme Clock</p>
    <p class="text-body">
      Analog + Virtual clock with light and dark themes.
    </p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a
    href="https://daichianoop.github.io/Flickr-clone/"
    target="_blank"
    ><video
      class="card-img"
      src="vid-c/flickrr-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Flickr Clone</p>
    <p class="text-body">
      Flickr clone with automatically changing backgrounds.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/Linkedin-clone/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/linkedin-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">LinkedIn Clone</p>
    <p class="text-body">A top to bottom linkedin clone.</p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a href="https://daichianoop.github.io/ytclone/" target="_blank">
    <video
      class="card-img"
      src="vid-c/yt-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Youtube Clone</p>
    <p class="text-body">
      Hyperlinked youtube clone with working thumbnails.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/RockPaperScissors/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/rps-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>

  <div class="card-info">
    <p class="text-title">Rock Paper Scissors Game</p>
    <p class="text-body">
      Play rock-paper-scissors with the computer.
    </p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a href="https://daichianoop.github.io/CoinFlip/" target="_blank">
    <video
      class="card-img"
      src="vid-c/coin-flip-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Probability Coin Flip</p>
    <p class="text-body">
      Play a game of probability with the computer.
    </p>
  </div>
</div>
<div class="card">
  <video class="card-img" src="" autoplay loop></video>
  <div class="card-info">
    <p class="text-title">Coming soon...</p>
    <p class="text-body"></p>
  </div>
</div>
</div>
</div>`;
function sample() {
  document.getElementById("js-content").innerHTML = sample_changed;
}

let other_sample_var = `
<div class="other-samples-container">
          <a
            href="https://drive.google.com/drive/folders/1WLxt8-fLTttlUME2qwu0X7RW3d101j25"
            target="_blank"
          >
            <div class="card-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 32 32"
                id="google-drive"
              >
                <path
                  fill="#4285f4"
                  d="M29.5,21l-3.1708,5.5489A3.07,3.07,0,0,1,23.6459,28H8.3541a3.07,3.07,0,0,1-2.6833-1.4511L4.3687,24.27,9.7578,21Z"
                ></path>
                <path
                  fill="#00ac47"
                  d="M12.3822,4.13a3.2262,3.2262,0,0,0-1.7067,1.4276L2.9591,18.76a3.07,3.07,0,0,0-.1012,3.0489l1.53,2.4658L9.7579,21,16,10.32Z"
                ></path>
                <path
                  fill="#0066da"
                  d="M9.7578,21H2.568a2.6543,2.6543,0,0,0,.29.8089L4.38,24.2632l-.0115.007L5.6709,26.549A2.8267,2.8267,0,0,0,7.008,27.6974L9.7578,21l-.0081.0049Z"
                ></path>
                <path
                  fill="#ffba00"
                  d="M19.6068,4.13a3.2256,3.2256,0,0,1,1.7066,1.4276L29.03,18.76a3.07,3.07,0,0,1,.1013,3.0489l-1.5295,2.4658L22.2311,21,15.9889,10.32Z"
                ></path>
                <path
                  fill="#ea4435"
                  d="M22.2311,21h7.19a2.6541,2.6541,0,0,1-.29.8089l-1.5224,2.4544.0116.007L26.3181,26.549a2.8272,2.8272,0,0,1-1.3371,1.1484L22.2312,21l.0081.0049Z"
                ></path>
                <path
                  fill="#188038"
                  d="M19.6155,4.1342l.0023-.004a2.7726,2.7726,0,0,0-.3609-.0983L16,4l-3.2569.0319a2.7726,2.7726,0,0,0-.3609.0983,3.0224,3.0224,0,0,0-.367.1666L15.9889,10.32,19.977,4.2993A3.03,3.03,0,0,0,19.6155,4.1342Z"
                ></path>
              </svg>
              <div class="card-1__content">
                <p class="card-1__title">Photography Portfolio</p>
                <p class="card-1__description">Please follow the drive link.</p>
              </div>
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1E4LKL_JqjOgMPQWJhMCYqQ_qLatdUaTs"
            target="_blank"
          >
            <div class="card-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 32 32"
                id="google-drive"
              >
                <path
                  fill="#4285f4"
                  d="M29.5,21l-3.1708,5.5489A3.07,3.07,0,0,1,23.6459,28H8.3541a3.07,3.07,0,0,1-2.6833-1.4511L4.3687,24.27,9.7578,21Z"
                ></path>
                <path
                  fill="#00ac47"
                  d="M12.3822,4.13a3.2262,3.2262,0,0,0-1.7067,1.4276L2.9591,18.76a3.07,3.07,0,0,0-.1012,3.0489l1.53,2.4658L9.7579,21,16,10.32Z"
                ></path>
                <path
                  fill="#0066da"
                  d="M9.7578,21H2.568a2.6543,2.6543,0,0,0,.29.8089L4.38,24.2632l-.0115.007L5.6709,26.549A2.8267,2.8267,0,0,0,7.008,27.6974L9.7578,21l-.0081.0049Z"
                ></path>
                <path
                  fill="#ffba00"
                  d="M19.6068,4.13a3.2256,3.2256,0,0,1,1.7066,1.4276L29.03,18.76a3.07,3.07,0,0,1,.1013,3.0489l-1.5295,2.4658L22.2311,21,15.9889,10.32Z"
                ></path>
                <path
                  fill="#ea4435"
                  d="M22.2311,21h7.19a2.6541,2.6541,0,0,1-.29.8089l-1.5224,2.4544.0116.007L26.3181,26.549a2.8272,2.8272,0,0,1-1.3371,1.1484L22.2312,21l.0081.0049Z"
                ></path>
                <path
                  fill="#188038"
                  d="M19.6155,4.1342l.0023-.004a2.7726,2.7726,0,0,0-.3609-.0983L16,4l-3.2569.0319a2.7726,2.7726,0,0,0-.3609.0983,3.0224,3.0224,0,0,0-.367.1666L15.9889,10.32,19.977,4.2993A3.03,3.03,0,0,0,19.6155,4.1342Z"
                ></path>
              </svg>
              <div class="card-1__content">
                <p class="card-1__title">Artwork & Craftwork Portfolio</p>
                <p class="card-1__description">Please follow the drive link.</p>
              </div>
            </div>
          </a>
        </div>`;
function other_sample() {
  document.getElementById("js-sample").innerHTML = other_sample_var;
}

let project_sample_var = `
<div class="sample-row">
<div class="card">
  <a
    href="https://daichianoop.github.io/Task-Manager/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/task-manager-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>
  <div class="card-info">
    <p class="text-title">Task Manager</p>
    <p class="text-body">
      Efficient task manager with changeable backgrounds and and
      localstorage.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/Theme-Watch/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/theme-clock-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>

  <div class="card-info">
    <p class="text-title">Theme Clock</p>
    <p class="text-body">
      Analog + Virtual clock with light and dark themes.
    </p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a
    href="https://daichianoop.github.io/Flickr-clone/"
    target="_blank"
    ><video
      class="card-img"
      src="vid-c/flickrr-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Flickr Clone</p>
    <p class="text-body">
      Flickr clone with automatically changing backgrounds.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/Linkedin-clone/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/linkedin-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">LinkedIn Clone</p>
    <p class="text-body">A top to bottom linkedin clone.</p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a href="https://daichianoop.github.io/ytclone/" target="_blank">
    <video
      class="card-img"
      src="vid-c/yt-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Youtube Clone</p>
    <p class="text-body">
      Hyperlinked youtube clone with working thumbnails.
    </p>
  </div>
</div>
<div class="card">
  <a
    href="https://daichianoop.github.io/RockPaperScissors/"
    target="_blank"
  >
    <video
      class="card-img"
      src="vid-c/rps-video-c.mp4"
      autoplay
      loop
    ></video>
  </a>

  <div class="card-info">
    <p class="text-title">Rock Paper Scissors Game</p>
    <p class="text-body">
      Play rock-paper-scissors with the computer.
    </p>
  </div>
</div>
</div>
<div class="sample-row">
<div class="card">
  <a href="https://daichianoop.github.io/CoinFlip/" target="_blank">
    <video
      class="card-img"
      src="vid-c/coin-flip-video-c.mp4"
      autoplay
      loop
    ></video
  ></a>

  <div class="card-info">
    <p class="text-title">Probability Coin Flip</p>
    <p class="text-body">
      Play a game of probability with the computer.
    </p>
  </div>
</div>
<div class="card">
  <video class="card-img" src="" autoplay loop></video>
  <div class="card-info">
    <p class="text-title">Coming soon...</p>
    <p class="text-body"></p>
  </div>
</div>
</div>`;
function project_sample() {
  document.getElementById("js-sample").innerHTML = project_sample_var;
}
