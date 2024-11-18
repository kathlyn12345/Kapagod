
export const handleViewAll = (navigation, genre) => {
  const genreScreens = {
    Action: 'AllAction',
    Comedy: 'AllComedy',
    Horror: 'AllHorror',
    SciFi: 'AllSciFi',
    Romance: 'AllRomance',
    Fantasy: 'AllFantasy',
  };

  const screenName = genreScreens[genre];

  if (screenName) {
    navigation.navigate(screenName);
    console.log(`View All ${genre}`);
  } else {
    console.error(`No screen found for genre: ${genre}`);
  }
};
