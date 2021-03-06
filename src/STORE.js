export default {
  users: [
    {
      id: 1,
      user_name: 'FumbleBee',
      email_address: 'harry@gmail.com',
      password_hash: 'password',
      created_on: '2020-10-07 10:23:54+02',
      last_login: '2020-10-08 10:23:54+02',
      verified: true,
      active: true,
    },
    {
      id: 2,
      user_name: 'Testy McTesterson',
      email_address: 't3sty@gmail.com',
      password_hash: 'password',
      created_on: '2020-10-08 06:23:54+02',
      last_login: '2020-10-08 08:23:54+02',
      verified: false,
      active: true,
    },

  ],
  coffee_reviews: [
    {
      id: 1,
      user_name: 'Testy McTesterson',
      user_id: 2,
      coffee_name: 'Ethiopia: YirgZ',
      roaster_id: 1,
      roaster_name: 'La Colombe Coffee Roasters',
      coffee_origin: 'Ethiopia',
      process_method: 'Washed',
      review_body: 'Scenester neutra truffaut, pug selfies cloud bread chambray DIY poke sed XOXO. Before they sold out fanny pack williamsburg, aute pariatur proident chicharrones retro helvetica bicycle rights ut exercitation hammock subway tile pug. Distillery tousled yuccie blue bottle aliquip. Kogi laboris man bun woke. Culpa quinoa raw denim palo santo bespoke iPhone authentic. Mustache mixtape keffiyeh pitchfork pug. Knausgaard id nulla, tumeric four loko adaptogen commodo bitters blue bottle ullamco.',
      active: true
    },
    {
      id: 2,
      user_name: 'FumbleBee',
      user_id: 1,
      coffee_name: 'Keyna: Karagoto',
      roaster_id: 1,
      roaster_name: 'La Colombe Coffee Roasters',
      coffee_origin: 'Kenya',
      process_method: 'Washed',
      review_body: 'Pinterest williamsburg direct trade pariatur try-hard vegan drinking vinegar subway tile artisan farm-to-table synth. Kale chips forage aliquip in ut. Paleo DIY semiotics normcore palo santo chartreuse echo park aliquip polaroid portland glossier readymade enamel pin eu. Consequat in elit plaid photo booth succulents. Aute enamel pin voluptate occaecat sed duis.',
      active: true
    }
  ],
  roaster_table: [
    {
      id: 1,
      name: 'La Colombe Coffee Roasters',
      location: 'Philadelphia',
      founded_year: '1994',
      about: '',
      verified: false,
      active: true

    }
  ],
  comments: [
    {
      id: 1,
      review_id: 1,
      user_id: 1,
      comment_body: 'I agree with your sentiment regarding the Ethiopian Coffee',
      timestamp: 'timestamp',
      active: true
    },
    {
      id: 2,
      review_id: 1,
      user_id: 2,
      comment_body: 'Thanks FumbleBee',
      timestamp: 'timestamp',
      active: true
    },
    {
      id: 3,
      review_id: 2,
      user_id: 2,
      comment_body: 'You\'re wrong',
      timestamp: 'timestamp',
      active: true
    }
  ],
  navOptions: [
    // 'Signup',
    'Reviews',
    'Write',
    // 'Account',
  ]
}