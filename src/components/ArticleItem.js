import React from 'react';
import '../styles/components/ArticleItem.css';

const ArticleItem = ({ image, title, text, sizeGrid, label }) => {
  return (
    <>
      {sizeGrid === true ? (
        <div className="articles--item large">
          <img className="articles--item-image" src={image} alt={image} />
          <div className="articles--item-label">{label}</div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      ) : (
        <div className="articles--item short">
          <img className="articles--item-image" src={image} alt={image} />
          <div className="articles--item-label">{label}</div>
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
