import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/employees",
    isOutlink: false
  },
  {
    title: "Google",
    icon: <GoogleIcon />,
    link: "https://www.google.com/?hl=ja",
    isOutlink: true
  },
  {
    title: "YouTube",
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/",
    isOutlink: true
  },
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/",
    isOutlink: true
  }
];