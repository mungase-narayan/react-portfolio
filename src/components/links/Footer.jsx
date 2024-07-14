import React from 'react'

const socialIcons = [
  { alt: 'facebook-icon', src: '/photos/facebook.png' },
  { alt: 'linkedin-icon', src: '/photos/linkedin.png' },
  { alt: 'twitter-icon', src: '/photos/twitter.png' },
  { alt: 'instagram-icon', src: '/photos/instagram.png' },
  { alt: 'youtube-icon', src: '/photos/youtube.png' },
  { alt: 'github-icon', src: '/photos/github.png' },
  
]

const sharedClasses = {
  textPrimary: 'text-primary hover:text-primary-foreground transform transition-transform duration-300 hover:scale-110',
  textMuted: 'text-muted-foreground',
  hoverText: 'hover:text-foreground transition-colors duration-300',
  iconTransform: 'hover:text-foreground transform transition-transform duration-300 hover:scale-110',
  flexCenter: 'flex justify-center',
  spaceX4: 'space-x-4',
  spaceX6: 'space-x-6',
  spaceY8: 'space-y-8',
  mb6: 'mb-6',
  mt2: 'mt-2',
  container: 'container mx-auto text-center',
}

const SocialIcon = ({ alt, src }) => (
  <a href="#" className={sharedClasses.textPrimary}>
    <img className='h-6 w-6' aria-hidden="true" alt={alt} src={src} />
  </a>
)

const Footer = () => {
  return (
    <div className={`bg-card bg-slate-100 ${sharedClasses.textMuted} py-8`}>
      <div className={sharedClasses.container}>
        <div className={sharedClasses.spaceY8}>
          <div className={`${sharedClasses.flexCenter} ${sharedClasses.spaceX6} ${sharedClasses.mb6}`}>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} alt={icon.alt} src={icon.src} />
            ))}
          </div>

          <div className=' flex items-center justify-center space-x-8'>
            <div className='flex flex-col space-y-4'>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                About
              </a>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Need Help?
              </a>
            </div>

            <div className='flex flex-col space-y-4'>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Content Guide
              </a>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Lifehacker Store
              </a>
            </div>

            <div className='flex flex-col space-y-4'>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Privacy
              </a>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Terms of Use
              </a>
            </div>

            <div className='flex flex-col space-y-4'>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Advertising
              </a>
              <a href="#" className={`${sharedClasses.hoverText} text-slate-500`}>
                Jobs
              </a>
            </div>
          </div>
          <div className={`${sharedClasses.textMuted} text-slate-500`}>
            <p>© 2024 G/O Media Inc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer