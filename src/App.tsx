import type { Component } from 'solid-js';
import github from "./assets/github-mark-white.png";
import spCodeImg1 from "./assets/spcode.png";
import spCodeImg2 from "./assets/spcode2.png";
import spCodeImg3 from "./assets/spcode3.png";
import riesgosDashboard from "./assets/riesgosDashboard.png";
import riesgos1 from "./assets/riesgos1.png";
import riesgos2 from "./assets/riesgos2.png";
import riesgos3 from "./assets/riesgos3.png";
import riesgos4 from "./assets/riesgos4.png";
import anki1 from "./assets/ankiaddon1.png";
import anki2 from "./assets/ankiaddon2.png";
import recli1 from "./assets/recli1.png"
import recli2 from "./assets/recli2.png"
import lingomark1 from "./assets/lingomark1.png"
import lingomark2 from "./assets/lingomark2.png"
import reader1 from "./assets/reader1.png"
import reader2 from "./assets/reader2.png"
import reader3 from "./assets/reader3.png"
import portfolio from "./assets/portfolio.png"
import goduz from "./assets/goduz.png"
import web from "./assets/web.png"
import angularEmail from "./assets/angular_email.png"
import reactCountdown from "./assets/countdown.png"
import angularNotes from "./assets/angular_notes.png"
import chess from "./assets/chess.png"
import discord1Img from "./assets/discord1.png"
import discord2Img from "./assets/discord2.png"
import memorizerImg from "./assets/memorizer.png"
import memorizerImg2 from "./assets/memorizer2.png"
import tcbanner1 from "./assets/ticobanner.png"
import tcbanner2 from "./assets/ticobanner2.png"
import sinpepay1 from "./assets/sinpepayweb1.png"
import construccion from "./assets/construccion.png"
import Card from './components/card';

