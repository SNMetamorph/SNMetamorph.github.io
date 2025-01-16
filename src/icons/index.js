import React from "react";
import Icon from '@mdi/react';
import { 
  mdiGithub,
  mdiYoutube,
  mdiDevTo,
  mdiRssBox,
  mdiMastodon
} from '@mdi/js';

export function GithubIcon(props) {
  const {...other} = props;
  return (
    <Icon path={mdiGithub} {...other}/>
  );
}

export function YoutubeIcon(props) {
  const {...other} = props;
  return (
    <Icon path={mdiYoutube} {...other}/>
  );
}

export function DevtoIcon(props) {
  const {...other} = props;
  return (
    <Icon path={mdiDevTo} {...other}/>
  );
}

export function RssIcon(props) {
  const {...other} = props;
  return (
    <Icon path={mdiRssBox} {...other}/>
  );
}

export function MastodonIcon(props) {
  const {...other} = props;
  return (
    <Icon path={mdiMastodon} {...other}/>
  );
}
