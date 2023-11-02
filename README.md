# ShowBuddy

ShowBuddy is an app for people who want to go to a concert, show or gig, but have nobody to go with. Maybe you just moved to a new city? Maybe none of your friends like your 'trash' taste in music. Well, ShowBuddy matches you with others who also want to go to the same show.

## Screenshots

![Show Buddy Homepage](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698945900/test_br9tcg.png)

![Show Buddy results](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698944694/2_kjvnfj.png)

![Show Buddy Profile](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698944690/3_son5m7.png)

![Show Buddies page](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698944690/4_c3af7i.png)

## Technologies used

- HTML
- CSS (Grid & Flexbox)
- Google Fonts
- Vanilla JavaScript
- Express
- MongoDB
- Mongoose
- Node.js
- 0Auth authentication
- Cloudinary (image hosting)
- Ticket Master API

## Getting Started

- Please visit: https://show-buddy-d61c7f6d8eb8.herokuapp.com/
- Login using your Google email
- Using the search bar, search for a city to see a list of shows
- Save a show, which adds and redirects to your profile
- option to delete shows if you no longer want to go
- click buddies link in the navigation to see who else is attending this show

## Next Steps

- [ ] Ability to match with another user and it renders in your profile
- [ ] Search for people in your area and see what shows they are going to
- [ ] Customize your Profile section
- [ ] When loading the homepage initialy it asks to view your location, and when confirmed it will automatically load shows near you

# Planning Materials

## API

I will be using the Ticket Master API, which you can see is getting pinged in the image below

![Ticket Master API](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698431039/Screenshot_2023-10-27_at_11.23.37_b8wnhd.png)

## ERD

![ERD](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698431350/ERD-2_f8awns.png)

## Restful Routing Chart

| Verb   | URL Pattern | Action (CRUD) | Description                     |
| ------ | ----------- | ------------- | ------------------------------- |
| GET    | /shows      | Index (Read)  | List all locations              |
| POST   | /shows/:id  | Create        | Add a show to your profile      |
| DELETE | /shows/:id  | Delete        | Delete a show from your profile |

| Verb | URL Pattern    | Action (CRUD) | Description                                                   |
| ---- | -------------- | ------------- | ------------------------------------------------------------- |
| GET  | /locations     | Read          | show all locations with shows                                 |
| GET  | /locations/:id | Read          | get all shows that have people going to them                  |
| GET  | /users/:id     | Read          | see a specific user's profile and the shows they are going to |

## Wireframes

![Home Screen](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698358073/1_igxoqn.png)

![Find shows in your city](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698358073/2_viphrj.png)

![Profile](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698358073/3_spmscn.png)

![Find buddies to go with / advertise you need someone to go with](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698358073/4_stzten.png)

## User Stories

- As a user, I want to be able to see what shows are available in my city
- As a user, I want to be able to save a show to my profile that I want to go to
- As a user, I want to be able to see what shows people are going to in my city
- As a user, I want to be able to partner with someone to go to a show
- As a user, I want to be able to decide to not go to a show and remove it from my profile

### MVP Checklist

- [x] Render a Homepage
- [x] Render a Profile page
- [x] Render a buddies page
- [x] Search functionality to find shows
- [x] Ability to add shows to profile
- [x] Ability to remove shows from profile
- [x] Authorization to add / delete a show only when logged in

### Stretch Goals

- [x] load creative from the various artists, instead of just listing the shows as text
- [ ] Ability to match with another user and it renders in your profile
- [ ] Search for people in your area and see what shows they are going to
- [ ] Customize your Profile section
- [ ] When loading the homepage initialy it asks to view your location, and when confirmed it will automatically load shows near you

- [ ] Genre picking instead of just location
- [ ] Make sure it is fully responsive
