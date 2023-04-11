import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import styles from './styles.module.css';
import clsx from 'clsx';

function SimpleLinkItem({item}) {
  return item.html ? (
    <span
      className="footer__link-item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({links}) {
  return (
    <div className="text--center">
      <div className={clsx("footer__links ", styles.footerLinksBlock)}>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
