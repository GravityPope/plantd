# Plant'd

## Overview

A modern garden planning tool that makes implementing organic growing, crop rotation, and companion planting principals a breeze. Plan out any sized garden, from a single pot on a balcony, to an urban farm!

## How to install
- clone the repository
#### Server & DB
- create a new `mySQL` database
- `cd` to `server` then `npm i` to install packages
- create a `.env` file using the provided `.env.sample`, include the newly created database name
- `npx knex migrate:latest` then `npx knex seed:run` to populate the db
- `node index.js` to start the server, it will print a confirmation of the running port in the terminal


#### Client
- in a new terminal instance `cd` to `client`
- `npm i` to install packages
- `npm start` to start the client

### Problem

<!-- Why is your app needed? Background information around any pain points or other reasons. -->

Planning what to grow in your garden every year is a time consuming process when you want to maximize production and minimize the use of chemical fertilizers and pesticides. Current fully featured digital tools are clunky to use, riddled with outdated interfaces and lack functional mobile options.

### User Profile

<!-- Who will use your app? How will they use it? Any special considerations that your app must take into account. -->

- An inexperienced, new, or curious Gardener, will find this app an approachable place to start and will appreciate the guidance and suggestions it provides.
- An experienced Gardener will appreciate the clean and modern interface, ability to access previous years' plans, and helpful crop rotation suggestions that maximize soil health and productivity.
- All Gardeners will benefit from being able to access and create their plans from any device: Smartphone, Tablet, or Computer.

### Features

<!-- List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented. -->

- As a Gardener, I want to interact with a clean and intuitive interface so that I can plan my garden quickly and easily.
- As a Gardener, I want to know what plants I should grow together so I can spend less time managing soil health.
- As a Gardener, I want to know how many plants I can fit in a given growing space so I can maximize my yield.
- As a Gardener, I want to understand what plants grow best in my region so I can choose the right cultivars for my conditions.
- As a Gardener, I want to be able to save the plans I have made so I can refer back to them later.
- As a Gardener, I want to attract beneficial insects to stay in my garden so I can spend less time hand-pollenating and managing pests.

## Implementation

### Tech Stack

<!-- List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations. -->

- React
- JSX
- Sass
- React Router
- Node.js
- Express
- MySQL
- Knex
- Axios
- dndKit

### APIs

No external APIs outside of the tech stack will be utilized

### Sitemap

```

Index ___ Home page that prompts existing users to log-in. Also provides an option to sign-up, or continue as guest
      |
      |__ Plan Builder Page - main page where new plans are made and existing plans are viewed or modified. Same for guests and registered users
      |
      |__Sign-up Page - A page to register a new user
      |
      |__ User Profile - A page where registered users can access their settings, preferences, saved plans, and delete their account


```

### Screenshots

<!-- ![a pencil mockup of the mobile UI](./readme%20assets/mobile-mockup.jpg)
![a pencil mockup of the tablet and desktop UI](./readme%20assets/tablet-mockup.jpg) -->
Desktop:
![A sceenshot of the desktop interface](./readme%20assets/Desktop.png)
Desktop Modals:
![A sceenshot of the desktop Modal interface](./readme%20assets/Desktop-Modal.png)
Mobile:
![A sceenshot of the Mobile interface](./readme%20assets/Mobile.png)

### Data

![a diagram of database tables and their relationships](./readme%20assets/data-table-relationships.jpg)

### Endpoints

#### Plants

- GET `/api/plants` get all plants and their types. This will include basic information about the plant, but not specific cultivar or growth details

response:

```
[
  {
    "type_id": "479cbb7f-00d8-4c24-a45c-7d10865a7fec",
    "plant_id": "43d50474-d1f6-4ff9-b2d1-658a2efccba1",
    "type": "Small Fruit",
    "plant_name": "Strawberries",
    "plant_description": "Juicy sweetness and vibrant color make Strawberries perfect for enjoying fresh and adding to desserts. Also great for canning and freezing to enjoy all year."
  },
  {
    "type_id": "5bdba3d3-451e-4ee8-ba78-efcf9746aff8",
    "plant_id": "92fe9d1d-1a43-4864-b265-9069079bf2c0",
    "type": "Cereal Grain",
    "plant_name": "Corn",
    "plant_description": "A tall cereal plant bearing large, edible grains on cob-like structures, renowned for its versatility in culinary applications and its role as a staple crop in many cultures."
  }, ...
]
```

