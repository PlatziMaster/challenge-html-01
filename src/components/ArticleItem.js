import React from 'react';
import '../styles/components/ArticleItem.css';

const ArticleItem = ({ image, title, text, sizeGrid }) => {
  return (
    <>
      {sizeGrid === true ? (
        <div className="articles--item large">
          <img src={image} alt={image} />
          {/* <span className="articles--item-box">Test label</span> */}
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      ) : (
        <div className="articles--item short">
          <img src={image} alt={image} />
          {/* <span className="articles--item-box">Test label</span> */}
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default ArticleItem;

// class ArticleItem extends Component {
//   // ({ image, title, text, sizeGrid })
//   constructor(props) {
//     super(props);
//     this.state = {
//       size: props.sizeGrid,
//     };
//   }

// large and short are values given in ArticleItem.css
//   render() {
//     return (
//       <>
//         {this.state.size === true ? (
//           <div className="articles--item large">
//             <img src={this.props.image} alt={this.props.image} />
//             {/* <span className="articles--item-box">Test label</span> */}
//             <h2>{this.props.title}</h2>
//             <p>{this.props.text}</p>
//           </div>
//         ) : (
//           <div className="articles--item short">
//             <img src={this.props.image} alt={this.props.image} />
//             {/* <span className="articles--item-box">Test label</span> */}
//             <h2>{this.props.title}</h2>
//             <p>{this.props.text}</p>
//           </div>
//         )}
//       </>
//     );
//   }
// }
