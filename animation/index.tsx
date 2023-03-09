export const cardAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const cardContainerAnimation = {
  staggerChildren: 0.2,
  delayChildren: 0.1,
}

export const sectionAnimation = {
  visible: {
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: {
    y: 200,
    transition: { duration: 0.5 },
  },
}

export const titleVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
}

export const textVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
}

export const logoVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4, duration: 0.5 } },
}
