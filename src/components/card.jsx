import React from 'react';
import iconShare from '../assets/icons/share.svg';
import iconView from '../assets/icons/view.svg';
import iconComment from '../assets/icons/comment.svg';

const card = ({
  type,
  img,
  tag,
  title,
  description,
  avatar,
  name,
  share,
  view,
  comment,
}) => {
  return (
    <section className={`${type}`}>
      {img ? (
        <div className={`${type}__img`}>
          <img src={img} alt={tag} />
          {tag && (
            <h6 className={`${type}__img-tag`}>
              {String(tag).toLocaleUpperCase()}
            </h6>
          )}
        </div>
      ) : (
        <div className={`${type}__img`}>
          <h6 className={`${type}__img-tag`}>
            {String(tag).toLocaleUpperCase()}
          </h6>
        </div>
      )}
      <h2 className={`${type}__title`}>{title}</h2>
      <p className={`${type}__description`}>{description}</p>
      {avatar && (
        <div className={`${type}__user`}>
          <img src={avatar} alt={name} />
          <div className={`${type}__user-name`}>
            {name && (
              <>
                <p>Autor</p>
                <h6>{String(name).toLocaleUpperCase()}</h6>
              </>
            )}
          </div>
        </div>
      )}
      {share && (
        <div className={`${type}__actions`}>
          {share && (
            <div className="action-icon">
              <img src={iconShare} alt="Icon Shared" />
              <p>{share}</p>
            </div>
          )}
          {view && (
            <div className="action-icon">
              <img src={iconView} alt="Icon viewed" />
              <p>{view}</p>
            </div>
          )}
          {comment && (
            <div className="action-icon">
              <img src={iconComment} alt="Icon commented" />
              <p>{comment}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default card;
