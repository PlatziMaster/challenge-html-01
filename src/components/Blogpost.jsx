import React, { PureComponent } from 'react';

import '../styles/components/Default.styl';
import '../styles/components/BlogPost.styl';

import cameraImg from '../../resources/imgs/dose-media-344938.png';
import watchImg from '../../resources/imgs/crew-22235.png';
import dronImg from '../../resources/imgs/annie-spratt-213059.png';
import smarthPhoneImg from '../../resources/imgs/aidan-hancock-455440.png';
import recipeImg from '../../resources/imgs/jeff-sheldon-264920.png';

import URLS from './URLS';
// Celular y dron son 2

class BlogPost extends PureComponent {
  render() {
    return (
      <main role="main" className="main">
        <div className="container">
          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={cameraImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.technology} className="category hoverCategory">
                  Technology
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-2">
            <figure className="post-2__container">
              <a href="/">
                <img
                  src={smarthPhoneImg}
                  className="post-2__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-2__container--category">
                <a href={URLS.technology} className="category">
                  Technology
                </a>
              </div>
              <div className="post-2__description">
                <h3 className="post-2__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-2__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={watchImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.finance} className="category">
                  Finance
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={recipeImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.entretainment} className="category">
                  Entretainment
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-2">
            <figure className="post-2__container">
              <a href="/">
                <img
                  src={dronImg}
                  className="post-2__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-2__container--category">
                <a href={URLS.technology} className="category">
                  Technology
                </a>
              </div>
              <div className="post-2__description">
                <h3 className="post-2__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-2__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={cameraImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.technology} className="category">
                  Technology
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={recipeImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.entretainment} className="category">
                  Entretainment
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-1">
            <figure className="post-1__container">
              <a href="/">
                <img
                  src={watchImg}
                  className="post-1__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-1__container--category">
                <a href={URLS.finance} className="category">
                  Finance
                </a>
              </div>
              <div className="post-1__description">
                <h3 className="post-1__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-1__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>

          <div className="post-2">
            <figure className="post-2__container">
              <a href="/">
                <img
                  src={smarthPhoneImg}
                  className="post-2__conatiner--img"
                  alt="Cover page"
                />
              </a>
              <div className="post-2__container--category">
                <a href={URLS.technology} className="category">
                  Technology
                </a>
              </div>
              <div className="post-2__description">
                <h3 className="post-2__description--title">
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </h3>
                <p className="post-2__description--subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere qui ratione fugiat?
                </p>
              </div>
            </figure>
          </div>
        </div>
      </main>
    );
  }
}

export default BlogPost;
