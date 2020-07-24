import React, { PureComponent } from 'react';

import '../styles/components/Blog.styl';

import Header from '../components/Header';
import BlogPost from '../components/Blogpost';
import Footer from '../components/Footer';

class Blog extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <BlogPost />
        <Footer />
      </div>
    );
  }
}

export default Blog;
