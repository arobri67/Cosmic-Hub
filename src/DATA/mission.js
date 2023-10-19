const mission = {
  curiosity:
    "The mission of the Mars rover Curiosity, officially known as the Mars Science Laboratory (MSL), is to explore and study the surface of Mars to better understand its geology and climate history. It aims to assess whether the Martian environment was ever capable of supporting microbial life, study the planet's climate and natural resources, and gather data to help prepare for future human missions to Mars. Curiosity is equipped with a variety of scientific instruments to accomplish these goals, including a rock-zapping laser, a drill, and a suite of cameras and spectrometers for analyzing the Martian terrain. Since its arrival on Mars in 2012, Curiosity has been providing valuable insights into the Red Planet's past and present.",

  perseverance:
    "The mission of the Mars rover Perseverance, also known as the Mars 2020 mission, is to explore the Jezero Crater on Mars to search for signs of past microbial life, collect and store rock and soil samples, and demonstrate technology for future human missions to Mars. Perseverance is equipped with a wide range of scientific instruments, including cameras, spectrometers, and a drill. It aims to study the planet's geology, climate, and the potential habitability of Mars, with a particular focus on the ancient river delta in Jezero Crater. Additionally, Perseverance carries the Mars Helicopter, named Ingenuity, which is a technology demonstration to test powered flight on another planet. The rover's mission is to advance our understanding of Mars and prepare for future exploration and potential human colonization.",
};
export const getMission = (rover) => {
  return mission[rover];
};
