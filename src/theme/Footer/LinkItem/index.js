import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';
import { DevtoIcon, GithubIcon, TelegramIcon, YoutubeIcon } from '../../../icons';

function SuitableSocialIcon(props) {
  const {url, ...other} = props;
  if (url.startsWith('https://github.com'))
    return (<GithubIcon {...other} />);
  else if (url.startsWith('https://t.me'))
    return (<TelegramIcon {...other} />);
  else if (url.startsWith('https://www.youtube.com'))
    return (<YoutubeIcon {...other} />);
  else if (url.startsWith('https://dev.to'))
    return (<DevtoIcon {...other} />);
  else
    return (<IconExternalLink/>);
}

export default function FooterLinkItem({item}) {
  const {to, href, label, logo, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      title={label}
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {<SuitableSocialIcon className={styles.footerSvgIcon} url={href}/>}
    </Link>
  );
}