import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="29"
          viewBox="0 0 60 29"
        >
          <g id="Logo" transform="translate(0 -1)">
            <text
              id="Deck"
              transform="translate(0 25)"
              fill="#f9fafc"
              fontSize="24"
              fontFamily="Lato-Bold, Lato"
              fontWeight="700"
              letterSpacing="-0.015em"
              opacity="0.2"
            >
              <tspan x="0" y="0">
                Deck
              </tspan>
            </text>
            <g
              id="Element_Shape"
              data-name="Element / Shape"
              transform="translate(56 20)"
            >
              <rect id="Background" width="4" height="4" fill="#ff565c" />
            </g>
          </g>
        </svg>
        <div className="footer__copyright-year">
          © 2018 Deck
          <br />
          Component based UI Kit
        </div>
      </div>
      <div className="footer__menu">
        <ul>
          <li>
            <a href="./index.html">Technology</a>
          </li>
          <li>
            <a href="./leadership.html">Leadership</a>
          </li>
          <li>
            <a href="./index.html">News</a>
          </li>
          <li>
            <a href="./index.html">Entertainment</a>
          </li>
          <li>
            <a href="./index.html">Ideas</a>
          </li>
          <li>
            <a href="./index.html">Video</a>
          </li>
          <li>
            <a href="./index.html">Finance</a>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <div className="footer__social-follow">
          Follow us:
          <a href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="instagram"
                d="M14.154,16H1.846A1.848,1.848,0,0,1,0,14.153V1.846A1.848,1.848,0,0,1,1.846,0H14.154A1.848,1.848,0,0,1,16,1.846V14.153A1.848,1.848,0,0,1,14.154,16ZM1.846,6.769v6.769a.616.616,0,0,0,.616.616H13.538a.617.617,0,0,0,.616-.616V6.769H12.761a4.923,4.923,0,1,1-9.522,0ZM8,4.923A3.077,3.077,0,1,0,11.077,8,3.081,3.081,0,0,0,8,4.923Zm3.717-3.077a.641.641,0,0,0-.64.64v1.92a.641.641,0,0,0,.64.641h1.92a.642.642,0,0,0,.641-.641V2.486a.641.641,0,0,0-.641-.64Z"
                transform="translate(0 0)"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
          </a>
          <a href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.386"
              height="16"
              viewBox="0 0 12.386 16"
            >
              <path
                id="pinterest"
                d="M6.568,0C2.2,0,0,3.131,0,5.741A3.54,3.54,0,0,0,1.882,9.252a.316.316,0,0,0,.46-.23c.042-.161.143-.568.188-.738A.446.446,0,0,0,2.4,7.772a2.65,2.65,0,0,1-.607-1.8,4.353,4.353,0,0,1,4.525-4.4c2.468,0,3.824,1.508,3.824,3.522,0,2.65-1.173,4.886-2.914,4.886a1.422,1.422,0,0,1-1.451-1.77,19.713,19.713,0,0,0,.811-3.261,1.231,1.231,0,0,0-1.24-1.38c-.983,0-1.772,1.017-1.772,2.379A3.535,3.535,0,0,0,3.868,7.4L2.686,12.406A10.309,10.309,0,0,0,2.659,15.9a.122.122,0,0,0,.218.053,9.807,9.807,0,0,0,1.659-3.007c.113-.409.647-2.526.647-2.526a2.634,2.634,0,0,0,2.245,1.146c2.954,0,4.959-2.693,4.959-6.3A5.493,5.493,0,0,0,6.568,0Z"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
          </a>
          <a href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="13.003"
              viewBox="0 0 16 13.003"
            >
              <path
                id="twitter"
                d="M16,1.539a6.558,6.558,0,0,1-1.885.517A3.292,3.292,0,0,0,15.558.24a6.572,6.572,0,0,1-2.085.8A3.285,3.285,0,0,0,7.88,4.031,9.319,9.319,0,0,1,1.114.6,3.286,3.286,0,0,0,2.13,4.983,3.268,3.268,0,0,1,.643,4.573a3.286,3.286,0,0,0,2.633,3.26,3.289,3.289,0,0,1-1.482.056,3.286,3.286,0,0,0,3.066,2.28A6.6,6.6,0,0,1,0,11.528,9.291,9.291,0,0,0,5.032,13a9.284,9.284,0,0,0,9.33-9.764A6.669,6.669,0,0,0,16,1.539Z"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
          </a>
          <a href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7.385"
              height="16"
              viewBox="0 0 7.385 16"
            >
              <path
                id="facebook"
                d="M0,5.231V7.966H1.675V16H4.9V7.932H7.145l.239-2.7H4.9V3.692c0-.637.128-.889.744-.889H7.385V0H5.154c-2.4,0-3.478,1.055-3.478,3.077V5.231Z"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
          </a>
        </div>
        <div className="footer__social-subscribe">
          <input type="text" placeholder="Your E-mail" />
          <div className="footer__social-subscribe-red">Subscribe</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
