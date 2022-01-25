const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const descontructedSeasons = {spring, summer, autumn, winter} = yearSeasons;
  const oneArraySeasons = [...spring, ...summer, ...autumn, ...winter];

  console.log(oneArraySeasons);