const App: Component = () => {
  return (
    <div class="flex flex-col justify-center text-white overflow-auto">
      {/*<nav class='w-full flex justify-end p-2 fixed top-0'>
        <ul class='flex gap-4 pr-10'>
          <li class='opacity-70'>Home</li>
          <li class='opacity-70'>Projects</li>
          <li class='opacity-70'>Contact</li>
        </ul>
      </nav>*/}
      <div class='p-10 w-full flex justify-center'>
        <div class='w-full max-w-[900px] border-gray-600 p-4'>
          <h1 class='text-3xl md:text-5xl  font-bold md:translate-x-[-26px]'>
            <span class='opacity-20 mb-1'>{"{"}</span>
            <span class="mx-2">Andrés Gamboa A.</span>
            <span class='opacity-20'>{"}"}</span>
          </h1>
          <p class='opacity-80 text-lg font-medium'>Software Engineer</p>
          <p class='mt-6 opacity-80 text-lg' >I have a passion for transforming ideas into elegant, functional, and user-centric digital solutions. With a versatile skill set that spans across web development, mobile applications, desktop software, CLI tools, and automation scripts, I thrive on turning complex challenges into intuitive and efficient solutions.</p>
          <div class='mt-6 flex flex-wrap gap-2'>
            <a href="mailto:andres24k8@gmail.com" class=' w-fit mt-2 border border-gray-500 p-1 rounded flex items-center opacity-60 hover:opacity-100'>
              <svg class='mr-2' width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
              andres24k8@gmail.com
            </a>
            <a href='tel:+50664324820' class=' w-fit mt-2 border border-gray-500 p-1 rounded flex items-center opacity-60 hover:opacity-100'>
              <svg class='mr-1' width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              64324820
            </a>
          </div>

          <div class="mt-40 w-full flex flex-col text-center">
            <h2 class='my-2 font-bold text-2xl mb-6 opacity-70'>Programming Languages</h2>
            <div class='opacity-70 flex flex-wrap justify-center gap-2 font-bold select-none'>
              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                <svg class='mr-2' height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M6.5 6V11C6.5 11.8284 5.82843 12.5 5 12.5C4.17157 12.5 3.5 11.8284 3.5 11M0.5 0.5H14.5V14.5H0.5V0.5Z" stroke="#000000"></path> </g></svg>
                JavaScript
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                <svg class='mr-2' height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M6.5 6V11C6.5 11.8284 5.82843 12.5 5 12.5C4.17157 12.5 3.5 11.8284 3.5 11M0.5 0.5H14.5V14.5H0.5V0.5Z" stroke="#000000"></path> </g></svg>
                TypeScript
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                C#
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                <svg class='mr-2' height={20} fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e8d81"> <path display="inline" d="M193.918,208.369c-4.729-10.456-6.849-22.652-3.236-33.731c3.612-11.327,11.703-20.413,19.794-28.878 c22.525-22.531,50.285-39.085,72.316-61.986c12.197-12.573,22.278-27.634,25.762-44.937c2.864-12.695,1.496-25.764-1.117-38.337 c11.7,13.319,15.559,32.363,12.197,49.541c-3.608,19.292-14.316,36.344-26.886,51.031c-10.081,11.827-21.659,22.282-33.731,31.993 c-14.065,11.327-27.88,23.524-36.716,39.457c-7.472,12.943-9.215,28.876-4.11,42.942c8.341,24.146,27.756,42.071,38.338,64.848 c-11.703-10.332-23.152-21.036-33.86-32.361C211.471,236.001,200.889,223.307,193.918,208.369z M257.398,189.448 c-2.115,19.792,8.213,38.462,20.539,53.151c5.972,6.596,11.076,14.687,11.323,23.899c0.251,12.318-6.716,23.774-15.684,31.861 c2.119-0.246,3.612-2.115,5.355-3.11c13.443-8.589,26.385-19.418,32.982-34.227c4.357-10.083,3.362-22.034-2.362-31.371 c-6.724-10.953-15.559-20.662-20.786-32.61c-2.867-6.721-3.862-14.562-1.496-21.657c3.114-9.583,9.834-17.426,16.93-24.272 c19.54-18.544,43.189-31.743,65.844-46.179c-28.629,8.214-56.883,19.542-81.03,37.343 C273.702,153.727,259.515,169.658,257.398,189.448z M393.447,283.052c13.568,0.748,26.882,10.704,29.374,24.397 c2.366,11.825-3.358,23.524-10.705,32.485c-12.075,14.438-28.382,24.771-44.807,33.609c-1.622,0.991-2.99,2.237-4.235,3.608 c21.659-5.478,43.314-13.689,60.867-27.756c9.705-8.091,18.294-18.799,20.163-31.619c1.743-11.076-2.86-22.528-11.077-29.871 c-9.96-9.09-24.021-12.448-37.218-10.704c-7.593,0.995-15.931,2.613-21.158,8.961C380.877,284.921,386.971,282.429,393.447,283.052 z M123.22,318.647c16.303,4.357,33.108,5.603,49.787,6.724c14.936,0.995,29.875,1.246,44.937,1.12 c38.833-0.619,77.916-3.236,116.003-11.699c3.608-0.87,7.593-1.493,10.833-3.733c6.347-4.11,13.313-7.347,20.162-10.583 c-30.995,4.979-62.113,9.215-93.478,11.205c-31.74,1.991-63.731,3.236-95.593,1.121c-9.086-0.87-18.423-1.371-26.886-4.858 c-1.994-0.87-4.733-2.609-3.738-5.227c1.869-3.361,5.603-4.977,8.839-6.72c13.694-6.473,28.629-10.081,43.193-14.313 c-25.021-0.376-49.916,5.971-72.814,15.806c-5.105,2.491-10.83,4.481-14.936,8.714c-1.622,1.739-1.622,4.732,0.247,6.222 C113.511,315.787,118.487,317.28,123.22,318.647z M324.864,352.88c-21.784,3.859-43.694,7.472-65.726,8.589 c-24.147,1.618-48.294,0.247-72.191-2.241c-4.604-0.623-9.211-1.368-13.317-3.483c-2.116-1.246-4.231-3.236-4.106-5.854 c0.247-4.106,3.73-6.967,6.222-9.956c-7.715,2.739-15.434,5.599-21.906,10.708c-2.742,2.116-5.478,5.474-4.733,9.208 c1.125,4.356,5.356,6.97,9.09,8.96c9.208,4.733,19.54,6.846,29.625,8.714c25.511,4.11,51.527,4.235,77.167,2.488 c27.141-2.115,54.148-6.594,80.411-14.313C337.932,362.342,330.836,358.479,324.864,352.88z M188.068,395.951 c-6.97,1.99-14.066,4.357-19.79,8.957c-2.868,2.241-5.105,6.104-3.734,9.713c1.743,4.604,6.1,7.347,10.203,9.705 c10.708,5.854,22.78,8.589,34.604,10.708c26.765,4.229,54.27,3.608,80.908-1.12c15.806-2.989,31.615-7.221,46.301-13.815 c-9.584-3.984-18.917-8.467-27.878-13.693c-15.559,2.738-31.246,5.603-47.178,6.598c-21.032,1.618-42.319-0.125-63.355-2.738 c-4.98-1.121-11.202-1.618-14.563-5.976C181.847,400.677,185.828,398.063,188.068,395.951z M358.345,475.982 c17.424-3.604,34.977-7.719,50.908-15.806c4.976-2.867,11.076-5.979,12.698-11.95c0.87-5.725-5.105-8.714-9.337-11.08 c2.613,2.993,4.356,7.347,1.74,10.83c-4.357,5.853-11.821,8.091-18.42,10.332c-20.66,5.85-42.072,8.216-63.355,10.582 c-56.385,5.102-113.146,6.348-169.528,1.618c-18.92-1.994-38.217-4.109-56.264-10.829c-2.86-1.246-7.217-2.492-7.217-6.352 c1.117-3.354,4.357-5.227,7.217-6.845c12.945-6.595,27.384-10.207,41.822-11.077c-4.228-2.491-9.208-2.738-14.062-2.613 c-12.076,0.373-23.9,3.483-35.349,7.347c-9.834,3.604-19.916,7.59-27.76,14.811c-3.111,2.735-5.971,7.962-2.739,11.699 c4.98,5.353,12.699,6.72,19.54,8.338c38.338,6.599,77.171,10.328,116.011,11.699C255.781,488.184,307.684,485.942,358.345,475.982z M409.378,482.706c-23.402,7.468-47.672,11.574-71.822,14.936c-41.696,5.227-83.769,6.845-125.716,5.603 c-25.515-0.995-51.03-2.738-76.176-6.974c5.85,3.984,13.071,5.227,19.794,7.096c28.257,5.976,57.255,7.096,86.01,7.966 c42.19,0.748,84.387-0.87,125.962-7.468c19.669-3.48,39.459-7.715,57.13-16.927c9.215-4.854,18.552-12.326,20.163-23.152 C435.391,473.741,421.951,478.349,409.378,482.706z"> </path> </g> </g></svg>
                Java
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Go
              </div>


              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                <svg class='mr-2' height={16} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>python [#127]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]"> </path> </g> </g> </g> </g></svg>
                Python
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                <svg class='mr-2' height={20} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>rust</title> <path d="M25.763 12.291c0.099-0.098 0.235-0.159 0.385-0.159 0.301 0 0.545 0.244 0.545 0.545s-0.244 0.545-0.545 0.545c-0.301 0-0.545-0.244-0.545-0.545 0-0.15 0.061-0.286 0.159-0.385v0zM15.342 3.906c0.163-0.171 0.392-0.278 0.647-0.278 0.493 0 0.892 0.399 0.892 0.892s-0.399 0.892-0.892 0.892c-0.413 0-0.76-0.28-0.862-0.661l-0.001-0.006c-0.018-0.068-0.029-0.145-0.029-0.225 0-0.238 0.093-0.454 0.245-0.614l-0 0zM26.965 15.901c0 0.273-0.010 0.545-0.030 0.814h-1.125c-0.112 0-0.158 0.073-0.158 0.185v0.516c0 1.216-0.686 1.48-1.287 1.547-0.572 0.065-1.206-0.239-1.284-0.589-0.089-1.265-0.773-2.353-1.772-2.994l-0.015-0.009c1.206-0.593 2.062-1.736 2.246-3.093l0.002-0.021c-0.049-1.229-0.72-2.29-1.705-2.884l-0.016-0.009c-0.667-0.438-1.472-0.719-2.339-0.773l-0.014-0.001h-11.63c1.569-1.749 3.678-2.987 6.063-3.45l0.069-0.011 1.371 1.438c0.148 0.155 0.356 0.252 0.587 0.252 0.218 0 0.415-0.086 0.561-0.226l-0 0 1.533-1.467c3.233 0.622 5.913 2.593 7.475 5.291l0.028 0.053-1.050 2.372c-0.044 0.097-0.069 0.21-0.069 0.329 0 0.329 0.195 0.613 0.477 0.742l0.005 0.002 2.022 0.898c0.035 0.359 0.053 0.721 0.053 1.089zM13.522 14.044v-2.063h3.699c0.191 0 1.349 0.221 1.349 1.087 0 0.719-0.888 0.977-1.618 0.977zM5.106 14.723l1.918-0.853c0.287-0.13 0.483-0.413 0.483-0.742 0-0.12-0.026-0.233-0.072-0.335l0.002 0.005-0.395-0.893h1.554v7.001h-3.134c-0.266-0.899-0.418-1.931-0.418-3 0-0.417 0.023-0.829 0.069-1.234l-0.005 0.050zM6.15 12.247c-0-0.295-0.239-0.534-0.534-0.534s-0.534 0.239-0.534 0.534c0 0.295 0.239 0.534 0.534 0.534s0.534-0.239 0.534-0.534v0zM9.548 26.027c-0.061 0.015-0.13 0.023-0.202 0.023-0.493 0-0.892-0.399-0.892-0.892s0.399-0.892 0.892-0.892c0.493 0 0.892 0.399 0.892 0.892 0 0.096-0.015 0.189-0.043 0.276l0.002-0.006c-0.097 0.3-0.34 0.526-0.643 0.599l-0.006 0.001zM21.937 23.178c-0.051-0.012-0.11-0.018-0.171-0.018-0.388 0-0.713 0.273-0.792 0.638l-0.001 0.005-0.447 2.085c-1.329 0.615-2.884 0.974-4.523 0.974-1.675 0-3.263-0.375-4.684-1.046l0.067 0.028-0.447-2.085c-0.080-0.369-0.404-0.642-0.792-0.642-0.061 0-0.12 0.007-0.177 0.019l0.005-0.001-1.841 0.395c-0.332-0.341-0.644-0.707-0.931-1.093l-0.021-0.029h8.957c0.101 0 0.169-0.018 0.169-0.11v-3.169c0-0.092-0.067-0.11-0.169-0.11h-2.62v-2.009h2.834c0.881 0.009 1.607 0.656 1.741 1.5l0.001 0.010c0.113 0.441 0.359 1.88 0.529 2.34 0.168 0.516 0.854 1.547 1.585 1.547h4.463c0.058-0.001 0.114-0.007 0.168-0.017l-0.006 0.001c-0.326 0.44-0.658 0.828-1.016 1.192l0.001-0.001zM22.365 26.070c1.13-0 2.046-0.917 2.046-2.047s-0.916-2.047-2.047-2.047-2.047 0.916-2.047 2.047c0 1.13 0.916 2.046 2.046 2.047h0zM30.789 15.629l-1.259-0.779q-0.016-0.184-0.035-0.367l1.082-1.008c0.084-0.079 0.136-0.192 0.136-0.316 0-0.184-0.115-0.342-0.277-0.406l-0.003-0.001-1.383-0.517q-0.051-0.179-0.109-0.357l0.863-1.198c0.051-0.070 0.082-0.158 0.082-0.253 0-0.215-0.156-0.393-0.361-0.427l-0.003-0-1.458-0.237q-0.085-0.165-0.176-0.328l0.612-1.345c0.025-0.053 0.039-0.114 0.039-0.18 0-0.090-0.027-0.173-0.075-0.242l0.001 0.001c-0.079-0.117-0.212-0.193-0.362-0.193-0.005 0-0.010 0-0.015 0l0.001-0-1.48 0.052q-0.114-0.144-0.234-0.283l0.34-1.441c0.007-0.030 0.011-0.064 0.011-0.099 0-0.24-0.194-0.434-0.434-0.434-0.035 0-0.069 0.004-0.102 0.012l0.003-0.001-1.441 0.34q-0.141-0.119-0.285-0.234l0.052-1.48c0-0.006 0-0.013 0-0.021 0-0.238-0.193-0.43-0.43-0.43-0.066 0-0.129 0.015-0.185 0.042l0.003-0.001-1.345 0.614c-0.109-0.059-0.218-0.119-0.328-0.176l-0.238-1.459c-0.036-0.207-0.215-0.362-0.429-0.362-0.094 0-0.182 0.030-0.253 0.081l0.001-0.001-1.199 0.863q-0.177-0.057-0.357-0.107l-0.517-1.383c-0.064-0.165-0.222-0.28-0.407-0.28-0.124 0-0.236 0.052-0.316 0.136l-0 0-1.008 1.083q-0.183-0.021-0.367-0.035l-0.779-1.259c-0.078-0.124-0.213-0.205-0.368-0.205s-0.291 0.081-0.367 0.204l-0.001 0.002-0.779 1.259q-0.184 0.016-0.367 0.035l-1.010-1.083c-0.079-0.085-0.192-0.138-0.317-0.138-0.185 0-0.343 0.116-0.405 0.279l-0.001 0.003-0.517 1.383c-0.12 0.034-0.238 0.071-0.357 0.107l-1.198-0.863c-0.070-0.050-0.157-0.080-0.252-0.080-0.215 0-0.393 0.155-0.429 0.36l-0 0.003-0.238 1.459q-0.165 0.085-0.328 0.176l-1.345-0.614c-0.053-0.025-0.115-0.039-0.18-0.039-0.239 0-0.433 0.194-0.433 0.433 0 0.006 0 0.012 0 0.017l-0-0.001 0.052 1.48q-0.144 0.114-0.285 0.234l-1.441-0.341c-0.030-0.007-0.064-0.011-0.099-0.011-0.24 0-0.434 0.194-0.434 0.434 0 0.035 0.004 0.069 0.012 0.102l-0.001-0.003 0.339 1.441c-0.078 0.094-0.157 0.189-0.233 0.283l-1.48-0.052c-0.005-0-0.011-0-0.017-0-0.239 0-0.433 0.194-0.433 0.433 0 0.065 0.014 0.127 0.040 0.183l-0.001-0.003 0.614 1.345q-0.091 0.162-0.176 0.328l-1.457 0.237c-0.207 0.036-0.362 0.214-0.362 0.429 0 0.094 0.030 0.182 0.081 0.253l-0.001-0.001 0.863 1.198q-0.056 0.178-0.109 0.357l-1.383 0.517c-0.165 0.064-0.28 0.222-0.28 0.407 0 0.124 0.052 0.236 0.135 0.316l0 0 1.082 1.008q-0.021 0.183-0.035 0.367l-1.259 0.779c-0.125 0.077-0.208 0.213-0.208 0.368s0.082 0.292 0.206 0.367l0.002 0.001 1.259 0.779c0.010 0.123 0.023 0.245 0.035 0.367l-1.082 1.010c-0.085 0.079-0.138 0.192-0.138 0.317 0 0.185 0.116 0.343 0.279 0.405l0.003 0.001 1.383 0.517c0.034 0.12 0.071 0.239 0.109 0.357l-0.863 1.198c-0.052 0.070-0.083 0.159-0.083 0.254 0 0.215 0.158 0.394 0.364 0.426l0.002 0 1.457 0.237c0.057 0.11 0.115 0.219 0.176 0.328l-0.614 1.345c-0.025 0.053-0.039 0.115-0.039 0.18 0 0.239 0.194 0.433 0.433 0.433 0.006 0 0.012-0 0.017-0l-0.001 0 1.479-0.052c0.077 0.096 0.154 0.191 0.234 0.285l-0.339 1.442c-0.007 0.030-0.011 0.064-0.011 0.099 0 0.239 0.194 0.433 0.433 0.433 0.036 0 0.070-0.004 0.103-0.012l-0.003 0.001 1.441-0.339c0.094 0.080 0.189 0.157 0.285 0.233l-0.052 1.48c-0 0.006-0 0.012-0 0.019 0 0.238 0.193 0.43 0.43 0.43 0.066 0 0.129-0.015 0.185-0.042l-0.003 0.001 1.345-0.612c0.109 0.061 0.218 0.119 0.328 0.176l0.238 1.457c0.036 0.207 0.214 0.363 0.429 0.363 0.094 0 0.181-0.030 0.253-0.081l-0.001 0.001 1.198-0.863q0.178 0.057 0.357 0.109l0.517 1.383c0.062 0.167 0.22 0.283 0.405 0.283 0.125 0 0.238-0.053 0.317-0.139l0-0 1.010-1.082c0.121 0.014 0.244 0.025 0.367 0.037l0.779 1.259c0.078 0.123 0.214 0.204 0.368 0.204s0.29-0.081 0.367-0.203l0.001-0.002 0.779-1.259c0.123-0.011 0.245-0.023 0.367-0.037l1.008 1.082c0.079 0.084 0.192 0.136 0.316 0.136 0.184 0 0.342-0.115 0.406-0.277l0.001-0.003 0.517-1.383q0.179-0.051 0.357-0.109l1.198 0.863c0.070 0.052 0.159 0.083 0.254 0.083 0.215 0 0.394-0.158 0.426-0.364l0-0.002 0.238-1.457c0.11-0.057 0.219-0.116 0.328-0.176l1.345 0.612c0.052 0.024 0.114 0.038 0.179 0.038 0.24 0 0.434-0.194 0.434-0.434 0-0.005-0-0.009-0-0.014l0 0.001-0.052-1.48q0.144-0.113 0.283-0.233l1.441 0.339c0.030 0.007 0.064 0.011 0.098 0.011 0.24 0 0.434-0.194 0.434-0.434 0-0.035-0.004-0.068-0.012-0.1l0.001 0.003-0.339-1.442c0.078-0.094 0.157-0.188 0.233-0.285l1.48 0.052c0.006 0 0.013 0 0.020 0 0.238 0 0.43-0.193 0.43-0.43 0-0.066-0.015-0.129-0.042-0.185l0.001 0.003-0.612-1.345c0.059-0.109 0.119-0.218 0.176-0.328l1.457-0.237c0.207-0.036 0.362-0.215 0.362-0.429 0-0.094-0.030-0.182-0.081-0.253l0.001 0.001-0.863-1.198 0.109-0.357 1.383-0.517c0.166-0.063 0.282-0.221 0.282-0.406 0-0.125-0.053-0.238-0.138-0.317l-0-0-1.082-1.010c0.013-0.121 0.025-0.244 0.035-0.367l1.259-0.779c0.125-0.077 0.208-0.213 0.208-0.368s-0.082-0.291-0.206-0.367l-0.002-0.001z"></path> </g></svg>
                Rust
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                PHP
              </div>

            </div>
          </div>

          <div class="mt-20 w-full flex flex-col text-center">
            <h2 class='my-2 font-bold text-2xl mb-6 opacity-70'>Frameworks, libraries and tools</h2>
            <div class='opacity-70 flex flex-wrap justify-center gap-2 font-bold select-none'>
              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Git
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Github
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                HTML
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                CSS
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Three.js
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                React.js
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Redux
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                OpenAI API
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Prisma
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                TailwindCSS
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                React Native
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Next.js
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                SQL
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Spring Boot
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Hibernate
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Thymeleaf
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                ASP.NET Core
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Entity Framework
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                SignalR
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Razor
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Svelte
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Solid.js
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Angular
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                NgRx
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Tauri
              </div>
              
              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Windows 
              </div>

              <div class='rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center pop'>
                Linux/bash
              </div>

            </div>

          </div>

          <section class='my-20'>
            <h2 class='my-2 text-center font-bold text-2xl opacity-70'>Projects</h2>
            <div class="flex flex-wrap flex-row justify-center w-fulltext-center">
              <Card
                images={[riesgosDashboard, riesgos1, riesgos2, riesgos3, riesgos4]}
                title='Risk Management'
                tags={['Next.js', 'TypeScript', 'PostgreSQL']}
                visit='https://risk-management-seven.vercel.app/dashboard'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>For my graduation project, I created a comprehensive risk management system tailored for a local government entity in my country. Originally developed using Java and Spring Boot, I made the deliberate choice to rebuild the system. This time, I opted for a technology stack centered around the Next.js framework, complemented by TailwindCSS for styling, PostgreSQL for the database, and the Prisma ORM for enhanced data management.</p>
                  <p class='opacity-70 mb-2'>By transitioning to this stack, I unlocked the capacity to introduce a lot of new features, all while significantly elevating the overall user and developer experience.</p>
                </div>
              </Card>

              <Card
                images={[construccion]}
                title='Construction company website'
                tags={['Astro', 'TypeScript', 'Three.js']}
                visit='https://construccionperezzeledon.netlify.app/'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>Website for a local business with 3D elements.</p>
                </div>
              </Card>

              <Card
                images={[sinpepay1]}
                title='Sinpepay'
                tags={['Astro', 'TypeScript', 'Android']}
                visit='https://sinpepay.net'
                code='https://github.com/crsolver/sinpepay'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>Herramienta (Web y Aplicación Android) para facilitar transacciones de SINPE Móvil (Costa Rica) vía SMS.</p>
                </div>
              </Card>

              <Card
                images={[tcbanner1, tcbanner2]}
                title='Business directory'
                tags={['Go', 'React']}
                visit='https://ticobanner.com'
              >
                <div class='mt-2 mb-6 text-left'>
                </div>
              </Card>



              <Card
                images={[spCodeImg1, spCodeImg2, spCodeImg3]}
                title='Spaced Repetition for Code'
                tags={['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite']}
                code='https://github.com/crsolver/spaced-repetition-for-code'
              >
                <div class='mb-6 text-left'>
                  <p class='opacity-70 mb-2'>A desktop application inspired by spaced repetition software like Anki that was designed specifically for coders, it ensures you never forget essential snippets like centering a div or the syntax of a new programming language.</p>
                  <p class='opacity-70 mb-2'>It includes syntax highlighting for the most popular programing languages, vim keybindings and an algorithm to schedule reviews.</p>
                  <p class='opacity-70 mb-2'>The application was build with React, Typescript, SQLite and bundled as a Windows application with Tauri, a Rust based alternative to Electron. It's still a work in progress, but I use it every day.</p>
                </div>
              </Card>


              <Card
                images={[anki1, anki2]}
                title='Anki Addon'
                tags={['Python', 'JavaScript']}
                code='https://github.com/crsolver/anki-word-or-phrase-reconstruction'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>Anki is a useful spaced repetition software for language learning. I have created a helpful add-on for it that introduces word and sentence reconstruction exercises similar to Duolingo.</p>
                </div>
              </Card>

              <Card
                images={[recli1, recli2]}
                title='recli'
                tags={['Rust', 'SQLite']}
                code='https://github.com/crsolver/recli'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>"Recli" is a command-line application written in Rust that aids in memorizing and practicing CLI commands.</p>
                </div>
              </Card>

              <Card
                images={[lingomark1, lingomark2]}
                title='LingoMark'
                tags={['Rust', 'TypeScript', 'Tauri', 'SQLite']}
                code='https://github.com/crsolver/lingomark'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>LingoMark is an experimental extended Markdown editor designed for efficient note-taking in language learning. Utilizing custom HTML-like tags, it facilitates the rendering of buttons, enabling users to playback audio from vocabulary entries. Additionally, LingoMark incorporates buttons that automatically generate exercises based on the file's content, presenting them seamlessly to the user.</p>
                </div>
              </Card>

              <Card
                images={[reader1, reader2, reader3]}
                title='Helpful Reader'
                tags={['Rust', 'TypeScript', 'Tauri', 'SQLite', 'OpenAI API']}
                code='https://github.com/crsolver/read-japanese'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>
                    This application facilitates language learning by assisting users in reading their target languages. Users can choose words and access their meanings from three different sources: a local dictionary, an online dictionary, and an AI for in-context translation and grammar explanations. Notably, languages like Japanese do not separate words with spaces, making it challenging to differentiate and process them. To address this, the application utilizes the OpenAI API's function calling feature and prompt engineering to segment sentences into indivual words.
                  </p>
                </div>
              </Card>

              <Card
                images={[memorizerImg2, memorizerImg]}
                title='Text-Memorizer'
                tags={['TypeScript', 'Solid.js']}
                code='https://github.com/crsolver/text-memorizer'
                visit='https://crsolver.github.io/text-memorizer'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>
                    This tool is designed to enhance your ability to memorize various forms of text, such as lines from scripts, poems, speeches, and monologues.
                  </p>
                </div>
              </Card>


              <Card
                images={[goduz]}
                title='Goduz'
                tags={['GDScript']}
                code='https://github.com/crsolver/goduz'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>Intrigued by the inner workings of UI libraries, I embarked on an exploration to create an experimental UI library within a Game Engine, drawing inspiration from the principles of React. While the project is not completed and not recommended for deployment in real-world applications, it successfully operates. The endeavor proved invaluable in enhancing my comprehension of React, particularly through the implementation of a Diffing algorithm.</p>
                </div>
              </Card>

              <Card
                images={[portfolio]}
                title='Portfolio'
                tags={['TypeScript', 'Solid.js']}
                code='https://github.com/crsolver/my-portfolio-webside'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>For this website, I opted to explore Solid.js, a JavaScript library designed for constructing UI interfaces. Solid.js shares a similar philosophy with React but it has better performance. Deployed on Github Pages using Github Actions.</p>
                </div>
              </Card>

              <Card
                images={[web]}
                title='Landing Page'
                tags={['HTML', 'CSS', 'Bootstrapt', 'GSAP.js']}
                code='https://github.com/crsolver/desarrolloweb-costarica'
                visit='https://desarrollowebcostarica.netlify.app/'
              >
                <div class='mt-2 mb-6 text-left'>
                  <p class='opacity-70 mb-2'>A simple website with some nice animations.</p>
                </div>
              </Card>

              <Card
                images={[chess]}
                title='Practice Chess'
                tags={['Gdscript']}
                code='https://github.com/crsolver/spaced-repetition-for-chess'
              >
                <div class='mt-2 mb-6 text-left'>
                </div>
              </Card>

              <Card
                images={[discord1Img, discord2Img]}
                title='Discord Clone'
                tags={['C#', 'ASP.NET Core 7', 'SignalR', 'Angular 15']}
                code='https://github.com/crsolver/discord-clone'
              >
                <div class='mt-2 mb-6 text-left'>
                  Discord clone with a real time chat implemented with SignalR.
                </div>
              </Card>

            </div>
          </section>

          <div class='my-20 text-center'>
            <h2 class='my-2 mb-6 text-center font-bold text-2xl opacity-70'>Education</h2>
            <img class='mx-auto mb-2' width={60} src="https://www.uned.ac.cr/themes/uned/img/uned_logo_header.svg"></img>
            <p>Bachillerato en Ingeniería Informática</p>
            <div class='flex justify-center'><p>Universidad Estatal a Distancia</p></div>
            <p>Costa Rica, 2023</p>
          </div>

          <div class='mt-19 flex justify-center opacity-50'>
            <img src="https://ghchart.rshah.org/1F252C/crsolver" alt="2016rshah's Blue Github Chart" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