- GET `/api/plants/:id` get a specific plant by id. This will return an array of cultivars for that plant in addition to the plant's information.

response:

```
{
  "type_id": "f6052f3a-deb9-4861-a962-e3aac2865091",
  "plant_id": "0738a646-6aa8-4d5e-b5bd-3c2f6c9a4d56",
  "type": "Nightshade",
  "plant_name": "Tomatoes",
  "plant_description": "A heat loving and thirsty garden classic, with many different varieties sutable for different preparations",
  "cultivars": [
    {
      "id": "c43a324d-fe94-47cd-a6b7-428feca264dd",
      "name": "Cherokee Purple",
      "description": "The Cherokee Purple Heirloom Tomato is a purple coloured variety, cultivated by a Native American Cherokee tribe. The plants are highly productive, producing loads of 12 ounce beefsteak tomatoes with deep red interiors. Its complex sweet flavours make it one of the best tasting heirlooms.",
      "maturity_in_days": 80
    }, ...
  ]
}
```

- GET `/api/cultivars/:id` get a cultivar by id. This will return all detailed information about a cultivar, including its growth requirements

response:

```
{
  "id": "0fd46f1a-175a-4b21-9ecb-17c3220c70a4",
  "plant_id": "ab152a53-8a17-45e2-a864-e9b985c66683",
  "name": "Sugar Daddy",
  "description": "A very productive, bushy plant that benefits from some support, Sugar Daddy snap pea seeds produce pods that become uniquely stringless, 8cm (3\") snap peas. They grow in pairs near the top of the plant for easy picking. This variety has good disease resistance, but not to the enation virus that sometimes spreads in mid-summer.",
  "sun": "full",
  "frost_tolerance": "mild",
  "maturity_in_days": 68,
  "footprint": 2,
  "support": 1,
  "usda_zone": { "value": [3, 4, 5, 6, 7, 8, 9, 10, 11]}
}
```

- GET `api/plants/:id/friends` get a list of positive-influence companions for a specific plant. responds with a list of plants

response:

```
[{
    type_id: <string>,
    plant_id: <string>,
    type: 'Nightshade',
    plant_name: 'Tomato - indeterminate',
    plant_description: 'A tasty garden classic, with many different varieties sutable for different preparations'

},
{
    type_id: <string>,
    plant_id: <string>,
    type: 'Pepper',
    plant_name: 'Bell Pepper',
    plant_description: 'Sweet and crisp pepper, with large fruits in a variety of colors which have little to no spicy flavor'

}, ...
]
```

- GET `api/plants/:id/foes` get a list of negative-influence companions for a specific plant. responds with a list of plants

response:

```
[{
    type_id: <string>,
    plant_id: <string>,
    type: 'Nightshade',
    plant_name: 'Tomato - indeterminate',
    plant_description: 'A tasty garden classic, with many different varieties sutable for different preparations'

},
{
    type_id: <string>,
    plant_id: <string>,
    type: 'Pepper',
    plant_name: 'Bell Pepper',
    plant_description: 'Sweet and crisp pepper, with large fruits in a variety of colors which have little to no spicy flavor'

}, ...
]
```

<!-- - GET `/api/plants?type=nightshade&frost=not-tolerant` get cultivars based on search params. This will return an array of cultivars that match the search filters.
response:
```
[
    {
    id: <string>,
    plant_id: <string>,
    name: 'Cherokee Purple',
    description: 'The Cherokee Purple Heirloom Tomato is a purple coloured variety, cultivated by a Native American Cherokee tribe. The plants are highly productive, producing loads of 12 ounce beefsteak tomatoes with deep red interiors. Its complex sweet flavours make it one of the best tasting heirlooms.',
    sun: 'full',
    frost: 'not-tolerant',
    maturity_in_days: 80,
    footprint: 12,
    support: true,

}, ...
]
``` -->

