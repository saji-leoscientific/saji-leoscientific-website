import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
// import './ModeImageSwitcher.css'

const ContactDetailsImageSwitcher = ({lightImageSrc, darkImageSrc}) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <img 
    className="img-contact-logo-size"
    src={isDarkTheme ? darkImageSrc : lightImageSrc} alt="Contact-details-Logo" />
  )
}

// const ImageSwitcher = ({lightImageSrc, darkImageSrc, altText}) => {
//     return (
//       <BrowserOnly fallback={<img src={darkImageSrc} alt={altText} />}>
//         {() => {
//           const { isDarkTheme } = useThemeContext();
//           const imgSrc = isDarkTheme ? darkImgSrc : lightImgSrc;
//           const fullImgSrc = useBaseUrl(imgSrc);
  
//           return (
//             <img src={fullImgSrc} alt={altText} />
//           )
//         }}
//       </BrowserOnly>
//     )
//   }

export default ContactDetailsImageSwitcher;