---
layout: default
title: Contributions
---

Here is listed contributions I did these years for different projects.

## Xash3D FWGS
There are a lot of things: bug fixing, bug reporting, implementing new features, testing, etc.  
Full list of my contributions for this engine you can see [here](https://github.com/FWGS/xash3d-fwgs/commits?author=SNMetamorph).

## OpenWrt
Added support for router ZyXEL Keenetic Start, [here](https://github.com/openwrt/openwrt/pull/1740) is pull request with all details.

## TSMOD.NET
Implemented patcher dynamic library for game client to fix several problems such as periodically crashes and broken UTF-8 support in HUD-text.
Also it adds new features: on-screen speedometer, hiding of spectator panel, fix for Barrett "silent shoot".  
  
Technically, it uses AsmJit library for generating proper executable code, and then this data is being injected in specific places of 
game client library to change it's default behavior.