- GET `/api/planters` get all premade planters. This will return an array of planter objects.

response:

```

[
    {
    "id": "33e2ecc6-77a7-4c17-813b-7544aa55c480",
    "name": "Window Box",
    "type": "Planter",
    "height": 8,
    "width": 6,
    "length": 24,
    "radius": 0,
    "round": 0
  },
  {
    "id": "7008d119-7f02-4ddc-8b98-13752a9986c5",
    "name": "Round Raised Bed",
    "type": "Raised Bed",
    "height": 24,
    "width": 0,
    "length": 0,
    "radius": 9,
    "round": 1
  }, ...
]
```

<!-- - GET `api/planters?type=planter` get planters based on search params. This will return an array of planter objects that match the search filters.
response:
```
[
    {
        id: <string>,
        type: 'planter',
        height: 12,
        width: 0,
        length 0,
        radius: 4.5,
        round: true
    },
    {
        id: <string>,
        type: 'planter',
        height: 8,
        width: 6,
        length 18,
        radius: 0,
        round: false
    }, ...
]
``` -->

---

#### Users and log in

- POST `/login` accepts a user name and password in the request body and responds with a session auth token.

request body:

```
{
    username: user_name,
    password: password
}
```

response:

```
{
    auth_token: <token>
}
```

- POST `/signup` creates a new user account and responds with a session auth token on successful creation.

request body:

```
{
    username: user_name,
    password: password,
    zone: 5, (optional)
    email: email@email.com (optional)
}
```

response:

```
{
    auth_token: <token>
}
```

- POST `/users/:id/plans` saves a new plan to a user's account.

request body:

```
{
    name: 'Front Garden',
    planters: [
        {
            planter_id: <string>,
            plants: [
            {
                cultivar_id: <string>,
                position: 1
            },
            {
                cultivar_id: <string>,
                position: 3
            }, ...
            ]

        },
        {
            planter_id: <string>,
                plants: [
                {
                    cultivar_id: <string>,
                    position: 1
                },
                {
                    cultivar_id: <string>,
                    position: 2
                }, ...
                ]
        }, ...
    ]

}
```

- GET `/users/:id` gets user information and saved plans.

response:

```
{
    username: user_name,
    zone: 5,
    email: email@email.com,
    plans: [
        {
            id: <string>,
            name: 'Front Garden',
            planters: [
                {
                        planter_id: <string>,
                        plants: [
                        {
                            cultivar_id: <string>,
                            position: 1
                        },
                        {
                            cultivar_id: <string>,
                            position: 3
                        }, ...
                        ]

                }, ....
            ]

        },
        {
            id: <string>,
            name: 'Back Garden',
            planters: [
                {
                        planter_id: <string>,
                        plants: [
                        {
                            cultivar_id: <string>,
                            position: 1
                        },
                        {
                            cultivar_id: <string>,
                            position: 2
                        }, ...
                        ]

                }, ....
            ]

        }, ....
    ]
}
```
<!-- 
### Auth

<!--
Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented. -->

<!-- User accounts are optional to use the planner, but are required to save plans. Authentication/authorization will be implemented via JWTs. -->

<!-- ## Roadmap -->

<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build. -->

<!-- General functionality goals for this sprint:

- planning phase, plan components and backend structure - 2 days
- all `plants` endpoints functional, except `/friends` and `/foes` -2 days
- limited dataset for types, plants, and planters tables. One default cultivar for each plant
- styled for tablet/desktop
- 'guest' Plan Builder Page functionality - until ship
  - able to search for plants using filters only (front end implementation, no cultivar name search)
  - drag planters and plants out of their drawers
  - drop planters on the planning canvas
  - drop plants in planters -->

<!-- ## Nice-to-haves -->

<!-- Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing. -->

<!-- - `users and login` endpoints
- fully responsive
- saving functionality
- implement auth
- implement string search
- `/friends` and `/foes` endpoints --> 
