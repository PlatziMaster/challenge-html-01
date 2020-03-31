import React from 'react';
import iconShare from '../assets/icons/share.svg';
import iconView from '../assets/icons/view.svg';
import iconComment from '../assets/icons/comment.svg';

const Cover = ({
  img,
  tag,
  title,
  description,
  share,
  view,
  comment,
  type,
}) => {
  return (
    <section className={`Cover Cover-${type}`}>
      <img className="Cover__img" src={img} alt={tag} />
      <div className="Cover__content">
        <h6 className="Cover__content-tag">
          {String(tag).toLocaleUpperCase()}
        </h6>
        <h3 className="Cover__content-title">{title}</h3>
        <p className="Cover__content-description">{description}</p>
        <div className="Cover__content-actions">
          <div className="Cover__content-actions-icon">
            <img src={iconShare} alt="Icon Shared" />
            <p>{share}</p>
          </div>
          <div className="Cover__content-actions-icon">
            <img src={iconView} alt="Icon Shared" />
            <p>{view}</p>
          </div>
          <div className="Cover__content-actions-icon">
            <img src={iconComment} alt="Icon Comment" />
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
