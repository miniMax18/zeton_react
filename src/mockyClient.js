export const mockyClient = (url) => {
  return {
    data: [
      {
        pk: 1,
        email: 'wojtek-zeton@mailinator.com',
        username: 'wojtek',
        first_name: 'Wojtek',
        last_name: '',
        total_points: 250,
      },
      {
        pk: 2,
        email: 'kuba-zeton@mailinator.com',
        username: 'kuba',
        first_name: 'Kuba',
        last_name: '',
        total_points: 120,
      },
    ],
  };
};
