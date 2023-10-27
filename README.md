# ShowBuddy

ShowBuddy is an app for people who want to go to a concert, show or gig, but have nobody to go with. Maybe you just moved to a new city? Maybe none of your friends like your 'trash' taste in music. Well, ShowBuddy matches you with others who also want to go to the same show. 


## API 

I will be using the Ticket Master API 


## ERD

![ERD](https://res.cloudinary.com/dtjasyr7k/image/upload/v1698361461/ERD_ctrmor.png)


## Restful Routing Chart

| Verb   | URL Pattern | Action (CRUD) | Description                          |
| ------ | ----------- | ------------- | ------------------------------------ |
| GET    | /shows      | Index (Read)  | List all locations                   |
| POST   | /shows/:id  | Create        | Add a show to your profile           |
| PUT    | /shows/:id  | Update        | Updates if a show has a buddy or not |
| DELETE | /shows/:id  | Delete        | Delete a show from your profile      |


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

- [ ] Render a Homepage
- [ ] Render a Profile page
- [ ] Render a buddies page
- [ ] Search functionality to find shows 
- [ ] Ability to add shows to profile 
- [ ] Ability to remove shows from profile 
- [ ] Ability to match with another user and it renders in your profile
- [ ] Authorization to add / delete a show or connect with a buddy only when logged in
- [ ] Make sure it is fully responsive 

### Stretch Goals

- [ ] Search for people in your area and see what shows they are going to
- [ ] Customize your Profile section
- [ ] When loading the homepage initialy it asks to view your location, and when confirmed it will automatically load shows near you
- [ ] load creative from the various artists, instead of just listing the shows as text
- [ ] Genre picking instead of just location

