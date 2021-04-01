/* Template
{
    id: int,
    name: 'str',
    description: 'str',
    stack: 'str',
    achieved: 'str',
    liveLink: 'str',
    repoClient: 'str',
    repoServer: 'str',
}
*/

const PROJECTS = [
    {
        id: 1,
        name: 'Right Routine',
        description: 'A fitness application for the self guided workout junkie: Right Routine is a full stack application allows users to enter in their own workouts separated by category and then have random workouts based on those categories',
        stack: 'React(with Hooks), Node/Express, Postgres/Knex',
        achieved: 'First Full Stack application (PERN), Self Taught React Hooks, Created through Test Driven Development, User Authentication with JSON Web Tokens',
        liveLink: 'https://right-routine.vercel.app',
        repoClient: 'https://github.com/IanBruns/right-routine-client',
        repoServer: 'https://github.com/IanBruns/right-routine-server',
    },
    {
        id: 2,
        name: 'Survive Oktoberfest',
        description: 'If you ever plan on going to Oktoberfest in Germany, you are going to have to know a few terms.  Through a spaced repetition learning technique, you can get through the beer holiday with ease',
        stack: 'React, Node/Express, Postgres/Knex',
        achieved: 'Learned to read and utilize code written by someone else and implimentation of the Linked List data structure',
        liveLink: 'https://spaced-repetition-alpha.vercel.app',
        repoClient: 'https://github.com/IanBruns/spaced-repetition-client',
        repoServer: 'https://github.com/IanBruns/spaced-repetition-server',
    },
    {

        id: 3,
        name: 'Play Packet',
        description: 'For the person who cannot stop claiming "new rule!" Play Packet is an application that allows users to store and share the house rules for the various board and card games they play',
        stack: 'React(with Hooks), Node/Express, Postgres/Knex',
        achieved: 'Reinforced React component modularization, React-Responsive for in-component rendering with media queries, using JOIN tables in sql',
        liveLink: 'https://playpacket.vercel.app/',
        repoClient: 'https://github.com/IanBruns/playpacket-client',
        repoServer: 'https://github.com/IanBruns/playpacket-server',

    }
]

export default PROJECTS;