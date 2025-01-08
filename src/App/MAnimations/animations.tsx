export const MoveRight = {
   hidden: {
      x: -100,
      opacity: 0,
   },
   visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
   })
}

export const MoveLeft = {
   hidden: {
      x: 100,
      opacity: 0,
   },
   visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
   })
}

export const appearanceRight = {
   hidden: {
      x: 10,
      opacity: 0,
   },
   visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
   })
}


export const MoveUp = {
   hidden: {
      y: 10,
      opacity: 0,
   },
   visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },

   })
}

export const MoveDown = {
   hidden: {
      y: -10,
      opacity: 0,
   },
   visible: (custom: number) => ({

      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },

   })
}

